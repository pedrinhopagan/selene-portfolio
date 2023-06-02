import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import './Activities.scss'

const Activities = () => {
  
  return (
    <div>
      <h2 className='head-text'>Esses são alguns tipo de <span>atividade</span> <br /> que costumo passar para meus alunos</h2>
      <div className='app__activities-container'>
        <motion.div
          whileInView={{opacity: [0, 1], y: [100, 0]}}
          whileHover={{scale: [1, 1.1]}}
          className='app__activities-card'
        >
          <h3 className='activities-title'>Matemáticas Básicas</h3>
        </motion.div>
        <motion.div
          whileInView={{opacity: [0, 1], y: [100, 0]}}
          whileHover={{scale: [1, 1.1]}}
          className='app__activities-card'
        >
          <h3 className='activities-title'>Contando e Calculando</h3>
        </motion.div>
        <motion.div
          whileInView={{opacity: [0, 1], y: [100, 0]}}
          whileHover={{scale: [1, 1.1]}}
          className='app__activities-card'
        >
          <h3 className='activities-title'>Medindo o Mundo</h3>
        </motion.div>
        <motion.div
          whileInView={{opacity: [0, 1], y: [100, 0]}}
          whileHover={{scale: [1, 1.1]}}
          className='app__activities-card'
        >
          <h3 className='activities-title'>Raciocínio Lógico</h3>
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Activities, 'activities')
