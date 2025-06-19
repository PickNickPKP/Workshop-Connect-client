import Swal from "sweetalert2";

export const createAlert=(icon, text)=> {

  return Swal.fire({
      title: text || "Good Job",
      icon: icon || "info",
      timer: 2000,
    });
}

export default createAlert