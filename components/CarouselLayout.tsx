import useEmblaCarousel, {
  EmblaOptionsType,
} from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from "react"

/** types (Props) for carousel layout
  1. slidesToScroll => Group slides together. Drag interactions, dot navigation, and previous/next buttons are mapped to group slides into the given number.
  2. dragFree => Enables momentum scrolling. The speed and duration of the continued scrolling is proportional to how vigorous the drag gesture is.
  3. align => Align the slides relative to the carousel viewport. Use one of the predefined alignments start, center or end.
  4. noOfItems => Number of items on carousel viewport.
  5. items => Array of carousel items.
  6. showProgressBar => To show/hide the progress bar.
  7. showSlideHandlers =>  To show/hide the prev/next buttons.
  8. containerId => Carousel container id required to calculate the width of child according to the carousel view port.
  9. showIndicators => To show/hide the indicators of selected and non selected index/item
*/

type CarouselLayoutTypes = {
  slidesToScroll:number,
  dragFree: boolean,
  align: "start" | "center" | "end",
  noOfItems: number,
  items: React.ReactNode[],     
  showProgressBar: boolean,
  showSlideHandlers: boolean,
  containerId: string,
  showIndicators: boolean 
}

// carousel layout hoc
const CarouselLayout = ({
  slidesToScroll=1, // defalt values
  noOfItems=1,
  align="center",
  dragFree=false,
  showProgressBar=false,
  showSlideHandlers=false,
  items,
  containerId="carousel_id",
  showIndicators=false
}: CarouselLayoutTypes) => {
    
    // options of useEmblaCarousel hook
    const options: EmblaOptionsType = {
      slidesToScroll,
      align,
      dragFree
    }

    // embla carousel hook
    const [emblaRef, embla] = useEmblaCarousel(options);

    // states to handle previous, next button, selected index, scrollbar progress etc
    const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
    const [scrollProgress, setScrollProgress] = useState<number>(0)
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[] | []>([]);

    // scroll to a particular slide index
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
      embla
    ]);

    // previous button handler
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);

    // next button handler
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    
    // on scroll handler to calculate scrollbar progress
    const onScroll = useCallback(() => {
      if (!embla) return;

      const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
      setScrollProgress(progress * 100);

    }, [embla, setScrollProgress]);

    // handle when to disable previous and next button
    const onSelect = useCallback(() => {
      if (!embla) return;

      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());

    }, [embla, setSelectedIndex]);

    // event handlers for embla carousel
    useEffect(() => {
      if (!embla) return;

      onSelect()
      onScroll();
      embla.on("select", onSelect);
      embla.on("scroll", onScroll);
      setScrollSnaps(embla.scrollSnapList());

    }, [embla, onScroll, onSelect, setScrollSnaps]);

    // calculating width of slides in carousel
    useEffect(()=>{
      const slidesArr: NodeListOf<ChildNode> = document.querySelector(`#${containerId}`)?.childNodes
      slidesArr?.forEach((el: HTMLElement)=>{
          el.style.flex = `0 0 calc(${(100/noOfItems)}% - 10px)`;
      })
    }, [])

    // item indicators
    const renderIndicators = showIndicators && scrollSnaps.map((_, index) => (
      <span
        key={index}
        className={index === selectedIndex ? "active" : ""}
        onClick={() => scrollTo(index)}
      >
      </span>
    )) || null

    return (
        <>

          {/* items ( card items ) */}
          <div className="embla3" ref={emblaRef}>
            <div className="embla__container3" id={containerId}>
              {items}
            </div>
          </div>

          
          <div style={{background: "#eee", display: "flex", justifyContent: "center", alignItems: "center"}}>
            {/* prev and next button */}
            {showSlideHandlers && <>
              <button style={{fontSize: "20px"}} onClick={scrollPrev} disabled={!prevBtnEnabled}>{`<`}</button>
              <button style={{fontSize: "20px"}} onClick={scrollNext} disabled={!nextBtnEnabled}>{`>`}</button>
            </>}

            {/* progress bar */}  
            {showProgressBar && <>
              <div className='progress-bar-container'>
                <div className='progress-bar' style={{transform: `translateX(${scrollProgress}%)`}} />  
              </div>
              <div>{`${selectedIndex+1}/${scrollSnaps.length}`}</div>
            </>}
          </div>

          {/* item indicators */}
          <div className='indicators'>
            {renderIndicators}
          </div>
          
        </>
    )

}

export default React.memo(CarouselLayout)