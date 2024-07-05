import React, { FC } from "react";
import cl from "./Loader.module.css"


const Loader: FC = () => {
    
    return (
        <div className={cl.Loader}>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loader