"use client";
import React, { ReactNode, useState, useEffect } from "react";
import authStyle from "../../../styles/auth.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LoginForm(): JSX.Element {
  const [form] = Form.useForm();
  const router = useRouter();
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
          {
            type: "email",
            message: `Please enter a valid email address`,
          },
          { required: true, message: "Please input your email!" },
        ]}
      >
        <Input
          prefix={<Image src="/img/email.png" width={18} height={16} alt="" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        className={authStyle.text_input}
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        style={{ marginBottom: 0 }}
      >
        <Input.Password
          prefix={<Image src="/img/pass.png" width={20} height={20} alt="" />}
          placeholder="Password"
        />
      </Form.Item>
      <div className="er_msg">
        <Image src="/img/er_icon.png" width={22} height={22} alt="" />
        <p>Invalid email or password. Try again!</p>
      </div>
      <div className={authStyle.remember_wrapper}>
        <div className={classNames(authStyle["remember"], "remember_input")}>
          <Checkbox>Remember me</Checkbox>
        </div>
        <div className={authStyle.froget}>
          <Link href="/forgot-password">Forgot Password ? </Link>
        </div>
      </div>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            onClick={() => router.push("/home")}
            type="primary"
            htmlType="submit"
            className={classNames(authStyle["btn"], authStyle["green_btn"])}
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}
