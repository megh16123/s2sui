import React from 'react'
import './ContactFrom.scss'
import { useState,useCallback } from 'react'
import axios from 'axios';

const ContactFrom = ({closeModal}) => {
    const [contact,setContact] = useState({
        name: '',
        email: '',
        message: ''
    })
    const onInputChange= useCallback(

        (ev)=>{
          const name = ev.target.name;
          const value = ev.target.value;
            setContact({...contact, [name]:value})
        }
      ,[contact])
      const onSubmit = async()=>{
     const result = await axios.post('https://s2sapi.herokuapp.com/contactus',contact)
        if(result.status===200){
            closeModal();
        }
    }
    return (
        <>
            <form onSubmit={(e)=>{e.preventDefault()}} method='post' className='contactForm'>
            <div className='upperSection'>

                <div className='inputContainers'>
                    <label htmlFor="nameInput">Name</label>
                    <input id="nameInput" type="text" name="name" onChange={onInputChange}  placeholder='Name' />
                </div>
                <div className='inputContainers'>
                    <label htmlFor="emailInput">Email</label>
                    <input id="emailInput" type="email" name="email" onChange={onInputChange} placeholder='Email' />
                </div>
                <div className='inputContainers'>
                    <label htmlFor="messageInput">Message</label>
                    <textarea row={5} id="messageInput" type="text" name="message" onChange={onInputChange} placeholder='Message' />
                </div>
            </div>
                <button type='submit' className='submitButton' onClick={onSubmit}>Submit!!!</button>
            </form>
        </>
    )
}

export default ContactFrom
