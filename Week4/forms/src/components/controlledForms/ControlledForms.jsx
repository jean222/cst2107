import React, { useState } from 'react';
import styles from './ControlledForm.module.css';

export default function ControlledForm() {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [userData, setUserData] = useState({});

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(userData);
        // console.log('CALLED ON SUBMIT');
        // console.log(name, email, password);
        // console.log(userData);
    }

    return (
        <>
        <form className={styles.formContainer} onSubmit={handleSubmitForm}>
            <h1>SIGNUP FORM!</h1>
            <div className={styles.formControl}>
                <label htmlFor="name">Name</label>
                <input onChange={(event) => setUserData({...userData, name: event.target.value})} value={userData.name} required type="text" placeholder="Enter Name" />
                {/* <input onChange={(event) => setName(event.target.value)} value={name} type="text" placeholder="Enter Name"></input> */}
            </div>

            <div className={styles.formControl}>
                <label htmlFor="email">Email</label>
                <input onChange={(event) => setUserData({...userData, email: event.target.value})} required type="email" placeholder="Enter Email" />
            </div>

            <div className={styles.formControl}>
                <label htmlFor="email">Password</label>
                <input onChange={(event) => setUserData({...userData, password: event.target.value})} required type="password" placeholder="Enter Password" />
                {/* <input onChange={(event) => setPassword(event.target.value)} value={password} required type='password' placeholder="Enter Password"></input> */}
            </div>

            <button className={styles.button}>Submit</button>
        </form>

        <p>
            Name: {userData.name}
            Email: {userData.email}
            Password: {userData.password}
        </p>
        </>
    )
}