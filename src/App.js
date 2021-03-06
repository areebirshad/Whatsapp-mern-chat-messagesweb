import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import Pusher from 'pusher-js'
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response =>{
      setMessages(response.data)
    })
  }, [ ])

  useEffect(() => {
    const pusher = new Pusher('ad1708ae9cc0183380d8', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
      // console.log(JSON.stringify(data));
      
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])
  
  console.log(messages)
   
  return (
    <div className="app">
      <div className="app__body">
      <Sidebar/>
      <Chat messages={messages}/>
    </div>
    </div>
  );
}

export default App;
