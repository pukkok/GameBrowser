import React from "react";
import Channel from '../Channel/Channel';
import { Link } from "react-router-dom";
import LoginUser from "./LoginUser";

function MainPage () {
    return(
        <section>
            브레인 미니 게임 !!
            <nav className="login-box">
                <Link to={'login'}>로그인</Link>
            </nav>
            {/* <Channel/> */}
            <LoginUser/>
        </section>
    )
}
export default MainPage