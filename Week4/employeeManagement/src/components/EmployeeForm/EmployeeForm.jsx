import React from 'react'
import styles from '.EmployeeForm.css'

export default function EmployeeForm() {
  return (
    <form>
        <div className={styles.formContainer}>
            <label htmlFor='name'></label>
            <input type='text' placeholder='Enter Employee Name' />
        </div>

        <div className={styles.formContainer}>
            <label htmlFor='email'></label>
            <input type='email' placeholder='Enter Employee Name' />
        </div>

        <div className={styles.formContainer}>
            <label htmlFor='date'></label>
            <input type='date' placeholder='Enter Joining Date' />
        </div>

        <div className={styles.formContainer}>
            <label htmlFor='experience'></label>
            
        </div>
    </form>
  )
}
