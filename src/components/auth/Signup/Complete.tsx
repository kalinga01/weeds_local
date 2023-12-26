"use client";
import React, { ReactNode, useState, useEffect } from "react";
import authStyle from "../../../styles/auth.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import Link from "next/link";
const { Option } = Select;
import { TelephonoCodes } from "../../../utils/Constants";
import { useRouter } from "next/navigation";

export function Complete(): JSX.Element {
  const router = useRouter();
  return (
    <div
      className={classNames(
        authStyle["auth_page_wrapper"],
        authStyle["bg_blur"]
      )}
    >
      <div className="complete_wrapper">
        <Image src="/img/Check.png" width={100} height={100} alt="" />
        <h2>Welcome, John!</h2>
        <h4>You are all set!</h4>
        <p>
          You’ll be signed in to your account momentarily. If nothing happens,
          click continue.
        </p>
        <button
          onClick={() => router.push("/login")}
          className={classNames(authStyle["btn"], authStyle["green_btn"])}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
