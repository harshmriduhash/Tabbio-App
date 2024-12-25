import { toast, ToastContainer, ToastOptions } from 'react-toastify';

// Toast configuration options
const toastOptions: Partial<ToastOptions> = {
  hideProgressBar: true,
  position: 'top-right',
  autoClose: 5000,
  pauseOnHover: true,
  closeOnClick: true,
  draggable: true,
};



/**
 * Custom hook for toast notifications.
 *
 * @returns An object that includes the `showSuccess`, `showInfo`, and `showError` functions, as well as the `ToastContainer` component.
 */
function useToastNotifications() {
  const showSuccess = (message: string, id?: string) => {
    let toastId = id || `${Date.now()} + ${Math.floor(Math.random() * 1000000)}`
    toast.success(
      <div>
        <strong className="mb-3 text-2xl font-bold dark:text-white text-success">Successful</strong><br />
        {message}
      </div>,
      {
        ...toastOptions,
        toastId,
        type: "success",
      }
    );
  };

  const showInfo = (message: string, id?: string) => {
    let toastId = id || `${Date.now()} + ${Math.floor(Math.random() * 1000000)}`
    toast.info(
      <div>
        <strong className="mb-3 text-2xl font-bold dark:text-white text-warning">Info</strong><br />
        {message}
      </div>,
      {
        ...toastOptions,
        toastId,
        type: "warning",
      }
    );
  };

  const showError = (message: string, id?: string) => {
    let toastId = id || `${Date.now()} + ${Math.floor(Math.random() * 1000000)}`
    toast.error(
      <div>
        <strong className="mb-3 text-2xl font-bold dark:text-white text-danger">!Error</strong><br />
        {message}
      </div>,
      {
        ...toastOptions,
        toastId,
        type: "error",
      }
    );
  };

  return { showSuccess, showInfo, showError, ToastContainer };
}



export default useToastNotifications;
