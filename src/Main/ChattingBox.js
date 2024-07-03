// import React, { useEffect, useState } from "react";

// function ChattingBox () {

//     // const webSocket = new WebSocket(`wss://game-server-phi.vercel.app`)
    
//     const [msg, setMsg] = useState()

//     useEffect(() => {
//         // WebSocket 서버에 연결
//         const socket = new WebSocket('wss://game-server-phi.vercel.app');
//         setWs(socket);
    
//         socket.onopen = () => {
//             console.log('Connected to WebSocket server');
//         };
    
//         socket.onmessage = (event) => {
//             setMessages((prevMessages) => [...prevMessages, event.data]);
//         };
    
//         socket.onclose = () => {
//             console.log('Disconnected from WebSocket server');
//         };
    
//         return () => {
//             socket.close();
//         };
//     }, []);

//     const typingMsg = (e) => {
//         setMsg(e.target.value)
//     }

//     const sendMsg = (e) => {
//         e.preventDefault()
//         // webSocket.send(msg)
//     }

//     return <section className="chatting-box">
//         <div className="chat">
//             {/* 채팅이 들어갈 부분 */}
//             <div className="message received">안녕하세요!</div>
//             <div className="message sent">안녕하세요! 반갑습니다.</div>
//         </div>
//         <form>
//             <input onChange={typingMsg} value={msg}/>
//             <button onClick={sendMsg}>전송</button>
//         </form>
//     </section>
// }
// export default ChattingBox

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const eventSource = new EventSource(`${process.env.REACT_APP_RESTAPI_URL}/api/sse`);

        eventSource.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    const sendMsg = async (event) => {
        event.preventDefault();

        if (message.trim()) {
            await axios.post('/api/send-message', JSON.stringify({ message }))

            setMessage('');
        }
    };

    return (
        <div className="chatting-box">
            <div className="chat">
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <form onSubmit={sendMsg}>
                <input 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="메시지를 입력하세요"
                />
                <button type="submit">전송</button>
            </form>
        </div>
    );
};

export default ChatComponent;