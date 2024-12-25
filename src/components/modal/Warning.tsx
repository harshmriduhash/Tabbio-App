import React from 'react'
import { BsXCircleFill } from 'react-icons/bs';

type WarningProps = {
    show?: boolean;
    title?: string;
    desc?: string;
    disabled?: boolean;
    isLoading?: boolean;
    isLoadingText?: string;
    cancelText?: string;
    okText?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    size?: string;
    onHide: () => void;
    onProceed: () => void;
}

export default function Warning({
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
    cancelText,
    okText,
}: WarningProps) {
    return show ? (
        <div className="fixed top-0 left-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
            <div className={`${
            size ? size : "w-full max-w-142.5"
          } rounded-lg bg-white py-12 px-6 text-center dark:bg-boxdark relative`}>
             <button onClick={onHide} className="absolute right-4 top-4">
            <BsXCircleFill size={25} />
          </button>
                
                    <span className="mx-auto inline-block bg-[#bf09093b] rounded-full p-4 text-[#ee1919]">
                       {icon ? icon : <svg width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.1" width="60" height="60" rx="30" fill="#DC2626"></rect>
                            <path d="M30 27.2498V29.9998V27.2498ZM30 35.4999H30.0134H30ZM20.6914 41H39.3086C41.3778 41 42.6704 38.7078 41.6358 36.8749L32.3272 20.3747C31.2926 18.5418 28.7074 18.5418 27.6728 20.3747L18.3642 36.8749C17.3296 38.7078 18.6222 41 20.6914 41Z"
                                stroke="#DC2626"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                            </path>
                        </svg>}
                    </span>
                
                <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">{title || children}</h3>
                <p className="mb-10">{desc}</p>
                <div className="-mx-3 flex gap-y-2">
                    <div className="w-full px-3 2xsm:w-1/2">
                        <button onClick={() => onHide()} className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1">
                            {cancelText || 'Cancel'}
                        </button>
                    </div>
                    <div className="w-full px-3 2xsm:w-1/2">
                        <button disabled={disabled} onClick={() => onProceed()} className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                            {isLoading? isLoadingText
                            
                            :okText || 'Proceed'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}