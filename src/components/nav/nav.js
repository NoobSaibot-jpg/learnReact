// import NavItem from "./nav-item"
import React, { Component } from 'react';

class Nav extends Component {

    clickBtnNav = (e) => {
        console.log(e.target.classList.value)
    }

    icons = [
        "fas fa-ban",
        "fas fa-band-aid",
        "fab fa-bandcamp",
        "fas fa-bars"
    ];
   
    render(){
        return(
            <ul className="nav">
                {this.icons.map((item, id)=>{
                    return  <li className="nav__item" 
                                key = {id} 
                                onClick = {this.clickBtnNav}>
                         <i className={item}></i>
                        </li>
                })}
            </ul>
        )
    }
}


export default Nav;



    