import React from "react";

export const ButtonGroup: React.FC<{children: React.ReactNode; classNames?: string; position?: 'right' | 'center' | 'left'}> = ({children, classNames, position}) => {
    let cls = classNames ? `mb-4.5 flex flex-col gap-6 xl:flex-row ${classNames}` : 'mb-4.5 flex flex-col gap-6 xl:flex-row';
    cls += position === 'center' ? ' justify-center'
     : position === 'right' ? ' flex justify-end'
     : '';

    return (
        <div className={cls}>{children}</div>
    )
}

const FormGroup: React.FC<{children: React.ReactNode; classNames?: string;}> = ({children, classNames}) => {
    const cls = classNames ? `mb-4.5 flex flex-col gap-9 xl:flex-row ${classNames}` : 'mb-4.5 flex flex-col gap-9 xl:flex-row'
    return (
        <div className={cls}>{children}</div>
    )
}

export default FormGroup;