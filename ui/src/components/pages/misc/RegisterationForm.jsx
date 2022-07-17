import React from 'react'
import './RegisterationForm.scss'

const RegisterationForm = () => {
    return (
        <>
            <form action="" method='post' className='registerationForm'>
                <div className='upperSection'>
                    <div className='inputContainers'>
                        <label htmlFor="nameInput">Name</label>
                        <input id="nameInput" type="text" name="name" placeholder='Name' />
                    </div>
                    <div className='inputContainers'>
                        <label htmlFor="emailInput">Email</label>
                        <input id="emailInput" type="email" name="email" placeholder='Email' />
                    </div>
                    <div className='inputContainers'>
                        <label htmlFor="phoneInput">Phone Number</label>
                        <input id="phoneInput" type="text" name="phone" placeholder='Phone Number' />
                    </div>
                    <div className='inputContainers'>
                        <label htmlFor="addressInput">Address</label>
                        <textarea id="addressInput" type="text" name="name" placeholder='Name' />
                    </div>
                </div>
                <p>Choose classes : </p>
                <div className='classCheckBoxes'>
                    <div>
                        <input id="class9" type="checkbox" name="name" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="class9">Class 2nd-9th</label>
                    </div>
                    <div>
                        <input id="class10" type="checkbox" name="name" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="class10">Class 10th</label>
                    </div>
                    <div>
                        <input id="class11" type="checkbox" name="name" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="class11">Class 11th</label>
                    </div>
                    <div>
                        <input id="class12" type="checkbox" name="name" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="class12">Class 12th</label>
                    </div>
                    <div>
                        <input id="neetJee" type="checkbox" name="name" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="neetJee">Class NEET/JEE</label>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RegisterationForm