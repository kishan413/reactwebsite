import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () =>{
    return(
        <>
        <div className='header'>
                <div className='logo'>Programming </div>
                <div className='navbar'>
                    <nav >

                        <ol>
                            <li><NavLink exact activeClassName='active_class' to='/'>Home</NavLink></li>
                            <li><NavLink exact activeClassName='active_class' to='/about'>About</NavLink></li>
                            <li><NavLink exact activeClassName='active_class' to='/material'> Material</NavLink></li>
                            <li><NavLink exact activeClassName='active_class' to='/help'>Help</NavLink></li>
                        </ol>
                    </nav>
                </div>

            </div>
        </>
    )
}
export default Menu;