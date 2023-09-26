import React from 'react'
import {FaTrash } from 'react-icons/fa'


const Basket = ({ basket , openBasket , setOpenBasket ,setBasket}) => {

const handleDelete =(index)=>
{
    basket[index].inBasket=false
    console.log(basket[index].inBasket)
    const mbasket=basket.filter((item) => item.inBasket===true);
    setBasket(mbasket);
    console.log(mbasket)
  
}



const totalPrice=(basket)=>
{

    let TotalPrice=0
    basket.map((item, index)=>
    (
        TotalPrice+= parseInt(item.price)
    ))

    return TotalPrice
}

    return (
        <div className=' mt-40 py-12 z-50'>
            <h3 className='w-full text-center text-4xl font-bold text-black mx-auto '>Shopping Cart</h3>
              <div className='flex '>
             <div className=' w-3/5 min-h-screen py-8'>
                
            {
                basket.length === 0  ?  <p className='w-96 h-96 mx-auto text-3xl pt-36 text-center text-rose-500'>Your Shoping Cart is Empty</p>
                :
                basket.map((item, index) => 
                    (
                        <div key={index} className='flex gap-36 border-1 bg-white my-2 px-8 text-black'>
                           <img className=" w-56 h-44" src={item.image} alt={item.name} />
                           <div className='w-36 mt-12'>
                            <h3 className=" w-full h-12 text-center font-bold ">{item.brand} {item.model}</h3>
                            <p className=" text-rose-500 pt-1 font-bold text-center">{item.price} Azn</p>
                           </div>
                           <FaTrash size={30} className=' text-slate-500 mt-16' onClick={()=>handleDelete(index,item.inBasket)} />
                        </div>
                    )
                )
            }
        </div>
        <div className='fixed top-96 right-36  w-1/5 h-32 bg-gradient-to-b from-gray-500 to-gray-300 text-xl text-black rounded p-5'>
            <p className='my-2'>Products in Cart:<span className=' text-red-500 font-bold'> {basket.length}</span></p>
            <p className='my-2 '>Total Price: <span className=' text-red-500 font-bold'>{totalPrice(basket)} Azn</span></p>
            </div>
        </div>
        </div>
      
       
  
)}

export default Basket
