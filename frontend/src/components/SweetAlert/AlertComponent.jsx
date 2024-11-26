import Swal from "sweetalert2";

const AlertComponent = {
  success: (title = "Berhasil!", text = "Operasi berhasil dilakukan.") => {
    Swal.fire({
      icon: "success",
      title,
      text,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      toast: true,
      position: "top-end",
    });
  },

  error: (title = "Gagal!", text = "Terjadi kesalahan.") => {
    Swal.fire({
      icon: "error",
      title,
      text,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      toast: true,
      position: "top-end",
    });
  },

  info: (title = "Informasi", text = "Berikut adalah detailnya.") => {
    Swal.fire({
      icon: "info",
      title,
      text,
      showConfirmButton: true,
    });
  },

  warning: (title = "Peringatan!", text = "Harap periksa kembali.") => {
    Swal.fire({
      icon: "warning",
      title,
      text,
      showConfirmButton: true,
    });
  },
};

export default AlertComponent;
