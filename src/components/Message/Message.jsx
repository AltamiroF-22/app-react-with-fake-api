/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Message.css";

const Message = ({ type, message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  return <>{visible && <div className={`message ${type}`}>{message}</div>}</>;
};

export default Message;
