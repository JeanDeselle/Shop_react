import React from 'react'
import styles from './ErrorMessage.module.css'
export default function ErrorMessage(props) {
  return (
    <p className={styles.err}>
      {props.children}
    </p>
  )
}
