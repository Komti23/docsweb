import React from 'react';
import type from './chatType.module.css';

const Chat = ({ children }) => {
  return <div className={type.chat}>{children}</div>;
};

export default Chat;