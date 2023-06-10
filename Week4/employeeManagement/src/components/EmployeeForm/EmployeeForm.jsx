import React from 'react'
imp
import styles from './EmployeeForm.module.css'

export default function EmployeeForm() {
    
    const [employeeInfo, setEmployeeInfo] = useState({});

  return (
    <form className={styles.form}>
        <h3>ENTER EMPLOYEE INFO</h3>
        <div className={styles.formControl}>
            <label htmlFor='name'>Name</label>
            <input value={employeeInfo.name} onChange={(event) => setEmployeeInfo} type='text' placeholder='Enter Employee Name'></input>
        </div>

        <div className={styles.formControl}>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Employee Email'></input>
        </div>

        <div className={styles.formControl}>
            <label htmlFor='date'>Date</label>
            <input type='date' placeholder='Enter Joining Date'></input>
        </div>

        <div className={styles.formControl}>
            <label htmlFor='experience'>Has Experience</label>
            <select name='experience' id=''>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
            </select>
            
        </div>

        <button className={styles.button}>Submit</button>
    </form>
  )
}
