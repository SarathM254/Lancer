import React from 'react'
import '../css/card.css'
import Card from './Card.jsx'
const Cards = () => {
  return (
    <div>
      <div className="Heading font-bold font-poppins text-white text-4xl mb-1.5">Dashboard</div>
      <div className="Heading text-[18px]  font-poppins text-[#9C9C9C] mb-8">Welcome back Steve!</div>
                <div
                    className="cards grid  grid-cols-4 p-4 rounded-3xl ">
                    
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
    </div>
  )
}

export default Cards
