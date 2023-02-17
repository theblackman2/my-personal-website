import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
});

const makeToast = (type: any, msg: any) => {
  Toast.fire({
    icon: type,
    title: msg,
  });
};

export default makeToast;