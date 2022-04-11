import { GetServerSideProps } from "next"
import CarouselLayout from "../components/CarouselLayout"
import Link from "next/link"

const Home = (props): JSX.Element => {

  const { impressionSentences } = props

  return (
      <div className="home">

          <h1>Embla Carousels, {impressionSentences?.title}</h1>

          <h2>1 item on 1 slide</h2>

          <CarouselLayout
            slidesToScroll={1}
            noOfItems={1}
            dragFree={false}
            align="center"
            showProgressBar={false}
            showSlideHandlers={true}
            handlersPosition="center"
            showSlideHandlersOnHover={true}
            slideHandlersPosition="center"
            containerId="someId"
            showIndicators={true}
          >
            {impressionSentences?.items?.map((el)=>{
              return (
                <div style={{background:"grey"}}>
                  <Link href={el?.clickUrl}>
                    <div key={el?.title} className="card">
                        <>
                          <div className="close">x</div>
                          {el?.title}
                        </>
                    </div>
                  </Link>
                </div>
              )
            })}
          </CarouselLayout>

          {/* <h2>2 item on 1 slide</h2>

          <CarouselLayout
            slidesToScroll={2}
            noOfItems={2}
            dragFree={false}
            align="center"
            showProgressBar={true}
            showSlideHandlers={true}
            containerId="someId1"
            showIndicators={true}
          >

            {[1,2,3,4,5,6].map((el, index)=>{
              return (
                <div key={index} className="card">
                  {el}
                </div>
              )
            })}
          </CarouselLayout>

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
          >
            {[1,2,3,4,5,6].map((el, index)=>{
              return (
                <div key={index} className="card">
                  {el}
                </div>
              )
            })}
          </CarouselLayout>


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
          >
            {[1,2,3,4,5,6].map((el, index)=>{
              return (
                <div key={index} className="card">
                  {el}
                </div>
              )
            })}
          </CarouselLayout>

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
          >
            {[1,2,3,4,5,6].map((el, index)=>{
              return (
                <div key={index} className="card">
                  {el}
                </div>
              )
            })}
          </CarouselLayout> */}

      </div>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  return {
    props: {
      impressionSentences: {
        title: "",
        items: [
          {
            "id": "",
            "icon": "",
            "title": "Staycation di Bandung",
            "subtitle": "",
            "clickUrl": "",
            "highlight": "",
            "productType": "",
            "verticals": null
          },
          {
            "id": "",
            "icon": "",
            "title": "Event di Jakarta",
            "subtitle": "",
            "clickUrl": "",
            "highlight": "",
            "productType": "",
            "verticals": null
          },
          {
            "id": "",
            "icon": "",
            "title": "Penerbangan ke Surabaya",
            "subtitle": "",
            "clickUrl": "",
            "highlight": "",
            "productType": "",
            "verticals": null
          },
          {
            "id": "",
            "icon": "",
            "title": "Tur ke Lombok",
            "subtitle": "",
            "clickUrl": "",
            "highlight": "",
            "productType": "",
            "verticals": null
          },
          {
            "id": "",
            "icon": "",
            "title": "Tiket kereta ke Yogyakarta",
            "subtitle": "",
            "clickUrl": "",
            "highlight": "",
            "productType": "",
            "verticals": null
          },
          {
            "id": "",
            "icon": "",
            "title": "Airport Transfer di Soekarno-Hatta",
            "subtitle": "",
            "clickUrl": "",
            "highlight": "",
            "productType": "",
            "verticals": null
          },
          {
            "id": "",
            "icon": "",
            "title": "Aktivitas di Bali",
            "subtitle": "",
            "clickUrl": "",
            "highlight": "",
            "productType": "",
            "verticals": null
          },
          {
            "id": "",
            "icon": "",
            "title": "Sewa Mobil di Semarang",
            "subtitle": "",
            "clickUrl": "",
            "highlight": "",
            "productType": "",
            "verticals": null
          },
          {
            "id": "",
            "icon": "",
            "title": "Cicilan Paylater",
            "subtitle": "",
            "clickUrl": "",
            "highlight": "",
            "productType": "",
            "verticals": null
          }
        ],
        "rankingOrigin": ""
      },
    }
  }
}

export default Home