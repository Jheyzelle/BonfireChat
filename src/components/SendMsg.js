import React, { useState } from 'react'
import { db, auth } from '../fbaseapp.js'
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

function SendMsg() {
    const [msg, setMsg] = useState('')

    async function sendMsg(e) {
        // to not refresh page
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await setDoc(doc(collection(db, 'messages')), {
            text: msg,
            photoURL,
            uid,
            createdAt: serverTimestamp()
        })

        setMsg('')
    }

    return (
        <div className='div-msg-input'>
            <form onSubmit={sendMsg}>
                <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Message bonfire' />
                <button className='btn-msgsend' type='submit' >Send</button>
            </form>
        </div>
    )
}

export default SendMsg