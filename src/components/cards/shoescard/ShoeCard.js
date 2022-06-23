import React from 'react'
import "./shoescard.css"
import {Link} from 'react-router-dom'
const ShoeCard = (props) => {
  return (
    <><Link to='/shop' className='shoe-card-cont link'>
        <div className="shoe-card-cont">
            <div className="shoe-name">{props.name}</div>
            <div className="shoe-type">{props.type}</div>
            <div className="shoe-img">
                <img src={props.imgSrc} alt="shoe" />
            </div>
            <div className="shoe-price">
                <span>Rs. {props.oldPrice}.00</span>
                Rs.{props.newPrice}.00
            </div>
            <div className="shoe-add-cart-btn">
                Go To Shop
            </div>
            
        </div>
        
        </Link>
    </>
  )
}

export default ShoeCard