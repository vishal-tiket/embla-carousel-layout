import CarouselLayout from "../components/CarouselLayout"

const Home = (): JSX.Element => {

  // card items
  const CardItems: JSX.Element[] = [1,2,3,4,5,6].map((el, index)=>{
    return (
      <div key={index} className="card">
        {el}
      </div>
    )
  })

  return (
      <div className="home">

          <h1>Embla Carousels</h1>

          <h2>1 item on 1 slide</h2>

          <CarouselLayout
            slidesToScroll={1}
            noOfItems={1}
            dragFree={false}
            align="center"
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId"
            showIndicators={true}
            items={CardItems}
          />

          <h2>2 item on 1 slide</h2>

          <CarouselLayout
            slidesToScroll={2}
            noOfItems={2}
            dragFree={false}
            align="center"
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId1"
            showIndicators={true}
            items={CardItems}
          />

          <h2>3 item on 1 slide</h2>

          <CarouselLayout
            slidesToScroll={3}
            noOfItems={3}
            dragFree={false}
            align="center"
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId2"
            showIndicators={true}
            items={CardItems}
          />


          <h2>4 item on 1 slide</h2>

          <CarouselLayout
            slidesToScroll={4}
            noOfItems={4}
            dragFree={false}
            align="center"
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId3"
            showIndicators={true}
            items={CardItems}
          />

          <h2>2.4 (size) item on 1 slide (for first carousel on homepage) and can be used as 3.4, 4.4 depending on requirement</h2>

          <CarouselLayout
            slidesToScroll={2.4}
            noOfItems={2.4}
            dragFree={false}
            align="start"
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId4"
            showIndicators={true}
            items={CardItems}
          />

      </div>
  )
}

export default Home