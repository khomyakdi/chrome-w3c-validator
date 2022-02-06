import { useAppState } from "../utils/hooks";

const ResultSection = () => {
  const {result} = useAppState();
  
  if(!result)
    return null;

  return (
  <div>
    <ul>
    {result.map((message, index) => (
      <li key={index}>{message.message}</li>
    ))}
    </ul>
  </div>
  );
};

export default ResultSection;
