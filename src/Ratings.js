import React from 'react';
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar"
const Ratings = ({ rating, onClick }) => {
    return (
        <div  style ={{marginLeft: 8, cursor: "pointer"}}>
            {
                [...Array(5)].map((_, i) => (
                    <span key ={i} onClick={()=>onClick(i)}>
                        {rating > i ?
                            <AiFillStar />
                            : <AiOutlineStar />
                        }
                    </span>
                ))
            }
        </div>
    )
}

export default Ratings
