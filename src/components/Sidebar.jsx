import React from 'react'
import { Link } from 'react-router-dom'
import {FiHome} from 'react-icons/fi'
import {TbBrandStackoverflow} from 'react-icons/tb'
const Sidebar = () => {
  return (
    <div>
      <nav>
      <ul className='absolute top-40 left-0 gap-12 w-full h-96 list-none text-lg bg-slate-400 px-5'>
      <li className='flex gap-2 w-32 my-5 h-8'><FiHome size={30}  src='https://w-t.az/storage/category/2023/06/GnKomCCLKCGswbqMifufNmw7p25bMwIaSPbcVkIO-full.png' alt=''/><Link to="/">Home</Link></li>
            <li className='flex gap-2 w-32 my-5 h-8'><TbBrandStackoverflow size={30} width='30px' height="30px" src='https://w-t.az/storage/category/2023/06/It5kGNq6lpb3x4usQfraofhL8b3BqQQm9z9v1exZ-full.png' alt=''/><Link to="/products">Products</Link></li>
            <li className='flex gap-2 w-32 my-5 h-8'><img width='30px' height="30px" src='https://w-t.az/storage/category/2023/06/GnKomCCLKCGswbqMifufNmw7p25bMwIaSPbcVkIO-full.png' alt=''/><Link to="/phones">Phones</Link></li>
            <li className='flex gap-2 w-32 my-5 h-8'><img width='30px' height="30px" src='https://w-t.az/storage/category/2023/06/It5kGNq6lpb3x4usQfraofhL8b3BqQQm9z9v1exZ-full.png' alt=''/><Link to="/laptops">Laptops</Link></li>
            <li className='flex gap-2 w-32 my-5 h-8'><img width='30px' height="30px" src='https://w-t.az/storage/category/2023/06/DRHF6NCJfj2w5iTUq2qKdAEpO6kSVkh7TfjKEyEr-full.png' alt=''/><Link to="/tv">TV</Link></li>
            <li className='flex gap-2 w-56 my-5 h-8'><img width='30px' height="30px" src='https://w-t.az/storage/category/2023/06/x0CgkeHVuecmBzbvYVNBhsf12tSBcYRM5dwW8CKY-full.png' alt=''/><Link to="/mtx">Household Appliances</Link></li>
          </ul>
      </nav>
    </div>
  )
}

export default Sidebar
