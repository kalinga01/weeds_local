"use client";
import React, { ReactNode, useState, useEffect } from "react";
import authStyle from "../../../styles/auth.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import Link from "next/link";
import { LoginForm } from "./LoginForm";

export function Login(): JSX.Element {
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
    <div
      className={classNames(
        authStyle["auth_page_wrapper"],
        authStyle["bg_blur"]
      )}
    >
      <div className={authStyle.auth_content_wrapper}>
        <div className={authStyle.c_logo_wrapper}>
          <Image src="/img/logo_circle.svg" alt="" width={90} height={90} />
        </div>
        <div className={authStyle.auth_form_wrapper}>
          <h2>Welcome back!</h2>
          <h3>Login with your email</h3>
          <div className={classNames(authStyle["form"], "antd_custom_style")}>
            <LoginForm />
          </div>
          <div className={authStyle.choos_login_option}>
            <p className={authStyle.loginPhone}>
              or Login with <Link href="/login-with-phone">Phone Number</Link>
            </p>
            <div className={authStyle.loginLink}>
              <p>Already have an account?</p>
              <button
                // onClick={() => router.push("/login")}
                className={classNames(
                  authStyle["btn"],
                  authStyle["border_btn"]
                )}
              >
                Sign Up Here
              </button>
            </div>
          </div>
        </div>
        {/* <div className={authStyle.start_screen_wrapper}>
          <h3>A Company on a mission for Wellness</h3>
          <div className={authStyle.choos_login_option}>
            <p>Create an account, its free!</p>
            <button
              className={classNames(authStyle["btn"], authStyle["green_btn"])}
            >
              Let’s Get Started
            </button>
            <div className={authStyle.loginLink}>
              <p>Already have an account?</p>
              <button
                className={classNames(
                  authStyle["btn"],
                  authStyle["border_btn"]
                )}
              >
                Login Here
              </button>
            </div>
            <a href="">or Continue as Guest</a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
