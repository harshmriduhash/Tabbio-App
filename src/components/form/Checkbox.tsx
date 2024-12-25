import React from 'react';
import { useController } from 'react-hook-form';

type CheckboxProps = {
  label: string;
  name: string;
  defaultValue?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: any;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, name, rules, defaultValue }) => {
  const { field } = useController({ name, rules, defaultValue });
  const { onChange, onBlur, value } = field;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className='gap-2 flex'>
         <input
          type="checkbox"
          id={name}
          name={name}
          defaultChecked={defaultValue}
          checked={value}
          onChange={handleChange}
          onBlur={onBlur}
          className='dark:bg-white text-sm'
        />
      <label htmlFor={name} className="dark:text-slate-100 text-sm">{label}</label>
       
        
    </div>
  );
};

export default Checkbox;
