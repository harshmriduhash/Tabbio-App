
import BtnIcon from "../assets/svg/btn-icon-2.svg";

interface ButtonProps {
    children?: React.ReactNode;
    text?: string;
    disabled?: boolean;
    size?: "xsm" | "sm" | "md" | "lg";
    type?: "submit" | "button" | "reset";
    classNames?: string;
    btnProps?: any;
    elevation?: number;
    width?: string;
    height?: string;
    rounded?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  }



export default function Button({
    children,
    text,
    disabled,
    onClick,
    type = "button",
    btnProps,
    width,
    height,
    rounded,
    size,
  }: ButtonProps) {
    let className ="flex group disabled:hover:scale-100 disabled:opacity-50 items-center gap-3 bg-gradient-to-r hover:bg-gradient-to-l hover:scale-105 duration-300 ease-in-out from-[#2563EB] to-[#9333EA] justify-center text-white border-none hover:opacity-95"

    let btnCls = `${className} ${
      rounded ? "rounded-full" : "rounded-lg"
    } ${size === "lg" ? "py-3 px-10" : "md:py-3 py-2 px-6"}  font-medium `;
    btnCls = width ? btnCls + " w-" + width : btnCls;
    btnCls = height ? btnCls + " h-" + height : btnCls;
  
    return (
      <button
        disabled={disabled}
        aria-disabled={disabled}
        onClick={onClick}
        className={btnCls}
        type={type}
        {...btnProps}
      >
        {/* <span className="hover:scale-105 w-full flex justify-center items-center gap-2"> */}
        {text || children}
        {/* </span> */}
      </button>
    );
  }

  export const GradientButton: React.FC<{disabled?:boolean, onClick:() => void, text:string, className?: string, props?: any}> = ({disabled, onClick, text, className, props}) => {
    return (
      <div className={`${className && className} button-wrapper`}>
      <div className={`${props?.roundedMd ? 'rounded-md py-[3px] px-[2.5px]' : 'rounded-full py-[3px] px-[4px]'} button-bg group w-full text-center`}>
        <button
          className={`${props?.roundedMd ? 'rounded-md' : 'rounded-full'} rounded-full bg-white group-hover:bg-transparent group:hover:text-white w-full`}
          onClick={onClick}
          disabled={disabled}
          type="button"
        >
          <span className={`text-gradient gap-2 font-medium text-center justify-center items-center w-full ${props?.padding ? props?.padding : 'py-1 px-3'} text-sm`}> <img src={BtnIcon} alt="icon" /> {text}</span>
        </button>
      </div>
    </div>
    )
  }