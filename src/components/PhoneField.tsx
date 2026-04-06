"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneField() {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"in"}
      value={phone}
      onChange={(value) => setPhone(value)}
      enableSearch={true}
      containerClass="w-full"
      inputClass="!w-full !h-[48px] !text-base !pl-14 !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-400"
      buttonClass="!border-gray-300 !rounded-l-lg"
    />
  );
}