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
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

export function PasswordChange(): JSX.Element {
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
            <p>OTP verified successfully</p>
          </div>
          <p className="text_red_16px tx_center">
            Create your new password below
          </p>
          <div
            className={classNames(
              authStyle["form"],
              authStyle["otp_form"],
              "antd_custom_style"
            )}
          >
            <Form
              form={form}
              name="horizontal_login"
              // layout="inline"
              onFinish={onFinish}
            >
              <Form.Item
                className={authStyle.text_input}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={
                    <Image src="/img/pass.png" width={20} height={20} alt="" />
                  }
                  placeholder="Password"
                />
              </Form.Item>
              <p className="green_text al_left">Confirm password</p>
              <Form.Item
                className={authStyle.text_input}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                style={{ marginBottom: 0 }}
              >
                <Input.Password
                  prefix={
                    <Image src="/img/pass.png" width={20} height={20} alt="" />
                  }
                  placeholder="Confirm password"
                />
              </Form.Item>

              <div className="er_msg">
                <Image src="/img/er_icon.png" width={22} height={22} alt="" />
                <p>Invalid email or password. Try again!</p>
              </div>

              <Form.Item shouldUpdate style={{ marginBottom: "6px" }}>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={classNames(
                      authStyle["btn"],
                      authStyle["green_btn"]
                    )}
                    style={{ marginBottom: 0 }}
                  >
                    Confirm
                  </Button>
                )}
              </Form.Item>
              <p className="green_text tal">
                Your password should be at least 8 charavters long, should
                contain alphabets, symbols & numbers.
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
