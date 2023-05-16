import styled from "styled-components";
import bg from "../assets/background.jpg";
import styles from "./HomeContent.module.css";
import { Link } from "react-router-dom";

const Background = styled.div`
    background: url(${bg});
    width: 100%;
    height: 630px;
    background-size:cover; 
    margin-top: 120px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    width: 130px;
    padding: 10px;
    border-radius: 4px;
    border: 2px solid #333;
    font-size: 16px;
    color: #333;
    text-align: center;
    font-weight: 700;
    box-sizing: border-box;
    cursor: pointer;
    transition: .4s;
    display: block;
    background-color: rgba(255, 255, 255, .5);
    margin-right: 15px;
`


const HomeContent = () => {
    return (
        <>
            <Background className={styles.bg}>
                <div className={styles.text}>
                    <h4>사이드어펙트에서</h4>
                    <h3>당신과 함께 일하고 싶은 팀원을 찾아드립니다.</h3>
                    <p>AI로 가장 빠르게 매칭해드려요</p>
                    <p>정확한 이력서 분석을 통해서 가장 어울리는 팀원들과 매칭해드려요</p>
                </div>
                <div className={styles.btns}>
                    <StyledLink to="/signup">회원가입</StyledLink>
                    <StyledLink to="/newProject">이력서등록</StyledLink> 
                </div>
            </Background>

        </>
    )
}

export default HomeContent;