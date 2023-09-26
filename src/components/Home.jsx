import React from 'react'
import MainSlider from './MainSlider'
import Pagination from "./Pagination";
import BrandsPagination from "./BrandsPagination"
const Home = ({data,basket,setBasket}) => {
  return (
    <div className='pt-32 h-auto py-12' >
      <MainSlider data={data} basket={basket} setBasket={setBasket}/>
      <BrandsPagination />
      <Pagination data={data} basket={basket} setBasket={setBasket} />
    </div>
  )
}

export default Home
