import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Grant Gariepy All rights reserverd</p>
      <p className="icons">
        <a href="https://github.com/grantgariepy/dont-blend-in" target="_blank" rel="noreferrer">

          <AiFillGithub />
        </a>
      </p>
    </div>
  )
}

export default Footer