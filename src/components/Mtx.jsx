import React from 'react'

const Mtx = ({data,basket,setBasket}) => {
  const handleBasket = (id) => {

    const product=data.find((item) => item.id===id)
      product.inBasket=true
      const mbasket=data.filter((item) => item.inBasket===true);
      setBasket(mbasket);
      console.log(mbasket)
    }

const mtx = data.filter((item) => item.title==="Mtx")

  return (
    <div className='mt-40'>
    <div className='flex flex-wrap w-full min-h-screen'>
    {
        mtx.map((item, index) => {
          return (
            <div key={index} className=" w-72 h-96 bg-slite-300 px-16 py-5 mx-8">
              <div  className="w-72 h-80 bg-white-200 border-2 rounded px-8 py-5 group hover:bg-slate-500 transition-all duration-100 hover:text-white" >
                <img className=" w-56 h-44" src={item.image} alt={item.name} />
                <h3 className=" w-full h-12 text-center font-bold">{item.brand} {item.model}</h3>
                <div className="flex justify-between my-5 px-3">
                <p className=" text-rose-500 pt-1 font-semibold  group-hover:text-rose-900">{item.price} Azn</p>
                <button onClick={(e)=>handleBasket(item.id)} className=" w-24 h-8 bg-green-500 text-sm rounded  group-hover:bg-green-500 px-2">Add to Cart</button>
                </div>
              </div>
            </div>


          );
        })
      }
    </div>
 
</div>
  )
}

export default Mtx