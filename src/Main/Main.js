import React from "react";
import { Link } from "react-router-dom";
import LoginUser from "./LoginUser";
import axios from "axios";

function MainPage () {

    const logout = async () => {

    }

    return(
        <section>
            브레인 미니 게임 !!
            <nav className="login-box">
                <Link to={'login'}>로그인</Link>
                <button onClick={logout}>로그아웃</button>
            </nav>
            <LoginUser/>
        </section>
    )
}
export default MainPage