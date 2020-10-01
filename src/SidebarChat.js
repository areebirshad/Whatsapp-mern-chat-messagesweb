import { Avatar } from '@material-ui/core'
import React ,{useState, useEffect} from 'react'
import "./SidebarChat.css"

function SidebarChat() {

    const  [seed , setSeed] = useState("")

    useEffect(()=>{
        setSeed(Math.floor(Math.random() *5000))
    },[])

    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>
            <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>This is the Last message...</p>
            </div>
       </div>
    )
}

export default SidebarChat;