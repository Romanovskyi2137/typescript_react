import React, { FC } from "react";
import { IProduct } from "../../models";
import cl from "./Card.module.css"


interface CardProps {
    content: IProduct | null
}

const Card: FC<CardProps> = ({content}) => {
    return (
        content ?
            <div className={cl.Card__container}>
                <img src={content.image}/>
                <h3>rating: {content.rating.rate}</h3>
                <h3>category: {content.category}</h3>
                <p>{content.description}</p>
            </div>
        :
            <span>"no data, how did you opened it, stepbro!?"</span>
    )
}


export default Card