import React from 'react';

export interface StatusCellProps {
    children?: string | React.ReactNode;
    variant?: "success" | "error" | "warning" | "primary" | "none" | undefined;
  }
  
  export const Pill: React.FC<StatusCellProps> = ({
    children,
    variant,
  }) => {
    let val = (
      <p className="inline-flex rounded-full bg-light py-1 sm:px-3 px-2 text-xs sm:text-sm font-normal text-black">
        {children}
      </p>
    );

    if (variant === "none") {
        val = (
          <p className="inline-flex rounded-full  bg-opacity-10 py-1 sm:px-3 sm:text-sm px-2 text-xs font-normal text-black">
            {children}
          </p>
        );
      }
  
    if (variant === "success") {
      val = (
        <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 sm:px-3 sm:text-sm px-2 text-xs font-normal text-success">
          {children}
        </p>
      );
    }
  
    if (variant === "error") {
      val = (
        <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 sm:px-3 sm:text-sm px-2 text-xs font-normal text-danger">
          {children}
        </p>
      );
    }
  
    if (variant === "warning") {
      val = (
        <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 sm:px-3 sm:text-sm px-2 text-xs font-normal text-warning">
          {children}
        </p>
      );
    }
  
    if (variant === "primary") {
      val = (
        <p className="inline-flex rounded-full bg-primary bg-opacity-10 py-1 sm:px-3 sm:text-sm px-2 text-xs font-normal text-primary">
          {children}
        </p>
      );
    }
  
    return (
      <div
        className={``}
      >
        {val}
      </div>
    );
  };
const Pills: React.FC<any> = ({pills}) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
        {
            pills.map((p:any, i:number) => {
                return (
                <span key={p + '' + i} className={`bg-primary/5 flex items-center justify-center rounded-full text-primary py-1 px-3 text-[12px]`}>
                    {p}
                </span>
            )
            })
        }
        </div>
    )
}

export default Pills