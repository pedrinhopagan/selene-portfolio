import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import './Method.scss'
import { images } from '../../constants'

const Method = () => {
  return (
    <>
      <h2 className='head-text'>Meu <span>Método</span> de trabalho</h2>
      <div className="app__method-container">
        <div className='app__method-card card-1'>
          <motion.img
            src={images.school}
            alt='image-1'
            whileInView={{opacity: [0, 1], y: [100, 0]}}
            transition={{duration: 0.3}} 
            className='app__method-card-1-img'
          />
          <p className='p-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dolore totam fugit commodi perspiciatis! Tenetur, sapiente asperiores! Fuga necessitatibus amet repellat quas sequi dolore, explicabo id facilis ducimus accusantium ea?</p>
        </div>
        <div className='app__method-card card-2'>
          <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore consequuntur labore odio reprehenderit impedit officiis nobis et, eligendi asperiores deserunt, alias aut, similique quis ipsam amet. Distinctio, sed soluta.</p>
          <motion.img
            src={images.school}
            alt='image-2'
            whileInView={{opacity: [0, 1], y: [100, 0]}}
            transition={{duration: 0.3}} 
            className='app__method-card-2-img'
          />
        </div>
      </div>
    </>
  )
}

export default AppWrap(Method, 'method')
