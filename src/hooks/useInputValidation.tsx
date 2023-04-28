import { useState, useEffect, type ChangeEvent } from 'react';

interface UseInputValidationType {
  value: string;
  isValid: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UseInputValidation = (regex: RegExp): UseInputValidationType => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(regex.test(value));
  }, [value, regex]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    isValid,
    handleChange,
  };
};
export default UseInputValidation;
