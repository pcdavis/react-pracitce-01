import React from 'react';
import './practice_button_css.css'


const MyButton = ({primary,children}) => {
    return (
    <div>
        <button className={`btn${primary ? ' btn-primary' : ''}`} >
            {children}
        </button>
    </div>
    )
}

// const MyButton = (props) => {
// return(
//     <div>
//         <button className={props.primary ? "btn btn-primary" : "btn"}>
//         {props.children}
//         </button>
//     </div>
//     )
// }

export default MyButton




