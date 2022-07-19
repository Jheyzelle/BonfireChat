import React from 'react'
import { useEffect, useState } from 'react'
import { auth, db } from '../fbaseapp.js'
import { query, collection, orderBy, limit, onSnapshot, getDocs, doc } from "firebase/firestore";
import SendMsg from './SendMsg';
import { async } from '@firebase/util';
import Nav from './Nav.js';


function Chat() {

    const [messages, setMsgs] = useState([])

    async function getChatMessages() {

        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(30));
        const unsub = onSnapshot(q, (qS) => {

            setMsgs(qS.docs.map((doc) => {
                let msgData = doc.data()
                msgData.id = doc.id
                return msgData
            }))
        });

    }

    useEffect(() => {

        getChatMessages()

    }, [])


    return (
        <div className='sec-chat flexdiv'>
            <div className='chat-container flexdiv'>
                <Nav />

                <div className='msgs-container'>
                    <div id="chat-top"></div>
                    {messages.map(({ id, text, photoURL, uid }) => (

                        <div key={id} className={`msgbubble msg ${uid == auth.currentUser.uid ? 'mb-sent' : 'mb-received'}`}>
                            <img src={photoURL} alt="User profile image"></img>
                            <p>{text}</p>
                        </div>

                    ))}
                    <div id="chat-bottom"></div>
                </div>

                <SendMsg />
            </div>
        </div>
    )
}

export default Chat