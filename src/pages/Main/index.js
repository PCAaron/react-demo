import React  from 'react'
import { Link } from 'react-router-dom'
import { menuItems } from "../../utils/constants";
import './style.css'

function Main() {
    return (
        <div className='main'>
            {menuItems.map((item,index)=>{
                return <Link to={item.url} key={index}><img className='main-img' src={item.logo} alt={item.title}/></Link>
            })}
        </div>
    )
}

export default Main
