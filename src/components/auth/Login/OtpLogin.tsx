"use client";
import React, { ReactNode, useState, useEffect } from "react";
import authStyle from "../../../styles/auth.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import Link from "next/link";
import { TelephonoCodes } from "../../../utils/Constants";
const { Option } = Select;
import { InputOTP } from "antd-input-otp";

export function OtpLogin(): JSX.Element {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const [otpSendDone, setOtpSendDone] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="code" noStyle>
      <Select
        //disabled
        className="phonecode"
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        optionLabelProp="value"
        defaultValue="+1"
      >
        {/* <Option value={91} key={94}>
          +91
        </Option> */}
        {TelephonoCodes.map((item) => {
          return (
            <Option value={`+${item.phone}`} key={item.code}>
              {/* {item.label + ` (+${item.phone})`} */}
              {`+${item.phone}`}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );

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
          <h3>Login with your phone number</h3>
          <div className={classNames(authStyle["form"], "antd_custom_style")}>
            <Form
              form={form}
              name="horizontal_login"
              // layout="inline"
              onFinish={onFinish}
            >
              <Form.Item
                name="phone_number"
                className="contact_input"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  {
                    pattern: new RegExp(
                      /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
                    ),
                    message: "Please input your valid phone number!",
                  },
                ]}
                style={{ marginBottom: 15 }}
              >
                <Image src="/img/phone.png" width={18} height={16} alt="" />
                <Input
                  addonBefore={prefixSelector}
                  maxLength={10}
                  placeholder="Phone Numbe"
                />
              </Form.Item>
              <div className={authStyle.otp_section}>
                {otpSendDone ? (
                  <div className="otp_input">
                    <p className={authStyle.otp_text}>
                      Please enter the 6 digit OTP sent to above phone number
                    </p>
                    <Form.Item name="otp">
                      <InputOTP autoSubmit={form} inputType="numeric" />
                    </Form.Item>
                  </div>
                ) : (
                  <button
                    // onClick={() => router.push("/login")}
                    className={classNames(
                      authStyle["btn"],
                      authStyle["border_btn"]
                    )}
                  >
                    Generate OTP
                  </button>
                )}
              </div>

              <div className="er_msg">
                <Image src="/img/er_icon.png" width={22} height={22} alt="" />
                <p>Invalid email or password. Try again!</p>
              </div>
              <Link href="" className={authStyle.login_with_otp}>
                Or login with password
              </Link>
              <div className={authStyle.remember_wrapper}>
                <div
                  className={classNames(
                    authStyle["remember"],
                    "remember_input"
                  )}
                >
                  <Checkbox>Remember me</Checkbox>
                </div>
                <div className={authStyle.froget}>
                  <Link href="">Forgot Password ? </Link>
                </div>
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
                    // disabled={
                    //   !clientReady ||
                    //   !form.isFieldsTouched(true) ||
                    //   !!form
                    //     .getFieldsError()
                    //     .filter(({ errors }) => errors.length).length
                    // }
                  >
                    Log in
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
          <div className={authStyle.choos_login_option}>
            <p className={authStyle.loginPhone}>
              or Login with <a href=""> Phone Number</a>
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
      </div>
    </div>
  );
}
