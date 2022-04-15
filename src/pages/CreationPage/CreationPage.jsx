import React from 'react'
import FormCreation from '../../components/FormCreation/FormCreation'
import style from './CreationPage.module.css'
export default function CreationPage() {
  return (
    <main className={style.main}>
      <h1 className={style.title}>Création de compte</h1>
      <FormCreation />
    </main>
  )
}
