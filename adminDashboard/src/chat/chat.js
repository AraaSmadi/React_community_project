import React, { useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import './chat.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCVLpIwIDmd0Ds0Zfc0kORoOB5QbJCDqCY",
    authDomain: "event-e0433.firebaseapp.com",
    projectId: "event-e0433",
    storageBucket: "event-e0433.appspot.com",
    messagingSenderId: "967239756286",
    appId: "1:967239756286:web:32c693829eabbe5c1438af",
    measurementId: "G-5Q2B2NK8LY"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();




const Chat = () => {
    const [diplay, setdiplay] = useState('none');
    const changedis=()=>{
        if(diplay == 'none'){
            setdiplay('block')

        }else{
            setdiplay('none')
        }
    }


    return (
        <>
       <h1 className='text-black'> soon ....</h1>
     <div style={{display:diplay}} >{<ChatRoom />}</div>
         

<div className='ibtn'><button onClick={changedis} className='btttton btn btn-primary'>Chat</button></div>




        </>
    );
}

function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {


        //   const { uid, photoURL } = auth.currentUser;
        const uid = sessionStorage.getItem('admin_id');
        const photoURL = 'sacndkcjadc8sc9a8cas8cast71qwdxadc.png'

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
    {}

        <div className='among' >
            <div id="chat" class="chat_box_wrapper chat_box_small chat_box_active">
                <div class="chat_box touchscroll chat_box_colors_a">

                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

                    <span ref={dummy}></span>
                </div>
            </div>



            <form onSubmit={sendMessage}>

                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="ask question ..." />

                <button type="submit" disabled={!formValue}>🕊️</button>

            </form>
        </div>
    </>)
}




function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    console.log(uid)
    const messageClass = uid === sessionStorage.getItem('admin_id') ? 'chat_message_wrapper chat_message_right' : 'chat_message_wrapper ';
    const costu = uid === sessionStorage.getItem('admin_id') ? '' : 'costumer service'
    return (<>




        <div className={` ${messageClass}`}>
            {/* <p>{costu} </p> */}
            <div class="chat_user_avatar">

                <img alt="Gurdeep Osahan (Web Designer)" title="Gurdeep Osahan (Web Designer)" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="md-user-image" />
            </div>
            <ul class="chat_message">
                <li>
                    <p>{text}</p>
                </li>

            </ul>
        </div>



    </>)
}


export default Chat;