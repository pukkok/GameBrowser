import React, { useEffect, useState } from "react";
import axios from "axios";

function LoginUser () {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const loginUsersCheck = async () => {
            const { data } = await axios.get('/login-user')
            console.log(data.msg)
            if(data.code === 200){
                setUsers(data.result)
            }
        }
        loginUsersCheck()
    },[])

    return(
        <section className="login-user">
            {users.length>0 ? users.map((user, idx) => {
                return <p key={idx}>아이디 : {user.userId} 닉네임 : {user.nickName}</p> 
            }) : <p>현재 로그인 중인 사용자가 없습니다.</p>
            }
        </section>
    )

}
export default LoginUser