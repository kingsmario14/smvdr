
import React from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Navbar/Hero/Hero'
import Duplex from './component/Navbar/Duplex/Duplex'
import Title from './component/Navbar/Title/Title'
import About from './component/Navbar/Title/About/About'
import Contact from './Contact/Contact'
import Footer from './component/Footer/Footer'



const App = () => {
  return (
     
    <div>
      <Navbar/>
      { <Title subTitle='OUR SERVICES INCLUDE' title='REAL ESTATE PROPERTIES IN NIGERIA'/>}
      {<Duplex/>}
      { <About/>}
      { <Contact/>}
      {<Hero/>}
      {<Footer/>}
          {/* { <nav>
            <Link to="/">Register</Link>
            <Link to="/users">Users</Link>
          </nav>} */}
       {/* <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/user/:id" element={<Users/>}></Route>
      </Routes> */}
    </div>
    
  )
};

export default App;