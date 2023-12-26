"use client";
import React, { ReactNode, useState, useEffect } from "react";
import authStyle from "../../../styles/auth.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { Button, Checkbox, Form, Input } from "antd";
import { InputOTP } from "antd-input-otp";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import Link from "next/link";
import { LoginForm } from "../Login/LoginForm";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

export function ResetLogin(): JSX.Element {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={authStyle["bottom_fit_popup_wrapper"]}>
      <div className={authStyle.popup_container}>
        <div className={authStyle.input_wrapper}>
          <div className={authStyle.topicon}>
            <Image src="/img/Flat.png" width={73} height={73} alt="" />
          </div>

          <div className="er_msg lg green_bor_btom">
            <Image src="/img/ok_red.png" width={25} height={25} alt="" />
            <p>Password updated</p>
          </div>
          <p className="text_red_16px tx_center">
            Login below with your new credentials
          </p>
          <div
            className={classNames(
              authStyle["form"],
              authStyle["otp_form"],
              authStyle["login_form"],
              "antd_custom_style"
            )}
          >
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
