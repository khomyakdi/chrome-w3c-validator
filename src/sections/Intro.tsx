import { useContext } from "react";
import { AppContext } from "../AppBehavior";
import { getValidationFromApi } from '../behaviors/validationAPI';
import getSource from '../behaviors/getSource';
import { Button } from '../components/primitives/Button';

const IntroSection = () => {
  const { state: { loading }, actions: { setLoading, setResult } } = useContext(AppContext);

  const onClick = async () => {
    setLoading(true);
    const source = await getSource();
    const result = await getValidationFromApi(source);
    console.log(result);
    setResult(result.messages);
    setLoading(false);
  };

  return (
    <div>
     <Button
        onClick={loading ? undefined : onClick}
        aria-disabled={loading}
        disabled={loading}>
        Check
      </Button> 
    </div>
  )
};

export default IntroSection;
