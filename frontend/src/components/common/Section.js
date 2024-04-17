import React from 'react'
import Input from './Input'

const Section = ({ mainClass, fields = [], title }) => {
  return (
    <div className={mainClass}>
      <span className='title'>{title}</span>
      <div className='fields'>
        {

          fields.map((data) => <Input {...data} />)
        }
      </div>
    </div>
  )
}

export default Section