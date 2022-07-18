import React from 'react'
import './ContactFrom.scss'

const ContactFrom = () => {
    return (
        <>
            <form action='' method='post' className='contactForm'>
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
                    <label htmlFor="messageInput">Message</label>
                    <textarea id="messageInput" type="text" name="name" placeholder='Message' />
                </div>
            </div>
                <button type='submit' className='submitButton'>Submit!!!</button>
            </form>
        </>
    )
}

export default ContactFrom