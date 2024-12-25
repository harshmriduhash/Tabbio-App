import React from 'react'
import { BiSolidError } from 'react-icons/bi';
import { BsXCircleFill } from 'react-icons/bs';

type ErrorProps = {
    show?: boolean;
    title?: string;
    desc?: string;
    disabled?: boolean;
    isLoading?: boolean;
    isLoadingText?: string;
    okText?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    size?: string;
    onHide: () => void;
    onProceed: () => void;
}

export default function ErrorModal({
    show,
    onHide,
    onProceed,
    title,
    desc,
    disabled,
    isLoading,
    isLoadingText,
    icon,
    size,
    children,
    okText,
}: ErrorProps) {
    return show ? (
        <div className="fixed top-0 left-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
            <div className={`${
            size ? size : "w-full max-w-142.5"
          } rounded-lg bg-white py-12 px-6 text-center dark:bg-boxdark relative`}>
             <button onClick={onHide} className="absolute right-4 top-4">
            <BsXCircleFill size={25} />
          </button>
                
                    <span className="mx-auto inline-block bg-[#bf09093b] rounded-full p-4 text-[#ee1919]">
                       {icon ? icon : <BiSolidError className="h-[30px] w-[30px]"/> }
                    </span>
                
                <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">{title || children}</h3>
                <p className="mb-10">{desc}</p>
                <div className="-mx-3 flex flex-wrap gap-y-4">
                    
                    <div className="w-full px-3 2xsm:w-1/2">
                        <button disabled={disabled} onClick={() => onProceed()} className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                            {isLoading? isLoadingText
                            
                            :okText || 'Try Again'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}