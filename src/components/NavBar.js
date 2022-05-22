import React, { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {  
  const searchRef = useRef()
  const navigate = useNavigate()

  function handleSearchClick(){
    navigate( `/items?search=${searchRef.current.value}` )    
  }

  function handleKeyDown(e){
    if (e.key === 'Enter'){
      handleSearchClick()
    }
  }

  return (
    <header className='w-full bg-mercadolibre py-1'>
      <div className='container mx-auto flex items-center'>
        <Link to={'/'}>
          <img src='/img/logoML.png' className='h-[80px] w-[80px] mr-3' alt='Logo ML' />
        </Link>

        <div className='flex w-full'>
          <input id="search" name="search" placeholder='Nunca dejes de buscar' className='w-full bg-white py-1 px-3 rounded-md' ref={searchRef} onKeyDown={handleKeyDown} />
          <button className=' bg-gray-100 p-4' onClick={handleSearchClick}>
            <FaSearch />
          </button>
        </div>

      </div>
    </header>
  )
}

export default NavBar