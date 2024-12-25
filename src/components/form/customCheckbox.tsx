import React from 'react';
import { useController } from 'react-hook-form';

type CheckboxProps = {
  label: string;
  name: string;
  defaultValue?: boolean;
  rules?: any;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, name, rules, defaultValue }) => {
  const { field } = useController({ name, rules, defaultValue });
  const { onChange, onBlur, value } = field;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className='gap-3 flex mt-4'>
         <input
          type="checkbox"
          id={name}
          name={name}
          defaultChecked={defaultValue}
          checked={value}
          onChange={handleChange}
          onBlur={onBlur}
        />
      <label htmlFor={name}>{label}</label>
       
        
    </div>
  );
};

export default Checkbox;
