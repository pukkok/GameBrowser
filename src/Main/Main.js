import React from "react";
import { Link } from "react-router-dom";
import LoginUser from "./LoginUser";
import axios from "axios";
import './Main.css'
import ChattingBox from "./ChattingBox";

function MainPage () {

    const logout = async () => {
        const token = JSON.parse(localStorage.getItem('token'))
        if(!token){
            return alert('로그인도 안했어요!')
        }
        const {data} = await axios.post('/chess/logout', {}, {
            headers : {'Authorization' : `Bearer ${token}`}
        })
        if(data.code === 200){
            localStorage.clear()

        }
    }

    return(
        <section className="main">
            <h1>브레인 미니 게임 !!</h1>
            <nav className="login-box">
                <Link to={'login'}>로그인</Link>
                <button onClick={logout}>로그아웃</button>
            </nav>
            <div className="grid-box">
                <ChattingBox/>
                <LoginUser/>
            </div>
        </section>
    )
}
export default MainPage