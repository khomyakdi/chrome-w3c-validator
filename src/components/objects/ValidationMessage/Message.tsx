import styles from './ValidationMessage.module.scss';
import { useRef } from 'react';
import { ValidationMessage } from "../../../types";
import Extract from "./Extract";
import Location from "./Location";
import Type from "./Type";

type Props = {
  message: ValidationMessage;
};

const Message = ({message}: Props) => {
  const messageRef = useRef<HTMLParagraphElement>(null);
  const type = message.type === 'error'
    ? message.type
    : message.subType === 'warning'
      ? message.subType
      : 'Info';

  if(messageRef.current)
    messageRef.current.innerHTML = message.message.replace(/“.+?”/ig, (match) => {
      return '<code>' + match.replace(/“|”/g, '') + '</code>';
    });

  return (
  <div className={`${styles.message} ${getClassNameByType(type)}`}>
    <div className={styles.text}>
      <Type type={type}/>
      <p ref={messageRef}>{message.message}</p>
    </div>
    <Location
      firstLine={message.firstLine}
      lastLine={message.lastLine}
      firstColumn={message.firstColumn}
      lastColumn={message.lastColumn}
    /> 
    <div>
      <Extract extract={message.extract} start={message.hiliteStart} length={message.hiliteLength} />
    </div>
  </div>
  );
};

export default Message;

function getClassNameByType(type: 'error' | 'warning' | 'Info') {
  const classNames = {
    error: styles.error,
    warning: styles.warning,
    Info: styles.info,
  }

  return classNames[type];
}
