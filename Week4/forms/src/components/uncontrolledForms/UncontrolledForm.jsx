import { useEffect, useRef,useState } from 'react';
import styles from './UncontrolledForm.module.css';

export default function UncontrolledForm() {

    const [userInfo, setUserInfo] = useState('');

    //const [name, setName] = useState('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    //const [userData, setUserDate] =useState({});

    useEffect(() => {
        console.log("APPLICATION LOADING...");
        return () => {
            console.log("COMPONENT IS DESTROYED");
        }
    }, [isFormSubmitted]);

    const handleSubmitForm = (event) => {
        event.preventDeafult();
        setUserInfo({
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        })
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
      
    </p>
    </> 
  )
}
