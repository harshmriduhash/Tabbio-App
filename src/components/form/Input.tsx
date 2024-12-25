import React from 'react';


export default function FieldInput({
    label,
    value,
    onChange,
    id,
    name,
    defaultValue,
    classNames,
    size,
    isRequired,
    disabled,
    inputType = 'text',
    placeholder,
    children,
    inputProps,
    maxLength,
    minLength,
    description,
    error,
}: {
    onChange: (value: string) => void;
    label: string;
    value?: string;
    defaultValue?:string;
    id: string;
    name?: string;
    classNames?: string;
    isRequired?: boolean;
    disabled?: boolean;
    inputType?: string;
    placeholder?: string;
    children?: React.ReactNode;
    inputProps?: object;
    maxLength?: number;
    minLength?: number;
    description?: string;
    size?: "small" | "medium"
    error?: string;
}){
    const containerClass = classNames ? 'w-full ' + classNames : 'w-full';
    const requiredField = isRequired ? <span className='text-danger'>&#42;</span> : null;
    const errorData = error ? ' border-danger' : '' 
    return (
        <div className={containerClass}>
            <label
                className='mb-[0.4rem] block font-medium text-black dark:text-white'
                htmlFor={name}
            >
                {label}{requiredField}
            </label>
            <div className='relative'>
                <input
                    disabled={disabled}
                    // aria-disabled={disabled}
                    className={`w-full rounded border border-stroke ${size === "small" ? 'py-1.5 px-2' : 'py-3 px-4.5'}  
                    text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
                    dark:bg-meta-4 dark:text-white dark:focus:border-primary${errorData}`}
                    type={inputType}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={e => onChange(e.target.value)}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    minLength={minLength}
                    {...inputProps}
                />
                <span className='absolute right-4 top-4'>
                    {children}
                </span>
            </div>
            {description && !error ? (<small>{description}</small>) : null}
            {error ? (<small className='text-danger'>{error}</small>) : null}
        </div>
    )
}












