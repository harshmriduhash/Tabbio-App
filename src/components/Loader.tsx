/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import '../css/utils.css'
import { BiLoaderAlt } from 'react-icons/bi';



interface SkeletonLoaderProps {
  style?: React.CSSProperties;
}

export const Loader = ({ show, useWhiteBg, size }: any) =>
  show ? (
    <div
      className={`relative top-0 bottom-0 w-full flex justify-center items-center z-[999] 

${useWhiteBg ? "bg-white" : ""}`}
    >
      <div
        className={`rounded-full ${
          size ? size : "w-[40px] h-[40px] border-[4px]"
        }   border-t-[#04131c] dc-loader`}
      />
    </div>
  ) : null;

export const globalLoadingRef = React.createRef();

export const gloading = {
  show: () => {
      // @ts-ignore
    globalLoadingRef?.current?.show();
  },
  hide: () => {
      // @ts-ignore
    globalLoadingRef?.current?.hide();
  },
};

// const AppLoader = React.forwardRef((ref:any) => {
//   const [visible, setVisible] = useState(false);

//   useImperativeHandle(ref, () => {
//     return { show: show, hide: hide };
//   });

//   const show = () => {
//     setVisible(true);
//   };

//   const hide = () => {
//     setVisible(false);
//   };

//   return <Loader show={visible} useWhiteBg={false} />;
// });

// export default AppLoader;

export const PageLoader = () => {
  return (
    <div id="preloader" className="z-999999 h-screen flex items-center justify-center w-full bg-white">
    <div className="w-16 h-16 rounded-full animate-spin border-4 border-solid border-primary border-t-transparent"></div>
  </div>
  )
}

export const TableLoader = ({ height }: { height?: string }) => {
  return (
    <div
      className={`flex w-full items-center shadow-xl  justify-center rounded-xl ${
        height ? `h-[${height}]` : "h-[300px]"
      }`}
    >
      <BiLoaderAlt 
      size={80}
      className="text-primary animate-spin"
      />
    </div>
  );
};

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ style }) => {
  return (
    <div className=''>
    <div
      className="react-loading-skeleton rounded-md"
      style={{
        height: style?.height || '20px',
        width: style?.width || '100%',
        borderRadius: style?.borderRadius || '4px',
        ...style,
      }}
    ></div>
    </div>
  );
};