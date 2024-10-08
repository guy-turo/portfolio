import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
function HeaderSection() {
  return (
    <div className='header_social'>
      <a href="https://www.linkedin.com/in/kasongo-kakumbi-guy" target="_blank"><FaLinkedin /></a>
      <a href="https://www.github.com" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSection
