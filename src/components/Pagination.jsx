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



function Pagination({data,basket,setBasket}) {
  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

const handleBasket = (id) => {

  data[id].inBasket=true
  console.log(data[id].inBasket)
  const mbasket=data.filter((item) => item.inBasket===true);
  setBasket(mbasket);
  console.log(mbasket)
}



    return (
      <div className="hidden lg:block w-5/6 h-full bg-slite-400 mx-auto rounded-md">
        <Slider {...settings}>
          {
            data.map((item, index) => {
              return (
                <div key={index} className="w-full lg:w-4/5 h-32 lg:h-96 bg-white px-16 py-5">
                  <div  className="w-32 lg:w-72 h-36 lg:h-80 bg-white-200 border-2 rounded px-8 " >
                    <img className="w-28 lg:w-56 h-20 lg:h-44" src={item.image} alt={item.name} />
                    <h3 className=" w-full h-12 text-center font-bold text-sm">{item.brand} {item.model}</h3>
                    <div className="flex justify-between my-5 px-3">
                    <p className=" text-rose-500 pt-1 font-semibold">{item.price} Azn</p>
                    <button onClick={(e)=>handleBasket(item.id)} className=" w-20 h-8 bg-green-600 text-sm rounded ">Sebete At</button>
                    </div>
                  </div>
                </div>


              );
            })
          }
        </Slider>

      </div>
    );
  }

export default Pagination;

