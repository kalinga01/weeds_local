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
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useRouter } from "next/navigation";

export function SignUpStep02(): JSX.Element {
  const [form] = Form.useForm();
  const router = useRouter();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState(form.isFieldsTouched());

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file as RcFile);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch("https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
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
        placeholder="Select ID"
      >
        <Option value=" Driver License" key="1">
          Driver License
        </Option>
        <Option value="Passport" key="2">
          Passport
        </Option>

        {/* {TelephonoCodes.map((item) => {
          return (
            <Option value={`+${item.phone}`} key={item.code}>
              
              {`+${item.phone}`}
            </Option>
          );
        })} */}
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
              <div
                className={classNames(
                  authStyle["custom_form_input"],
                  "date_picker"
                )}
              >
                <Image
                  src="/img/dateP.png"
                  width={18}
                  height={16}
                  alt=""
                  className={authStyle.input_icon}
                />
                <Form.Item
                  className={authStyle.text_input}
                  name="lastname"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                  style={{ marginBottom: 10 }}
                >
                  <DatePicker onChange={onChange} />
                </Form.Item>
              </div>

              <div className={authStyle.custom_form_input}>
                <Image
                  src="/img/idcard.png"
                  width={18}
                  height={16}
                  alt=""
                  className={authStyle.input_icon}
                />
                <Form.Item
                  name="idNumber"
                  className="contact_input"
                  rules={[
                    {
                      required: true,
                      message: "Please input your ID Number!",
                    },
                  ]}
                  style={{ marginBottom: 10 }}
                >
                  <Input
                    addonBefore={prefixSelector}
                    maxLength={10}
                    placeholder=" ID Number"
                  />
                </Form.Item>
              </div>
              <div className="upload_input_wrapper">
                <Form.Item
                  className={authStyle.text_input}
                  name="idimage"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                  style={{ marginBottom: 0 }}
                >
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>
                      Upload your Photo ID
                    </Button>
                    <Image
                      src="/img/Upload.png"
                      alt=""
                      width={40}
                      height={40}
                      className="upload_icon"
                    />
                  </Upload>
                </Form.Item>
              </div>

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
                    onClick={() => router.push("/sign-up/profile-data")}
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
