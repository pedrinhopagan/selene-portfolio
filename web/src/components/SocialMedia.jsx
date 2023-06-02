import React from 'react'

import { HiMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsWhatsapp />
      </div>
      <div>
        <HiMail />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  )
}

export default SocialMedia
