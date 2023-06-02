import React from 'react'

import { AppWrap } from '../../wrapper'
import { motion } from 'framer-motion'
import { images } from '../../constants'

import './Header.scss'

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.3, ease: 'easeOut'}}
        className="app__header-img"
      >
        <img src={images.profileImg} alt="" />

        <motion.img
          whileInView={{ scale: [0, 1]}}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          src={images.objects}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        whileInView={{opacity: [0, 100], y: [100, 0]}}
        transition={{duration: 0.3, ease: 'easeOut'}}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <p className='p-text'>Olá, Sou a professora</p>
          <span>Selene</span>
          <p className='p-text'>"Cada aluno tem seu tempo de aprendizado, mas todos são capazes de aprender"</p>
          <div>
            <a href="#contact">Entre em contato</a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
