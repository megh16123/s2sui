import axios from 'axios';
import React from 'react'
import './RegisterationForm.scss'

const RegisterationForm = ({closeModal}) => {
    const handleSubmit=async(e)=>{
e.preventDefault();
let data = {};
let classes = []
for (let i =0;i<e.target.length;i++){
    if(e.target[i].type==='checkbox'){
        if(e.target[i].checked){
            classes.push({class:e.target[i].value});
        }
    }else{
        data[e.target[i].name] = e.target[i].value;
    }
}
data['classes'] = classes;
const res = await axios.post('https://s2sapi.herokuapp.com/student/enrollnew',data);
if(res.status===200){
 closeModal();
}
    }
    return (
        <>
            <form onSubmit={handleSubmit} method='post' className='registerationForm'>
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
                        <textarea row={5} id="addressInput" type="text" name="address" placeholder='Address' />
                    </div>
                </div>
                <p>Choose classes : </p>
                <div className='classCheckBoxes'>
                    <div>
                        <input id="class9" type="checkbox" name="class9" value="class9" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="class9">Class 2nd-9th</label>
                    </div>
                    <div>
                        <input id="class10" type="checkbox" name="class10" value="class10" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="class10">Class 10th</label>
                    </div>
                    <div>
                        <input id="class11" type="checkbox" name="class11" value="class11" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="class11">Class 11th</label>
                    </div>
                    <div>
                        <input id="class12" type="checkbox" name="class12" value="class12" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="class12">Class 12th</label>
                    </div>
                    <div>
                        <input id="neetJee" type="checkbox" name="NEET/JEE" value="NEET/JEE" placeholder='Name' />
                        <label className='checkBoxLabel' htmlFor="neetJee">Class NEET/JEE</label>
                    </div>
                </div>
                <button type='submit' className='submitButton'>Submit!!!</button>
            </form>
        </>
    )
}

export default RegisterationForm