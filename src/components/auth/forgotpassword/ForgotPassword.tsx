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
import { PasswordChange } from "./PasswordChange";
import { ResetLogin } from "./ResetLogin";

export function ForgotPassword(): JSX.Element {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const [otpVerified, setOtpVerifief] = useState(true);
  const [passwordChanged, setPasswordChanged] = useState(true);

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
          <h2>Forgot password?</h2>
          <h3>Enter your email here</h3>
          <div className={classNames(authStyle["form"], "antd_custom_style")}>
            <Form
              form={form}
              name="horizontal_login"
              // layout="inline"
              onFinish={onFinish}
            >
              <Form.Item
                className={authStyle.text_input}
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  prefix={
                    <Image src="/img/email.png" width={18} height={16} alt="" />
                  }
                  placeholder="Email"
                />
              </Form.Item>
              <div className="er_msg">
                <Image src="/img/er_icon.png" width={22} height={22} alt="" />
                <p>Invalid email or password. Try again!</p>
              </div>

              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={classNames(
                      authStyle["btn"],
                      authStyle["green_btn"]
                    )}
                    disabled={
                      !clientReady ||
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    <SyncOutlined spin /> Send Code
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
          <div className={authStyle.choos_login_option}>
            <p className={authStyle.loginPhone}>
              or <Link href="/login-with-phone"> Login Here</Link>
            </p>
            <div className={authStyle.loginLink}>
              <p>Don’t have an account?</p>
              <button
                // onClick={() => router.push("/login")}
                className={classNames(
                  authStyle["btn"],
                  authStyle["border_btn"]
                )}
              >
                Signup Here
              </button>
            </div>
          </div>
        </div>
      </div>
      {otpVerified ? (
        passwordChanged ? (
          <ResetLogin />
        ) : (
          <PasswordChange />
        )
      ) : (
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
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                    style={{ marginBottom: "30px" }}
                  >
                    <Input
                      prefix={
                        <Image
                          src="/img/email.png"
                          width={18}
                          height={16}
                          alt=""
                        />
                      }
                      placeholder="Email"
                    />
                  </Form.Item>
                  <div className={authStyle.otp_section}>
                    <div className="otp_input">
                      <Form.Item name="otp" style={{ margin: 0 }}>
                        <InputOTP autoSubmit={form} inputType="numeric" />
                      </Form.Item>
                    </div>
                    <div className={authStyle.gen_otp}>
                      <button> Resend Code</button>
                    </div>
                  </div>

                  <div className="er_msg">
                    <Image
                      src="/img/er_icon.png"
                      width={22}
                      height={22}
                      alt=""
                    />
                    <p>Invalid email or password. Try again!</p>
                  </div>

                  <Form.Item shouldUpdate>
                    {() => (
                      <Button
                        type="primary"
                        htmlType="submit"
                        className={classNames(
                          authStyle["btn"],
                          authStyle["green_btn"]
                        )}
                      >
                        Verify OTP
                      </Button>
                    )}
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
