import React from 'react'

const Input = ({ label, type, placeholder, isRequired, name }) => {
  return (
    <div class="input-field">
      <label > {label}</label>
      <input type={type} placeholder={placeholder} required={isRequired} name={name} />
    </div>
  )
}

export default Input