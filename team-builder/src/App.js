import React, { useState } from 'react';
import Form from './Components/Form'
import Member from './Components/Member'
import './App.css';

export default function App() {
  const [member, setMember] = useState([])
  const [formData, setFormData] = useState({ name: '', email: '', role: '' })

  const addMember = e => {
    e.preventDefault()
    const newMember = {
      name: formData.name,
      email: formData.email,
      role: formData.role
    }
    setMember([...member, newMember])
    setFormData({ name: '', email: '', role: '' });
  }

  return(
    <div className="App">
    <Form addMember={addMember} setFormData={setFormData} formData={formData} ></Form>
    {
      member.map(i => {
        return (
          <Member info={i} />
        )
      })
    }
    </div>
  )
}

