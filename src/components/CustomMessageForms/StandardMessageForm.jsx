import React, { useState } from 'react'
import MessageFormUi from './MessageFormUi'

const StandardMessageForm = ({ props, activeChat }) => {
  const [message, setMessage] = useState("")
  const [attachement, setAttachment] = useState("")

  const handleChange = (e) => setMessage(e.target.value)

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`)
    const at = attachement ? [{ blob: attachement, file: attachement.name }] : []
    const form = {
      attachements: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id
    }

    props.onSubmit(form)
    setMessage("")
    setAttachment("")
  }

  return (
    <MessageFormUi 
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit} 
    />
  )
}

export default StandardMessageForm