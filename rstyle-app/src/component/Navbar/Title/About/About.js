import React from 'react'
import smart from '../../../../asset/smart.jpg'
import logoorp from '../../../../asset/logoorp.png'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={smart} alt=""  className='smart'/>
            <img src={logoorp} alt=""  className='logoorp'/>
        </div>
        <div className="about-right">
            <h3> ABOUT SMART.C REAL ESTATE INVESTMENT</h3>
              <h2>Smart.c real estate investment is a big brand in the Nigeria estate industry, our aim has gone a long way in providing a sustainable services
            to investors and clients. my company provides good partnership in affilation to companies
            in the real estate services like zylus company, real fortes, acerol estate all in partnership
            with billionaire realtor group in Nigeria. we also offer excellent relationships with investors in diaspora
            and abroad who are looking for investment in the real estate market. 
            we focus in retaining properties in land development, residential company estates. this is a major yardstick 
               in developing our real estate investment for the benefit of home users. This is a productive tool in estate 
                development. </h2>
        </div>
    </div>
  )
}

export default About