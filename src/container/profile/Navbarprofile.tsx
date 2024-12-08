"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/svg/Logo 1.svg";
import { createProfile, updateProfile } from "@/../services/profile";
import minus1 from "@/svg/Folder Minus 1.svg";
import profile from "@/svg/Rectangle 2632.svg";
import Modale from "@/container/profile/Modale";
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
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token") || "";
    setToken(savedToken);
  }, []);

  const handleProfileCreation = (profileData: UpdatedData) => {
    if (!profileData.role) {
      alert("لطفاً نقش را انتخاب کنید.");
      return;
    }

    createProfile(profileData)
      .then((data) => {
        alert("پروفایل ساخته شد");
        setUserData(data);
      })
      .catch((error) => {
        alert("پروفایل ساخته نشد");
        console.error(error);
      });
  };

  const handleUpdate = (updatedData: UpdatedData) => {
    if (token) {
      updateProfile(token, updatedData)
        .then((data) => {
          alert("پروفایل با موفقیت ویرایش شد");
          setUserData(data);
          closeModal();
        })
        .catch((error) => {
          alert("ویرایش پروفایل با خطا مواجه شد");
          console.error(error);
        });
    }
  };

  const closeModal = () => setModalOpen(false);
  const openModal = () => {
    if (
      !userData.first_name ||
      !userData.last_name ||
      !userData.email ||
      !userData.address ||
      !userData.national_id ||
      !userData.password ||
      !userData.role ||
      !userData.username ||
      !userData.phone_number
    ) {
      Swal.fire({
        title: "خطا!",
        text: "تمامی فیلد هارو بادقت پر کنید!",
        icon: "warning",
        confirmButtonText: "باشه",
      });
    }else{
      setModalOpen(true)
    }
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
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
                  value={userData.first_name || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, first_name: e.target.value })
                  }
                  className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                />
                <span className="absolute -top-3 right-4 bg-white">نام</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="last_name"
                  value={userData.last_name || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, last_name: e.target.value })
                  }
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
                  value={userData.username || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
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
                  value={userData.email || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                />
                <span className="absolute -top-3 right-4 bg-white">ایمیل</span>
              </div>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}name="password"
                  value={userData.password || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                />
                <span className="absolute -top-3 right-4 bg-white">
                  رمز عبور
                </span>
                <button
                  type="button"
                  className="absolute left-2 top-[50%]  -translate-y-[50%]"
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
                  value={userData.phone_number || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, phone_number: e.target.value })
                  }
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
                  value={userData.national_id || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, national_id: e.target.value })
                  }
                  className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                />
                <span className="absolute -top-3 right-4 bg-white">کدملی</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  value={userData.address || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, address: e.target.value })
                  }
                  className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                />
                <span className="absolute -top-3 right-4 bg-white">آدرس</span>
              </div>
              <div className="relative">
                <select
                  value={userData.role}
                  onChange={(e) =>
                    setUserData({ ...userData, role: e.target.value })
                  }
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
                onClick={openModal}
                className="btn w-full h-[48px] bg-[#0974A2] rounded-[8px] text-white"
              >
                ویرایش
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modale
          userData={userData}
          closeModal={closeModal}
          onUpdate={handleUpdate}
          handleProfileCreation={handleProfileCreation}
        />
      )}
    </div>
  );
}

export default Navbarprofile;
