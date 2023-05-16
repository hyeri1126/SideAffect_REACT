import styled from "styled-components";
import logo from "../assets/sideaffectLogo1.png";
import { Link } from "react-router-dom";
import { authService } from "../fbase";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #f6f5f0;
    position: fixed;
    height: 120px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 9;
    padding: 0 80px;
`
const LeftMenu = styled.ul`
    list-style: none;
    display: flex;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const LeftMenuStyledLink = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    margin-right: 30px;
    color: #272727;
`
const Logo = styled.div`
    background: url(${logo});
    position: re;
    width: 235px;
    height: 46px;
    margin-right: 140px;
`
const RightMenu = styled.div`
    display: flex;  
  
`
const RightMenuUl = styled.ul`
    display: flex;
    list-style: none;
`
const RightMenuStyledLink = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: #272727;
    margin-right: 30px;
`   


const HeaderLogin = () => {
    const onLogOutClick = () =>{
        authService.signOut();
    } 
       
   
    return (
        <>
                <Container>
                       <LeftMenu>
                            <li><LeftMenuStyledLink to="/newproject">프로젝트 둘러보기 </LeftMenuStyledLink></li>
                            <li><LeftMenuStyledLink to="/newproject">프로젝트 등록하기</LeftMenuStyledLink></li>
                        </LeftMenu>
                        <Link to="/">
                            <Logo></Logo>
                        </Link>
                        <RightMenu>
                            <RightMenuUl>
                               
                                    <li>My Profile</li>
                                    <li>알림</li>
                                    <li>이미지</li>
                                   
                               
                            </RightMenuUl>
                            <button onClick={onLogOutClick}>Logout</button>
                            {/* <div className="search">
                                <input type="text" />
                                <div className="material-icons">아이콘</div>
                            </div> */}
                        </RightMenu>
                </Container>
        </>
    )
}

export default HeaderLogin;