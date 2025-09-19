import React, { useState } from 'react'
import './Contact.css'
import meslogo from '../asset/meslogo.png'
import phonelogo from '../asset/phonelogo.png'
import calogo from '../asset/calogo.png'
import axios from 'axios'

const Contact =() =>{
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const [description, setDescription] = useState("");
const submitform = async()=>{
    const newUser = {firstname, lastname, description};
    let myUser = await axios.post("https://smvdr-bosp.vercel.app/register", newUser)
    console.log(myUser.data);
}
    return(
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={meslogo} alt="" /></h3>
                <p>Feel free to reach our service contact and get a well detailed information below from us. your feedback,
                questions and suggestions are important to us as we strive to provide exceptional service to our client.
                we ensure our product are delivered in the safest of hands and no in time any cause for alarm.</p>
                <ul>
                    <li><img src ={meslogo} alt=""/>Contact@Smartcdon14</li>
                    <li><img src ={calogo} alt=""/>+2348161705399</li>
                    <li><img src ={phonelogo} alt=""/>At abuja district, oop maitama extension layout Nigeria</li>
                </ul>
            </div>
            <div className ="contact-col">
                <form>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder="firstname" onInput={e=>setFirstname(e.target.value)}
                    required/>
                    <label>Phone number</label>
                    <input type="tel" name='phone' placeholder="lastname" onInput={e=>setLastname(e.target.value)} required/>
                    <label>write your message here</label>
                    <textarea name="message" rows="6" placeholder="description" onInput={e=>setDescription(e.target.value)} required></textarea>
                    <button type='submit' onClick={submitform} className='btn dark-btn'>Submit now</button>
                </form>
                <span></span>
            </div>
        </div>
    )
}
export default Contact;