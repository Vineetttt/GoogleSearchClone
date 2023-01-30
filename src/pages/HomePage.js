import React from 'react'
import './HomePage.css';
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from '../components/Search';


function Home() {
  return (
    <>
    <div className='home'>
    <div className="home_header">
      <div className="home_headerLeft">
        <Link to='/about'>About</Link>
        <Link to='/store'>Store</Link>
      </div>
      <div className="home_headerRight">
        <Link to='/gmail'>Gmail</Link>
        <Link to='/images'>Images</Link>

        <AppsIcon/>   {/*Grid Icon */}
        <Avatar />    {/*Avatar Icon */}
      </div>
    </div>
    <div className="home_body">
      <img 
      src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" 
      alt="" />

      <div className="home_inputContainer">
        <Search hideButtons/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home