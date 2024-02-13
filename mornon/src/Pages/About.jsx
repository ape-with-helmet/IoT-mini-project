import React from 'react'
import './About.css'
import { useTypingEffect } from '../hooks/typing-effect';

const About = () => {
  const text = useTypingEffect("Hello i am under the water!",50);
  return (
    <div className='container'>
      <p className='about_text'>
        {text}
      </p>
    </div>
  )
}

export default About