import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Grant Gariepy All rights reserverd</p>
      <p className="icons">
        <a href="https://github.com/grantgariepy/dont-blend-in" target="_blank">

          <AiFillGithub />
        </a>
      </p>
    </div>
  )
}

export default Footer