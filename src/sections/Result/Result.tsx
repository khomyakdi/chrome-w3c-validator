import { useAppState } from "../../utils/hooks";
import EverythingGoodMessage from "./EverythingGoodMessage";
import GeneralInfo from "./GeneralInfo";
import {ValidationMessage } from "../../components/objects/ValidationMessage";

const ResultSection = () => {
  const {result} = useAppState();
  
  if(!result)
    return null;

  if(!result.length)
    return <EverythingGoodMessage />;

  return (
  <div>
    <GeneralInfo result={result} />
    <ul>
    {result.map((message, index) => (
      <li key={index}>
        <ValidationMessage message={message} />
      </li>
    ))}
    </ul>
  </div>
  );
};

export default ResultSection;
