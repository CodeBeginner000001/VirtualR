import React from 'react'
import SignIn_Button from './SignIn_Button'
import CreateAnAccount_Button from "./CreateAnAccount_Button"
export default function Nav_Buttons({style}) {
  return (
    <div className={style}>
      <SignIn_Button/>
      <CreateAnAccount_Button/>
    </div>
  )
}
