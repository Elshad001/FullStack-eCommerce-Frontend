import Slider from "react-slick";





function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", width: "45px", height: "35px", marginRight: "-10px",
        borderRadius: "5px", padding: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", width: "45px", height: "35px", marginLeft: "-10px",
        borderRadius: "5px", padding: "10px", color: "#f00"
      }}
      onClick={onClick}
    />
  );
}



function MainSlider({data,basket,setBasket}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };





    return (
      <div className=" w-5/6 h-full bg-slite-400 mx-auto rounded-md my-12">
        <Slider {...settings}>
        <div className="w-screen h-[500px]">
          
            <img className="w-screen h-full mt-0 mx-auto rounded" src="https://w-t.az/storage/uploads/2023/07/giatqgFWEaj1ONuET6uqqkHlR1ld9TOkaqZM7E8e-full.jpg"  alt=""/>
          </div>
          <div  className="w-screen h-[500px]">
            
            <img className="w-screen h-full mt-0 mx-auto rounded" src="https://w-t.az/storage/uploads/2023/07/HfqMpiYAWm8yI7ulY7k0aqzKa6kXtVhDRcd7pp2e-full.jpg" alt=""/>
          </div>
          <div className="w-screen h-[500px]">
            
            <img className="w-screen h-full mt-0 mx-auto rounded" src="https://w-t.az/storage/uploads/2023/05/zMgdou9SGGdRoh7EgCVY8p5sSJRHlzV0ZPSxZTn8-full.jpg" alt="" />
          </div>
          <div className="w-screen h-[500px]">
           <img className="w-screen h-full mt-0 mx-auto rounded" src="https://w-t.az/storage/uploads/2023/06/pa4wIZQWdYXZMMi152iu9EAQ4bFr5nYrhpdoD4de-full.jpg" alt="" />
          </div>
          <div className="w-screen h-[500px]">
            <img className="w-screen h-full mt-0 mx-auto rounded" src="https://w-t.az/storage/uploads/2023/07/X4tVoDPwHmRiRo88DaltTnDcEC1xH9O545adQdsK-full.jpg" alt="" />
          </div>
        </Slider>

      </div>
    );
  }

export default MainSlider;

