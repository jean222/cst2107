// rfc
// rcc
import { useState } from 'react';
import styles from './ControlledForm.module.css';

export default function ControlledForms() {

    //const [name, setName] = useState('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    const [userData, setUserDate] =useState({});

    const handleSubmitForm = (event) => {
        event.preventDeafult();
        // console.log('CALLED ON SUBMIT');
    }

    return (
      <>
      <form className={styles.formContainer} onSubmit={handleSubmitForm}>
        <h1>SIGNUP FORM</h1>
          <div className={styles.formControl}>
              <label htmlFor="name">Name</label>
              {/* <input onChange={(event) => setName(event.target.value)} value={name} type="text" placeholder="Enter Name"></input> */}
              <input onChange={(event) => setUserData({...userData, name: event.target.value})} value={userData.name} required type='text' placeholder="Enter Name"></input>
          </div>
  
          <div className={styles.formControl}>
              <label htmlFor="name">Email</label>
              <input onChange={(event) => setUserData ({...userData, email: event.target.value})} required type="email" placeholder="Enter Email"></input>
          </div>

          <div className={styles.formControl}>
              <label htmlFor="name">Password</label>
              {/* <input onChange={(event) => setPassword(event.target.value)} value={password} required type='password' placeholder="Enter Password"></input> */}
              <input onChange={(event) => setUserData ({...userData, email: event.target.value})} required type='password' placeholder="Enter Password"></input>
          </div>

          <button className={styles.button}>Submit</button>


      </form>

      <p>
        FirstName: {userData.name}
        Email: {userData.email}
        Password: {userData.password}
      </p>
      </>
    )
  }