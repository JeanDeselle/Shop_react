import React from 'react'
import Form from '../../components/Form/Form'
import style from './LoginPage.module.css'
export default function LoginPage() {
  const changeStyle = () => {
    document.querySelector("body").style.backgroundColor = "#00c689";
    document.querySelector("body").style.color = "#fff";
  } 
  changeStyle()
  return (
    <div>
        <h1>Login</h1>
        <Form />
    </div>
  )
}
