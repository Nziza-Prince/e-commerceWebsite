import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Notification = () => {

  return (
    <div>
      <ToastContainer 
      position="top-right"
      transition={Zoom}
      />
    </div>
  );
};

export default Notification;
