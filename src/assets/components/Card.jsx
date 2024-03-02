import React from "react";
import '../../index.css';



const Card = (props) => {
    return (
        <div className={'Card '}>
            <img src={props.imageUrl} alt={`Cover of ${props.songName}`} className="Card-image" />
            <h5>{props.songName}</h5>
            <h6>{props.singer}</h6>
            <a href={props.songUrl} target="_blank" rel="noopener noreferrer">
                <button>View Song</button>
            </a>
        </div>
    )
}


export default Card;
