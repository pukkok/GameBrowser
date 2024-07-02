import React, { useState } from "react";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function JoinPage () {

    const navigate = useNavigate()
    const mainNavi = (e) => {
        if(e.target.className === 'outside-part'){
            navigate('/')
        }
    }

    const [userInfo, setUserInfo] = useState({userId: '', nickName: '', password: '', confirmPassword: ''})

    const joinInputChange = (e) => {
        const {name, value} = e.target
        setUserInfo({...userInfo, [name] : value})
    }

    const sendUserInfo = async (e) => {
        e.preventDefault()
        const {data} = await axios.post('/chess/join', {
            ...userInfo
        })
        alert(data.msg)
        if(data.code === 200){
            return navigate('/')
        }
    }

    return (
        <section className="outside-part" onClick={mainNavi}>
            <div className="box join">
                <h1>회원가입</h1>
                <form>
                    <label className="nick-name">
                        <span>닉네임</span>
                        <input type="text" name="nickName" placeholder="닉네임" onChange={joinInputChange} value={userInfo.nickName}/>
                    </label>
                    <label className="id-label">
                        <span>ID</span>
                        <input type="text" name="userId" placeholder="한글 안됩니다" onChange={joinInputChange} value={userInfo.userId}/>
                    </label>
                    <label className="pw-label">
                        <span>비밀번호</span>
                        <input type="password" name="password" placeholder="영문, 숫자, 특수문자 조합" onChange={joinInputChange} value={userInfo.password}/>
                    </label>
                    <label className="cf-pw-label">
                        <span>비밀번호 확인</span>
                        <input type="password" name="confirmPassword" placeholder="한번더 입력" onChange={joinInputChange} value={userInfo.confirmPassword}/>
                    </label>
                    
                    <button onClick={sendUserInfo}>완료</button>
                </form>
            </div>
        </section>
    )
}

export default JoinPage