import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'method', 'activities', 'gallery', 'contact'].map((item, index) => (
        <a 
          key={item + index}
          href={`#${item}`}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: 'var(--blue-color)' } : {  }}
        />
      ))}
    </div>
  )
}

export default NavigationDots
