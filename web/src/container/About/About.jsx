import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiKhanacademy } from "react-icons/si";
import { FaDivide } from "react-icons/fa";
import { TbPyramid } from "react-icons/tb";

import { SkillDescription } from "../../components";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "./About.scss";

const About = () => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState("");
  const mql = window.matchMedia("(max-width: 1200px)").matches;

  return (
    <>
      <h2 className="head-text">Conheça um pouco sobre mim</h2>
      <div className="app__about">
        <div className="app__about-content">
          <p>
            Sou professora a mais de 30 anos. Comecei a dar aulas quando tinha
            apenas 16 anos e desde então tenho me dedicado a ensinar crianças
            entre 6 e 14 anos no ensino fundamental.
          </p>
          <p>
            Minha especialidade é matemática, uma disciplina que amo e que busco
            sempre tornar mais acessível e interessante para meus alunos. No
            entanto, também tenho conhecimento em outras áreas, como ciências,
            língua portuguesa, história e geografia.
          </p>
          <p>
            Para mim, o ensino deve ser dinâmico e interativo, por isso sempre
            busco utilizar diferentes recursos didáticos, como jogos, atividades
            práticas e tecnologia, para garantir que meus alunos aprendam de
            forma divertida e eficaz.
          </p>
          <p>
            Além disso, preocupo-me em desenvolver habilidades sociais e
            emocionais em meus alunos, promovendo valores como respeito, empatia
            e trabalho em equipe.
          </p>
          <p>
            Se você está procurando por uma professora experiente, dedicada e
            apaixonada por ensinar, posso garantir que sou a escolha certa para
            você e seu filho. Comigo, você pode ter a certeza de que seu filho
            receberá uma educação de qualidade e estará preparado para enfrentar
            os desafios da vida com confiança e conhecimento.
          </p>
        </div>
        <motion.div
          className="app__about-img"
          whileInView={{ opacity: [0, 100] }}
          transition={{ all: 0.3, delay: 0.5 }}
        >
          <img src={images.school} alt="schoolImg" />
        </motion.div>
      </div>

      {mql ? (
        <div className="app__skills app__flex">
          <div
          className="app__skills-card"
        >
          <div>
            <FaDivide />
          </div>
            <h3>
              Divisão <br /> de 2 digitos
            </h3>
            <SkillDescription skill='division' />
        </div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          whileHover={{height: 200}}
          onHoverStart={() => {
            setTitle([2])
            setDescription('description2') 
          }}
          onHoverEnd={() => {
            setTitle([])
            setDescription('')
          }}
          className="app__skills-card card-1"
        >
          <div>
            <SiKhanacademy />
          </div>
          <h3 className={title.includes(2)? 'app__hidden' : ''}>
            Divisão <br /> de 2 digitos
          </h3>
          {description === 'description2' ? 
            <SkillDescription skill='sum' />  
          : ''}
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          whileHover={{height: 200}}
          onHoverStart={() => {
            setTitle([3])
            setDescription('description3') 
          }}
          onHoverEnd={() => {
            setTitle([])
            setDescription('')
          }}
          className="app__skills-card"
        >
          <div>
            <SiKhanacademy />
          </div>
          <h3 className={title.includes(3)? 'app__hidden' : ''}>
            Khan Academy
          </h3>
          {description === 'description3' ? 
            <SkillDescription skill='khan' />  
          : ''}
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          whileHover={{height: 200}}
          onHoverStart={() => {
            setTitle([4])
            setDescription('description4') 
          }}
          onHoverEnd={() => {
            setTitle([])
            setDescription('')
          }}
          className="app__skills-card"
        >
          <div>
            <TbPyramid />
          </div>
          <h3>Geometria</h3>
          {description === 'description4' ? 
            <SkillDescription skill='minus' />  
          : ''}
        </motion.div>
        </div>
      ) : (
        <div className="app__skills app__flex">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          whileHover={{height: 200}}
          onHoverStart={() => {
            setTitle([1])
            setDescription('description1') 
          }}
          onHoverEnd={() => {
            setTitle([])
            setDescription('')
          }}
          className="app__skills-card"
        >
          <div>
            <FaDivide />
          </div>
            <h3 className={title.includes(1) ? 'app__hidden' : ''}>
              Divisão <br /> de 2 digitos
            </h3>
          {description === 'description1'? 
            <SkillDescription skill='division' />  
          : ''}
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          whileHover={{height: 200}}
          onHoverStart={() => {
            setTitle([2])
            setDescription('description2') 
          }}
          onHoverEnd={() => {
            setTitle([])
            setDescription('')
          }}
          className="app__skills-card card-1"
        >
          <div>
            <SiKhanacademy />
          </div>
          <h3 className={title.includes(2)? 'app__hidden' : ''}>
            Divisão <br /> de 2 digitos
          </h3>
          {description === 'description2' ? 
            <SkillDescription skill='sum' />  
          : ''}
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          whileHover={{height: 200}}
          onHoverStart={() => {
            setTitle([3])
            setDescription('description3') 
          }}
          onHoverEnd={() => {
            setTitle([])
            setDescription('')
          }}
          className="app__skills-card"
        >
          <div>
            <SiKhanacademy />
          </div>
          <h3 className={title.includes(3)? 'app__hidden' : ''}>
            Khan Academy
          </h3>
          {description === 'description3' ? 
            <SkillDescription skill='khan' />  
          : ''}
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          whileHover={{height: 200}}
          onHoverStart={() => {
            setTitle([4])
            setDescription('description4') 
          }}
          onHoverEnd={() => {
            setTitle([])
            setDescription('')
          }}
          className="app__skills-card"
        >
          <div>
            <TbPyramid />
          </div>
          <h3 className={title.includes(4)? 'app__hidden' : ''}>Formas Geométricas</h3>
          {description === 'description4' ? 
            <SkillDescription skill='minus' />  
          : ''}
        </motion.div>
        </div>
      )}
    </>
  );
};

export default AppWrap(About, "about");
