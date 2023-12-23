import styled from 'styled-components';

import React, {useState} from 'react';

import BurgerMenu from './BurgerMenu';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";
import { NavLink, Link } from 'react-router-dom';


function NavBar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <nav>
                <Link to='/' >
                <h2>FROMda<span>HOOD</span></h2>
                </Link>
                <div className={` links ${clicked ? 'active' : ''}`}>                    
                    <ul>
                        <li>
                            
                                <NavLink to={`/category/chombas`} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Chombas</NavLink>
                            
                            
                                <NavLink to={`/category/remeras`} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                            
                            
                                <NavLink to={`/category/jeans`} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Jeans</NavLink>
                            
                           
                                <NavLink to={`/category/bermudas`} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Bermudas</NavLink>
                            
                        </li>
                    </ul>
                </div>
                <div className='login-carro'>
                    <CartWidget />
                </div>
                <div className='burger-menu'>
                    <BurgerMenu clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </nav>
        </>
    )
}

export default NavBar;

const BgDiv = styled.div`
  background-color: #000;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    margin-top: 120px;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;

  }
`