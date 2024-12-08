"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Edit from "@/svg/Edit 1.svg";
import Delete from "@/svg/Delete 2.svg";
import close from "@/svg/Close.svg";
import profile from "@/svg/Rectangle 2632.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface ModaleProps {
  closeModal: () => void;
  openCodeModal: () => void;
  userData: any;
  onUpdate: (updatedData: any) => void;
  handleProfileCreation: (profileData: any) => void;
}

function Modale({
  closeModal,
  openCodeModal,
  handleProfileCreation,
  userData,
}: ModaleProps) {
  const [formData, setFormData] = useState(userData);

  useEffect(() => {
    setFormData(userData);
  }, [userData]);

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
    handleProfileCreation(formData);
    closeModal();
  };

  return (
    <div className="modal modal-open p-3">
      <div className="bg-white w-[952px] h-[700px] rounded-lg p-5">
        <Image
          src={close}
          alt="close icon"
          width={24}
          height={24}
          onClick={closeModal}
        />
        <div className="flex justify-center gap-2">
          <div>
            <Image src={profile} alt="profile img" width={195} height={195} />
          </div>
          <div className="flex flex-col justify-end gap-4">
            <Image src={Edit} alt="edit icon" width={24} height={24} />
            <Image src={Delete} alt="delete icon" width={24} height={24} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row sm:flex-col gap-5 mt-16">
          <div className="w-full lg:w-[48%] flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                name="first_name"
                value={formData.first_name || ""}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
              />
              <span className="absolute -top-3 right-4">نام</span>
            </div>
            <div className="relative">
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number || ""}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
              />
              <span className="absolute -top-3 right-4">شماره موبایل</span>
            </div>
            <div className="relative">
              <input
                type="text"
                name="username"
                value={formData.username || ""}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
              />
              <span className="absolute -top-3 right-4">نام کاربری</span>
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password || ""}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
              />
              <span className="absolute -top-3 right-4">رمز عبور</span>
            </div>
          </div>

          <div className="w-full lg:w-[48%] flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                name="last_name"
                value={formData.last_name || ""}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
              />
              <span className="absolute -top-3 right-4">نام خانوادگی</span>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
              />
              <span className="absolute -top-3 right-4">ایمیل</span>
            </div>
            <div className="relative">
              <input
                type="text"
                name="national_id"
                value={formData.national_id || ""}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
              />
              <span className="absolute -top-3 right-4">کدملی</span>
            </div>
            <div className="relative">
              <input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
              />
              <span className="absolute -top-3 right-4">آدرس</span>
            </div>
            <div className="relative">
              <select
                name="role"
                value={formData.role || ""}
                onChange={handleInputChange}
                className="w-full h-[48px] rounded-[8px] drop-shadow-md border-2"
                disabled={userData?.role !== "Admin Role"}
              >
                <option value="user">کاربر</option>
                <option value="admin">مدیر</option>
              </select>
              <span className="absolute -top-3 right-4">نقش</span>
            </div>
          </div>
        </div>

        <div className=" mt-2">
          <button
            className="btn bg-[#269200] w-full h-12 rounded-[8px] drop-shadow-md border-2 text-white"
            onClick={handleSubmit}
          >
            ثبت تغییرات
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modale;
