import React from 'react'
import Card from './Card'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'

const cards = [
    {
        id:1,
        title:"CSS tutotials",
        image: image1
    },
    {
        id:2,
        title:"JS tutotials",
        image: image2
    },
    {
        id:3,
        title:"DB tutotials",
        image: image3
    },
]

function Cards(){
    return (
        <div className="container d-flex justify-content-center align-items-center h-100 " >
            <div className="row">
                {
                    cards.map((card)=>(
                        <div className="col-md-4 my-4" key={card.id}>
                            <Card title={card.title} imgSource={card.image}></Card>
                        </div>
                    ))
                }
            </div>
                    
        </div>
    )
}
export default Cards