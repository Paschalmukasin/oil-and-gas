import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <marquee behavior="" direction="left"><h1>Welcome to Mukasin Enterprise</h1></marquee>
        <div className='but'>
            <Link to = "/Register">
            <button><a href="#">Resigister</a></button>
            </Link>
            <Link to = "/Post">
            <button><a href="#">Post</a></button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero


