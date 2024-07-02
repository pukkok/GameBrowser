import React, { useState } from "react";
import './LoginPage.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage () {

    const navigate = useNavigate()
    const mainNavi = (e) => {
        if(e.target.className === 'outside-part'){
            navigate('/')
        }
    }

    const [userInfo, setUserInfo] = useState({userId:'', password:''})
    const loginInputChange = (e) => {
        const {name, value} = e.target
        setUserInfo({...userInfo, [name] : value})
    }
    const login = async (e) => {
        e.preventDefault()
        const {data} = await axios.post('/chess/login', {
            ...userInfo
        })
        if(data.code === 200){
            alert('로그인 되었습니다.')
            localStorage.setItem('token', JSON.stringify(data.token))
            navigate('/')
        }else{
            alert(data.msg)
        }
    }

    return (
        <section className="outside-part" onClick={mainNavi}>
            <div className="box">
                <h1>브레인 게임 로그인</h1>
                <form className="login-form">
                    <input className="id-input" type="text" name="userId" placeholder="아이디" onChange={loginInputChange} value={userInfo.userId}/>    
                    <input className="pw-input" type="password" name="password" placeholder="패스워드" onChange={loginInputChange} value={userInfo.password}/>
                    <button onClick={login}>로그인</button>
                </form>
                <p className="footer">
                    개인정보 없이 30초만에! <br/>
                    <Link to={'/join'}>회원가입</Link> | <Link>아이디/ 비밀번호 찾기</Link>
                </p>
            </div>
        </section>
    )
}

export default LoginPage