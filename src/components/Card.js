import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'

function Card({title,imgSource,text}){
    return(
        <div className="card text-center">
            <img className="img-fluid"  src={imgSource} alt={title}/>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                {
                    text ? text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in aut enim veritatis et ipsam tempora iure facere sint voluptate eligendi explicabo ut officiis labore, fugit eaque unde ducimus mollitia.'
                }</p>
                <a href="#" className="btn btn-outline-secondary sas">Go to website</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title:PropTypes.string.isRequired,
    imageSource:PropTypes.string,
    // title:PropTypes.string
}

export default Card