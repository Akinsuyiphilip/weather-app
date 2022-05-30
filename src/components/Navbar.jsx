import React from 'react'
import { useState } from 'react';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () =>   setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
<>
    <nav className='navbar'>
        <h1 className="navbarword"> <span>P</span>hilip</h1>
        <div className="menu-icon" onClick={handleClick}>
               <i className={ click ? 'fas fa-times' : 'fas fa-bars'}></i>
           </div>
        <div className={ click ? 'nav-menu active' : 'nav-menu '}>
            <a href="#" > Github <i class="fa-brands fa-github"></i></a>
            <a href="#" >Twitter <i class="fa-brands fa-twitter"></i></a>
            <a href="#" >facebook <i class="fa-brands fa-facebook"></i></a>
            <a href="#" >Instagram <i class="fa-brands fa-instagram"></i></a>
            <a href="#" >Youtube <i class="fa-brands fa-youtube"></i></a>
        </div>
    </nav>
</>

)
}

export default Navbar