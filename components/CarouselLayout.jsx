import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from "react"

const CarouselLayout = ({
    slidesToScroll=1, // slides to scroll from handlers 
    showProgressBar=false, // to show/hide progresss bar
    showSlideHandlers=true, // to show/hide handlers (prev/next btn)
    children, // card items
    containerId="someId", // conatiner id (used in the calculation of card items width),
    showIndicators=true // to show/hide indicators
  }) => {
    
    // embla carousel hook
    const [emblaRef, embla] = useEmblaCarousel({
        slidesToScroll,
        skipSnaps: false,
        align: "center"
    });

    // states to handle previous, next button, selected index, scrollbar progress etc
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
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
        const slidesArr = document.querySelector(`#${containerId}`)?.childNodes
        slidesArr?.forEach((el, index)=>{
            slidesArr[index].style.flex = `0 0 calc(${(100/slidesToScroll)}% - 10px)`;
        })
    }, [])

    // indicators
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

          {/* children ( card items ) */}
          <div className="embla3" ref={emblaRef}>
            <div className="embla__container3" id={containerId}>
              {children}
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

          {/* indicators */}
          <div className='indicators'>
            {renderIndicators}
          </div>

        </>
    )

}

export default React.memo(CarouselLayout)