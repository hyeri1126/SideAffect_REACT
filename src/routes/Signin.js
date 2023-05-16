import Footer from "../components/Footer";
import styled from "styled-components";
import bg from "../assets/background.jpg";
import styles from "./Signin.module.css";
import { useState } from "react";
import { authService, firebaseInstance } from "../fbase";
import { Link } from "react-router-dom";
import HeaderLogin from "../components/HeaderLogin";
import HeaderLogout from "../components/HeaderLogout";
import { useNavigate } from "react-router-dom/";

const Container = styled.div`
    margin-top: 120px;
    background: url(${bg});
    width: 100%;
    height: 650px;
    background-size: cover;
`
const DisplayFlex = styled.div`
    display: flex;
    justify-content: center;
`

const Signin =() => {
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error,setError]=useState("");
    const onChange = (event) => {
       const {target:{name,value}}=event;
       if (name === "email"){
        setEmail(value);
       }else if(name ==="password"){
        setPassword(value);
       }
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount) {
                 data = await authService.createUserWithEmailAndPassword(email,password)
                 setNewAccount((prev)=>!prev)
            }else {
                 data = await authService.signInWithEmailAndPassword(email,password)
            }
            console.log(data);
        }catch(error){
            setError(error.message);
        }
        
    }
    const onSocialClick = async(event) => {
       
        const {target:{name}}=event;
        let provider;
        if(name==="google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name==="github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
        await setNewAccount((prev)=>!prev);
      
    }
    
    return (
        <>
            {newAccount ? <HeaderLogout /> :<HeaderLogin />}
            <Container className={styles.container}>
                <div className={styles.signinCard}>
                    <h2><strong>Welcome!&nbsp;&nbsp;</strong>사이드어펙트에 오신 것을 환영합니다.</h2>
                    <form onSubmit={onSubmit}>
                        <div className={styles.loginTool}>
                            <button onClick={onSocialClick} name="google">{newAccount ? "Google로 회원가입" : "Login with Google" }</button>
                            <button onClick={onSocialClick} name="github">{newAccount? "Github으로 회원가입": "Login with Github"}</button>
                        </div>
                        <h3>ID</h3><input name="email" onChange={onChange} value={email} type="email" placeholder="이메일을 입력하세요" required/>
                        <h3>PASSWORD</h3><input name="password" onChange={onChange} value={password} type="password" placeholder="비밀번호를 입력하세요" required/>
                        <div><input className={styles.last} class="submit" type="submit" value={newAccount ? "회원가입" : "Login"} /></div>
                        {error}
                        <DisplayFlex>
                            <p> 계정이 없으신가요? -></p>
                            <Link to="/signup"><p>회원가입</p></Link>
                        </DisplayFlex>
                       
                    
                    </form>

                   
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Signin;