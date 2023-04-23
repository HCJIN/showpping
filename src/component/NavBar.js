import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아 / 유아', '아동', 'H&M Home', 'Sale', '지속가능성']
  return (
    <div>
        <div>
            <div className='login-button'>
              <FontAwesomeIcon icon={faUser} />
              <div className='login'>로그인</div>
            </div>
        </div>
        <div className='nav-section'>
          <img src='https://brandslogo.net/wp-content/uploads/2014/10/h-m-logo.png' alt=''/>
        </div>
        <div className='header-area'>
          <div className='menu-area'>
            <ul className='menu-List'>
              {menuList.map((menu) => (
                <li>{menu}</li>
              ))}
            </ul>
          </div>
          <div className='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" className="input" value="제품검색"></input>
          </div>
        </div>
    </div>
  )
}

export default NavBar