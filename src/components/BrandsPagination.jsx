import Slider from "react-slick";


const brands = ["https://w-t.az/storage/brand/2023/05/5o0i1GC7bs3etqC7KBN4XjM9IQzMWqlXKyVkjZos-full.png",
    "https://w-t.az/storage/brand/2023/05/Kd0XYmms2EkzyyKlbu6nCtX5LLWJLtI2fFUMwO9F-full.png",
    "https://w-t.az/storage/brand/2023/05/fFkthZ5OY7TyaAXr1D0puxW49gRgI6GMMsmNF5DJ-full.png",
"https://w-t.az/storage/brand/2023/04/6bfOIlmbZtAM3272OhKu2rsiH29gjxJ7V6Z1BNAI-full.jpg",
"https://w-t.az/storage/brand/2023/04/F4QsOXzQd7vL0EVcWu6qfzI9HXvXh1XK9QDiHXEs-full.jpg",
"https://w-t.az/storage/brand/2023/04/FJvagMCoTxzUe9LvV3edzxIlE9EVqsUEUbSoHeFy-full.jpg",
"https://w-t.az/storage/brand/2023/04/XD8FuAVZvseRSgvOnNiW8BPJitJePmRdnzFaEzMS-full.jpg",
"https://w-t.az/storage/brand/2023/04/ibx8TgEYNX1LYkFHW9SG7vXVXTRhF47qfmRxCrRW-full.jpg",
"https://w-t.az/storage/brand/2023/04/foVjWSgHik2RByc1CqRXsfjiMZfLgkpGgp7stdbe-full.jpg",
"https://w-t.az/storage/brand/2023/05/eoq9fDDdocS4uc1zQj1xDa3IAHa52ylw73XixWIQ-full.png",]


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, display: "block", width: "25px", height: "25px", marginRight: "-10px",
                borderRadius: "50%", padding: "10px"
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
                ...style, display: "block", width: "25px", height: "25px", marginLeft: "-10px",
                borderRadius: "50%", padding: "10px", color: "#f00"
            }}
            onClick={onClick}
        />
    );
}



function Pagination({ data, basket, setBasket }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay:true
    };

    



    return (
        <div className=" w-5/6 h-full bg-slite-400 mx-auto rounded-md my-12 ">
            <Slider {...settings} className=" rounded-md">
                {
                    brands.map((brand, index) => {
                        return (
                            <div key={index} className="w-4/5 h-20 lg:h-32 bg-white px-5 lg:px-16 py-5">
                                <div className="w-8 h-8 lg:w-20 lg:h-20 bg-white-200 border-2 rounded-full " >
                                    <img className="w-8 h-8  lg:w-20 lg:h-20  rounded-full "  src={brand} alt="" width="200px" />
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