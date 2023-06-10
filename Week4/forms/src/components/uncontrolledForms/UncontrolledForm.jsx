import { useEffect, useRef, useState } from 'react';
import styles from './UnControlledForm.module.css';

export default function UnControlledForm() {

    const [userInfo, setUserInfo] =useState('');
    const [isFormSubmitted, setFormsubmitted] = useState(false);

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    //const [userData, setUserData] = useState({});

    useEffect(() => {
        console.log("Application Loading...");

        
    }, [isFormSubmitted]);
    

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setUserInfo({
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        
            //console.log(nameRef);

        })

        setFormsubmitted((prevState) => !prevState);
    }

    return (
        <>
        <form className={styles.formContainer} onSubmit={handleSubmitForm}>
            <h1>SIGNUP FORM!</h1>
            <div className={styles.formControl}>
                <label htmlFor="name">Name</label>
                <input ref={nameRef} placeholder="Enter Name" />
            </div>

            <div className={styles.formControl}>
                <label htmlFor="email">Email</label>
                <input ref={emailRef} placeholder="Enter Email" />
            </div>

            <div className={styles.formControl}>
                <label htmlFor="email">Password</label>
                <input ref={passwordRef} placeholder="Enter Password" />
            </div>

            <button className={styles.button}>Submit</button>
        </form>

        <p>
            Name: {userInfo.name}
            Email: {userInfo.email}
            Password: {userInfo.password}
        </p>
        </>
    )
}