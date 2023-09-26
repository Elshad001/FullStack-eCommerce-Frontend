import React, { useState }  from 'react'
import { FaBars, FaUserAlt } from 'react-icons/fa'
import { SlBasket } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import SearchResult from './SearchResult'
import Sidebar from './Sidebar'

const Header = ({data ,setData , basket, setBasket ,result,setResult}) => {

const [value,setValue ] = useState('')
const [dataResult,setDataResult] = useState([])
const [sidebar ,setSidebar] = useState(false);
  const handleSearch = (e)=>
 {
  
  
    setValue(e.target.value)
    setResult(true)
    const fdata=data.filter((item)=>value.length>=2 ? item.brand.toLowerCase().includes(value.toLowerCase()) ||
    item.model.toLowerCase().includes(value.toLowerCase() ) :setResult(false))
    setDataResult(fdata) 
 }  
console.log(sidebar)
  return (
    <div className='fixed top-0 left-0 w-full h-36 z-30 '>
      <div className='flex justify-between  w-full h-20 bg-zinc-700 px-5 md:px-20  lg:px-32 py-5  text-white'>
        <div className='w-1/12 md:w-2/6 lg:w-1/6  h-16 text-2xl font-bold'>LOGO</div>
        <nav className='hidden lg:flex justify-between gap-20  lg:w-2/6 md:hidden sm:hidden h-20 list-none text-lg'>
          <Link to="/" ><li>Home</li></Link>
          <li>About</li>
          <Link to="/products"><li>Products</li></Link>
          <li>Contact</li>
        </nav>
        <div className='flex justify-between w-7/12 sm:4/6 md:w-2/6 lg:w-1/6 pl-12'>
          <span className='flex gap-2'><FaUserAlt className='mt-1' />Log in</span>
         <Link to="/basket">
            <span className='relative flex gap-2'><SlBasket className='font-bold' size={25} /><span className='absolute left-3 -top-4 text-red-700 font-bold'>{basket.length}</span>Cart</span>
         </Link> 
        </div>
      </div>
      <div className='flex justify-between gap-5 lg:gap-24 w-full h-20 bg-zinc-600 px-5 md:px-20 lg:px-32 py-5 z-30 text-white'>
          <ul className=' hidden lg:flex gap-12 w-3/5 h-20 list-none text-lg'>
            <li className='flex gap-2 w-32 h-8'><img width='30px' height="30px" src='https://w-t.az/storage/category/2023/06/GnKomCCLKCGswbqMifufNmw7p25bMwIaSPbcVkIO-full.png' alt=''/><Link to="/phones">Phones</Link></li>
            <li className='flex gap-2 w-32 h-8'><img width='30px' height="30px" src='https://w-t.az/storage/category/2023/06/It5kGNq6lpb3x4usQfraofhL8b3BqQQm9z9v1exZ-full.png' alt=''/><Link to="/laptops">Laptops</Link></li>
            <li className='flex gap-2 w-32 h-8'><img width='30px' height="30px" src='https://w-t.az/storage/category/2023/06/DRHF6NCJfj2w5iTUq2qKdAEpO6kSVkh7TfjKEyEr-full.png' alt=''/><Link to="/tv">TV</Link></li>
            <li className='flex gap-2 w-56 h-8'><img width='30px' height="30px" src='https://w-t.az/storage/category/2023/06/x0CgkeHVuecmBzbvYVNBhsf12tSBcYRM5dwW8CKY-full.png' alt=''/><Link to="/mtx">Household Appliances</Link></li>
          </ul>
          <div className='lg:hidden w-1/6'>
              <FaBars size={25} onClick={()=>setSidebar(!sidebar)} />
          </div>
          <div className='w-5/6 flex gap-5'>
          <input className='text-sm sm:w-60  md:w-80 lg:w-80 h-8 rounded-sm text-right pr-5 text-gray-950'  onChange={(e)=>handleSearch(e)} placeholder='Write products name' />
          <button className='sm-w-12 md:w-20 lg:w-20 h-8 text-sm rounded-sm bg-blue-500 pb-2 px-2' onClick={(e)=>handleSearch(e)}>Search</button>
        </div>
      </div>
      {
        dataResult.length>0 && <SearchResult dataResult={dataResult} setDataResult={setDataResult} basket={basket} setBasket={setBasket} data={data} setData={setData}/> 
      }
      {
       
        sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
      }
    </div>
  )
}

export default Header
