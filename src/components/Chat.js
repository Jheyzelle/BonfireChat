import React from 'react'
import { useEffect, useState } from 'react'
import { SignOut } from './Login'
import { auth, db } from '../fbaseapp.js'
import { query, collection, orderBy, limit, onSnapshot, getDocs, doc} from "firebase/firestore"; 
import SendMsg from './SendMsg';
import { async } from '@firebase/util';


function Chat() {
    const [messages, setMsgs] = useState([])

    async function getChatMessages() {

        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(30));
        const unsub = onSnapshot(q, (qS) => {

            console.log(" data: ", qS);
            setMsgs(qS.docs.map((doc) => {
                let msgData = doc.data()
                msgData.id = doc.id
                return msgData
            }))
        });
        
    }

    useEffect(()=> {

        getChatMessages()

    }, [] )

    
    return (
        <div>
            <h2>Welcome!</h2>
            <SignOut />
            <div>
                <div>
                    {messages.map(({id, text, photoURL, uid})=> (
                            
                        <div key={id} className={`msgbubble msg ${uid == auth.currentUser.uid ? 'sent' : 'received' }`}>
                            <img src={photoURL} alt="User profile image"></img>
                            <p>{text}</p>
                        </div>

                    ))}
                </div>
            </div>
            <SendMsg/>
        </div>
    )
}

export default Chat