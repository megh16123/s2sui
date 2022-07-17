import React from 'react'
import './Classes.scss'

const Classes = () => {
    return (
        <>
            <div id="hero" />
            <div className="heroContent">
                <h1>Classes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quo quod error perferendis ratione possimus natus eveniet nobis ullam eum voluptate deleniti ad animi minus!</p>
                <button class="register-button">REGISTER</button>
            </div>
            <div id="cards">
                <div className="card card-1">NEET/JEE</div>
                <div className="card card-2">Class 12th</div>
                <div className="card card-3">Class 11th</div>
                <div className="card card-4">Class 10th</div>
                <div className="card card-5">Class 9th</div>
            </div>
        </>
    )
}

export default Classes


