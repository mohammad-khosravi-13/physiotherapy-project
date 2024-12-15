"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/svg/Logo 1.svg";
import { createProfile } from "@/../services/profile";
import minus1 from "@/svg/Folder Minus 1.svg";
import profile from "@/svg/Rectangle 2632.svg";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface UpdatedData {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  national_id: string;
  address: string;
  password: string;
  role: string;
}

function Navbarprofile() {
  const [userData, setUserData] = useState<UpdatedData>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone_number: "",
    national_id: "",
    address: "",
    password: "",
    role: "Admin Role",
  });

  const [token, setToken] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState(userData);

  useEffect(() => {
    const savedToken = localStorage.getItem("token") || "";
    setToken(savedToken);
  }, []);

  useEffect(() => {
    setFormData(userData);
  }, [userData]);

  const handleProfileCreation = (profileData: UpdatedData) => {
    if (!profileData.role) {
      Swal.fire({
        title: "لطفاً نقش را انتخاب کنید.",
        icon: "error",
        confirmButtonText: "باشه",
      });
      return;
    }

    createProfile(profileData)
      .then((data) => {
        Swal.fire({
          text: "تغییرات با موفقیت ثبت شد.",
          imageUrl: "/images/loading.svg",
          confirmButtonText: "باشه",
        });
        setUserData(data);
      })
      .catch((error) => {
        Swal.fire({
          title: error.response?.data?.detail || "پروفایل ساخته نشد",
          icon: "error",
          confirmButtonText: "باشه",
        });
        console.error(error);
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.address ||
      !formData.email ||
      !formData.national_id ||
      !formData.password ||
      !formData.username ||
      !formData.role ||
      !formData.phone_number
    ) {
      Swal.fire({
        title: "فیلدها را با دقت پر کنید.",
        icon: "error",
        confirmButtonText: "باشه",
      });
      return;
    }

    handleProfileCreation(formData);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div className="max-w-[1240px] m-auto">
        <div className="container w-full px-10 m-auto flex justify-between items-center">
          <div>
            <Image src={logo} alt="logo" width={60} height={80} />
          </div>
          <div className="w-[60px] h-[80px] flex justify-center items-center">
            <Image src={minus1} alt="Profile" width={18} height={18} />
          </div>
        </div>

        <div className="max-w-[1248px] min-w-[200px] m-auto p-10">
          <div className="w-[80%]">
            <h1 className="font-bold text-[18px]">اطلاعات شخصی</h1>
            <div className="mt-10 flex justify-center">
              <Image
                src={profile}
                alt="profile img"
                width={195}
                height={195}
                className="rounded-[8px]"
              />
            </div>
            <div className="flex flex-col lg:flex-row sm:flex-col gap-5 mt-10">
             
              <div className="w-full lg:w-[48%] flex flex-col gap-8">
                <div className="relative">
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name || ""}
                    onChange={handleInputChange}
                    className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                  />
                  <span className="absolute -top-3 right-4 bg-white">نام</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name || ""}
                    onChange={handleInputChange}
                    className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                  />
                  <span className="absolute -top-3 right-4 bg-white">
                    نام خانوادگی
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    value={formData.username || ""}
                    onChange={handleInputChange}
                    className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                  />
                  <span className="absolute -top-3 right-4 bg-white">
                    نام کاربری
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                    className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                  />
                  <span className="absolute -top-3 right-4 bg-white">
                    ایمیل
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    value={formData.password || ""}
                    onChange={handleInputChange}
                    className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                  />
                  <span className="absolute -top-3 right-4 bg-white">
                    رمز عبور
                  </span>
                  <button
                    type="button"
                    className="absolute left-2 top-[50%] -translate-y-[50%]"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-[48%] flex flex-col gap-8">
                <div className="relative">
                  <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number || ""}
                    onChange={handleInputChange}
                    className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                  />
                  <span className="absolute -top-3 right-4 bg-white">
                    شماره موبایل
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="national_id"
                    value={formData.national_id || ""}
                    onChange={handleInputChange}
                    className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                  />
                  <span className="absolute -top-3 right-4 bg-white">
                    کدملی
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    value={formData.address || ""}
                    onChange={handleInputChange}
                    className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                  />
                  <span className="absolute -top-3 right-4 bg-white">آدرس</span>
                </div>
                <div className="relative">
                  <select
                    value={formData.role}
                    onChange={handleInputChange}
                    name="role"
                    className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                  >
                    <option value="User">کاربر</option>
                    <option value="Admin">مدیر</option>
                  </select>
                  <span className="absolute -top-3 right-4 bg-white">نقش</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center ml-3 mt-8">
              <div className="w-[98%]">
                <button
                  onClick={handleSubmit}
                  className="btn w-full h-[48px] bg-[#269200] rounded-[8px] text-white"
                >
                  ثبت تغییرات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbarprofile;
