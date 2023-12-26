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

export function SignUpStep01(): JSX.Element {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState(form.isFieldsTouched());
  const router = useRouter();

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
        placeholder="Select"
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
          <h2>Sign Up</h2>
          <h3>Create your new account</h3>
          <div className={classNames(authStyle["form"], "antd_custom_style")}>
            <Form
              form={form}
              name="horizontal_login"
              // layout="inline"
              onFinish={onFinish}
              onFieldsChange={() => {
                // add your additionaly logic here
                setIsTouched(true);
              }}
            >
              <div className={authStyle["col_input"]}>
                <Form.Item
                  className={authStyle.text_input}
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                  style={{ marginBottom: 10 }}
                >
                  <Input
                    prefix={
                      <Image
                        src="/img/AddressBook.png"
                        width={18}
                        height={16}
                        alt=""
                      />
                    }
                    placeholder="First Name"
                  />
                </Form.Item>
                <Form.Item
                  className={authStyle.text_input}
                  name="lastname"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                  style={{ marginBottom: 10 }}
                >
                  <Input
                    prefix={
                      <Image
                        src="/img/AddressBook.png"
                        width={18}
                        height={16}
                        alt=""
                      />
                    }
                    placeholder="Last Name"
                  />
                </Form.Item>
              </div>

              <Form.Item
                className={authStyle.text_input}
                name="email"
                rules={[
                  {
                    type: "email",
                    message: `Please enter a valid email address`,
                  },
                  { required: true, message: "Please input your email!" },
                ]}
                style={{ marginBottom: 10 }}
              >
                <Input
                  prefix={
                    <Image src="/img/email.png" width={18} height={16} alt="" />
                  }
                  placeholder="Email"
                />
              </Form.Item>
              <div className={authStyle.custom_form_input}>
                <Image
                  src="/img/phone.png"
                  width={18}
                  height={16}
                  alt=""
                  className={authStyle.input_icon}
                />
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
                  style={{ marginBottom: 10 }}
                >
                  <Input
                    addonBefore={prefixSelector}
                    maxLength={10}
                    placeholder="Phone Numbe"
                  />
                </Form.Item>
              </div>

              <Form.Item
                className={authStyle.text_input}
                name="password"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                style={{ marginBottom: 10 }}
              >
                <Input.Password
                  prefix={
                    <Image src="/img/pass.png" width={20} height={20} alt="" />
                  }
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                className={authStyle.text_input}
                name="confirmpassword"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                style={{ marginBottom: 10 }}
              >
                <Input.Password
                  prefix={
                    <Image src="/img/pass.png" width={20} height={20} alt="" />
                  }
                  placeholder="Confirm Password"
                />
              </Form.Item>
              <p className={authStyle.signup_text}>
                By signing up you agree to our{" "}
                <Link href="">Terms & Conditions</Link> and
                <Link href=""> Privacy Policy</Link>
              </p>
              <Form.Item shouldUpdate style={{ marginTop: 10 }}>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={classNames(
                      authStyle["btn"],
                      authStyle["green_btn"]
                    )}
                    onClick={() => router.push("/sign-up/Identity")}
                    disabled={
                      !clientReady ||
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Next{" "}
                    <Image
                      src="/img/Icon.png"
                      width={10}
                      height={18}
                      alt=""
                      style={{ marginLeft: "10px" }}
                    />
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
          {isTouched ? (
            <Image
              src="/img/SignupProgresscomplete.png"
              width={400}
              height={40}
              alt=""
              style={{ objectFit: "contain" }}
            />
          ) : (
            <Image
              src="/img/SignupProgress.png"
              width={400}
              height={40}
              alt=""
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
