import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

import { images } from '../../constants'

import './Navbar.scss'

const tags = ['about', 'method', 'activities', 'gallery', 'footer']

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <a href="#home">
        <div className='app__navbar-logo'>
          <img src={images.logo} alt="logo" />
        </div>
      </a>

      <ul className='app__navbar-links'>
        {['sobre mim', 'métodos', 'atividades', 'galeria', 'contato'].map((item, index) => (
          <li 
            key={'item-'+`${index}`}
            className='app__flex p-text'
          >
            <a
              key={`tag+${index}`}
              onClick={() => console.log(`${tags[index]}`)}
              href={`#${tags[index]}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <FiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{ duration: 0.3, ease: 'easeOut'}}
          >
            <FiX onClick={() => setToggle(false)}/>

            <ul>
              {['sobre mim', 'métodos', 'atividades', 'galeria', 'contato'].map((item) => (
                <li 
                  key={`${item}`}
                  className='app__flex p-text'
                >
                  <a 
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};


export default Navbar
