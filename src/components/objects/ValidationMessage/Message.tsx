import { ValidationMessage } from "../../../types";
import Extract from "./Extract";
import Location from "./Location";
import Type from "./Type";

type Props = {
  message: ValidationMessage;
};

const Message = ({message}: Props) => {
  const type = message.type === 'error'
    ? message.type
    : message.subType === 'warning'
      ? message.subType
      : 'info';

  
  return <div>
    <Type type={type}/>
    <div>{message.message}</div>
    <Location
      firstLine={message.firstLine}
      lastLine={message.lastLine}
      firstColumn={message.firstColumn}
      lastColumn={message.lastColumn}
    /> 
    <div>
      <Extract extract={message.extract} start={message.hiliteStart} length={message.hiliteLength} />
    </div>
  </div>;
};

export default Message;
