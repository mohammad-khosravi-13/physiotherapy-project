"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { login } from "@/../services/api";
import Swal from "sweetalert2";
import logo from "@/svg/Logo 1.svg";
import Image from "next/image";

function Loginstayl() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [codeModal, setCodeModal] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false); 
  const closeModalCode = () => setCodeModal(false);
  const openCodeModal = () => {
    setModalOpen(false);
    setCodeModal(true);
  };
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("authToken", data.token);
      Swal.fire({
        title: "موفقیت!",
        text: "لاگین موفقیت‌آمیز بود!",
        icon: "success",
        confirmButtonText: "باشه",
      }).then(() => {
        router.push("/panel");  
      });
    },
    onError: () => {
      Swal.fire({
        title: "خطای بارگزاری",
        text: "ورود ناموفق!",
        icon: "error",
        confirmButtonText: "باشه",
      });
    },
  });
  const clickLogin = () => {
    if (!username || !password) {
       Swal.fire({
         title: "خطا!",
         text: "لطفاً همه فیلدها را پر کنید.",
         icon: "warning",
         confirmButtonText: "باشه",
       });
       return;
    }
    if (username==="admin" && password==="a12345678") {
      mutation.mutate({ username, password });
    } else {
     window.location.href = "http://localhost:3000";
    }
  };

  const handelPassword = () => {
    if (password) {
      router.push("/panel");
    }

    if (password === "") {
      Swal.fire({
        title: " فیلد هارا پر کنید",
        icon: "warning",
        confirmButtonText: "باشه",
      });
    } else {
      Swal.fire({
        title: "رمز نامعتبر!",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  };
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <div>
          <Image src={logo} alt="logo" width={60} height={80} priority />
        </div>
      </div>
      <div className="flex justify-center items-start h-[628px] p-4">
        <div className="w-full max-w-xl mt-10 h-auto rounded-[8px] bg-white shadow-custom p-6">
          <h1 className="text-center text-[18px] font-bold ">ورود</h1>
          <div className="flex flex-col items-center gap-3 mt-3">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="نام کاربری"
              className="w-full sm:w-[488px] shadow-custom border- h-[48px] rounded-[8px] p-4"
            />
            <input
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full sm:w-[488px] shadow-custom border- h-[48px] rounded-[8px] p-4"
            />
            <button
              onClick={clickLogin}
              className="w-full sm:w-[488px] h-[48px] rounded-[8px] bg-[#269200] text-white mt-2"
            >
              ورود
            </button>
          </div>
          <div className="w-full sm:w-[488px] mt-5 m-auto text-left">
            <a href="#" onClick={openModal}>
              فراموشی کلمه عبور
            </a>
          </div>
        </div>
        {modalOpen && (
          <div className="modal modal-open p-3">
            <div className="bg-white max-w-2xl w-full sm:w-2/6 h-auto sm:h-60 rounded-lg p-5">
              <h2 className="text-[18px] text-center font-bold mb-4">
                بازگردانی رمز عبور
              </h2>
              <input
                type="text"
                placeholder="شماره موبایل"
                className="shadow-custom input-bordered mt-10 w-full h-12 rounded-[8px] pr-7 mb-4"
              />
              <div className="flex flex-col sm:flex-row gap-1 mt-4">
                <button
                  className="bg-red-500 w-full sm:w-1/2 h-12 text-white rounded-[8px] mb-2 sm:mb-0"
                  onClick={closeModal}
                >
                  بازگشت
                </button>
                <button
                  className="bg-[#269200] w-full sm:w-1/2 h-12 rounded-[8px] text-white"
                  onClick={openCodeModal}
                >
                  دریافت کد
                </button>
              </div>
            </div>
          </div>
        )}
        {codeModal && (
          <div className="modal modal-open p-3">
            <div className="bg-white max-w-2xl w-full sm:w-2/6 h-auto sm:h-60 rounded-lg p-5">
              <h2 className="text-[18px] text-center font-bold mb-4">
                بازگردانی رمز عبور
              </h2>
              <input
                type="text"
                placeholder="کد یکبار مصرف"
                className="shadow-custom input-bordered mt-10 w-full h-12 rounded-[8px] pr-7 mb-4"
              />
              <div className="flex flex-col sm:flex-row gap-1 mt-4">
                <button
                  className="bg-red-500 w-full sm:w-1/2 h-12 text-white rounded-[8px] mb-2 sm:mb-0"
                  onClick={closeModalCode}
                >
                  بازگشت
                </button>
                <button
                  className="bg-[#269200] w-full sm:w-1/2 h-12 rounded-[8px] text-white"
                  onClick={handelPassword}
                >
                  ارسال کد
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Loginstayl;
