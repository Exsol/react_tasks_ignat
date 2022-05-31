import React from 'react'
import s from "./Message.module.css"
type messageType={
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props:messageType) {
    return (
        <div className={s.message}>
            <div className={`${s.item} ${s.avatar}`}><img src={props.avatar} alt={props.name}/></div>
            <div className={`${s.item} ${s.message_body}`}>
                <div className={s.message_item}>
                    <div className={s.msg}>
                        <div className={s.user_name}>{props.name}</div>
                        <div className={s.messages}>{props.message}</div>
                    </div>
                </div>
                <div className={`${s.message_item} ${s.message_time}`}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
