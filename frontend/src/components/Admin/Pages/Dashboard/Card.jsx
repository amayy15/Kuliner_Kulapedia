import React from 'react'
import './Dashboard.css'
import { AiOutlineMoneyCollect, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { useEffect } from 'react'


const Course =[
    {
        title: "Total Users",
        value: 1000,
        icon: <AiOutlineUser/>
    },
    {
        title: "Total Products",
        value: 2000,
        icon: <AiOutlineShoppingCart/>
    },
    {
        title: "Total Orders",
        value: 3000,
        icon: <AiOutlineShoppingCart/>
    },
    {
        title: "Total Revenue",
        value: 4000,
        icon: <AiOutlineMoneyCollect/>
    }
]

const Card = () => {
    
    return (
        <div className='card--container' id='cardContainer'>
            {Course.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="card--value">
                        <h4>{item.value}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;