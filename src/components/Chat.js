import React, { useEffect, useState } from 'react'
import { SignOut } from './Login'
import { auth, db } from '../fbaseapp.js'
import { query, collection, orderBy, limit, onSnapshot } from "firebase/firestore"; 
import SendMsg from './SendMsg';


function Chat() {
    const [messages, setMsgs] = useState([])
    
    async function getColData () {
        const msgsCol = collection(db, 'messages')
        const q = query(msgsCol, orderBy("createdAt"), limit(10));
        
        let dataList = [];
        
        onSnapshot(q, (qS) => {
            
            qS.forEach((doc) => {
                let docData = doc.data()
                docData.id = doc.id
                dataList.push(docData);
            });

            setMsgs(dataList)

            console.log("List of messages: ", dataList);

        });
                    

    }

    useEffect(()=> {
        getColData()

    }, [] )

    
    return (
        <div>
            <h2>Welcome!</h2>
            <SignOut />

            <div>
                <div>
                    {messages.map(({id, text, photoURL, uid})=> (
                            
                            <div key={id} className={`msg ${uid == auth.currentUser.uid ? 'sent' : 'received' }`}>
                                key = {id}
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