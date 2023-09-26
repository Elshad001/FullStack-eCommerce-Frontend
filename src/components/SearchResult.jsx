import { useState } from 'react'

import { SlClose } from 'react-icons/sl'

const SearchResult = ({ dataResult, setDataResult, basket, setBasket, data, setData }) => {

  const handleBasket = (id) => {

    const product = data.find((item) => item.id === id)
    product.inBasket = true
    const mbasket = data.filter((item) => item.inBasket === true);
    setBasket(mbasket);
    console.log(mbasket);
  }

  
  return (


    <div className='absolute top-40 left-0  w-full  bg-slate-400 py-12 h-[700px] overflow-scroll'>
      <h3 className='w-full text-3xl text-center'>Search Results</h3>
      <div className='flex gap-12 w-full'>
        <div className='flex flex-wrap w-full '>
          <SlClose size={25} className='absolute top-5 right-5' onClick={() => setDataResult([])} />
          {
            dataResult.map((item, index) => {
              return (
                <div key={index} className=" w-72 h-auto bg-slite-300 px-16 py-12 mx-8">
                  <div className="w-72 h-80 bg-white-200 border-2 rounded px-8 py-5   group hover:bg-slate-500 transition-all duration-100 hover:text-white " >
                    <img className=" w-56 h-44" src={item.image} alt={item.name} />
                    <h3 className=" w-full h-12 text-center font-bold">{item.brand} {item.model}</h3>
                    <div className="flex justify-between my-5 px-3">
                      <p className=" text-rose-500 pt-1 font-semibold  group-hover:text-rose-900">{item.price} Azn</p>
                      <button onClick={(e) => handleBasket(item.id)} className=" w-24 h-8 bg-green-600 text-sm rounded group-hover:bg-green-500 px-2 ">Add to Cart</button>
                    </div>
                  </div>
                </div>


              );
            })
          }
        </div>
      </div>

    </div>


  )
}

export default SearchResult
