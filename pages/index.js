import CarouselLayout from "../components/CarouselLayout"

const Home = () => {

  // card items
  const CardItems = [1,2,3,4,5,6].map((el, index)=>{
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
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId"
          >
            {CardItems}
          </CarouselLayout>

          <h2>2 item on 1 slide</h2>

          <CarouselLayout
            slidesToScroll={2}
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId1"
          >
            {CardItems}
          </CarouselLayout>

          <h2>3 item on 1 slide</h2>

          <CarouselLayout
            slidesToScroll={3}
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId2"
          >
            {CardItems}
          </CarouselLayout>


          <h2>4 item on 1 slide</h2>

          <CarouselLayout
            slidesToScroll={4}
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId3"
          >
            {CardItems}
          </CarouselLayout>

          <h2>2.4 (size) item on 1 slide (for first carousel on homepage) and can be used as 3.4, 4.4 depending on requirement</h2>

          <CarouselLayout
            slidesToScroll={2.4}
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId4"
          >
            {CardItems}
          </CarouselLayout>

      </div>
  )
}

export default Home