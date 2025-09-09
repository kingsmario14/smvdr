import React from 'react';
import './Hero.css';
import Hero from '../../../asset/Hero.jpg';



 const Pic = () => {
  return (
    <div className='hero'>
    <img src = {Hero} alt="" />
  {/* <h1><span>we ensure we give you better quality service</span></h1>
    <p>welcome to smart.c homestead to your urban sanctuary! this sytlish town house boasts sleek modern finishes and an abundance of natural light that dances through the generous windows. Take pleasure in the garmet kitchen, a haven for aspiring chefs, and savor your morning
        coffee on the private rooftop terrace, where city views unfold before your eyes. Nestled in a vibrant community, this townhouse is your gateway to a dynamic lifestyle, complete with trendy eateries, parks, and cultural hotspots.
        experience city living at its finest in this chic condo retreat. immerse yourself in the luxurious ambiance of the building's amenities, from the rooftop infinity pool to the state--of the art fitness center. inside your own sanctuary, revel in the seamless blend of modern design and comfort. with burstling city life just outside your doorstep, this condo offers an unparalled cosmopolitan lifestyle that's perfect for professionals and urban enthusiasts alike.
our services is ensuring we render quality houses/lands to our respective clients in investing in real estate. the qualities of our properties we have in Nigeria are customary properties owned by individuals,
        companies and goverment residentials.</p> */}
        <button className='btn'>Explore more</button>
    
    </div>
  )
}
export default Pic;