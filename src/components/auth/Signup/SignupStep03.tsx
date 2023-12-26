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
import type { UploadChangeParam } from "antd/es/upload";
import { useRouter } from "next/navigation";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();

  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export function SignUpStep03(): JSX.Element {
  const [form] = Form.useForm();
  const router = useRouter();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState(form.isFieldsTouched());
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

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
        defaultValue="+91"
      >
        {/* <Option value={91} key={94}>
          +91
        </Option> */}
        {TelephonoCodes.map((item) => {
          return (
            <Option value={item.phone} key={item.code}>
              {/* {item.label + ` (+${item.phone})`} */}
              {`+${item.phone}`}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      const formData = new FormData();

      // formData.append("language", user.language);
      //   userSVC.updateUserDetails(formData).then((res) => {
      //     if (res.data.success) {
      //       message.success("Profile details updated successfully");
      //       getBase64(info.file.originFileObj as RcFile, (url) => {
      //         setLoading(false);
      //         setImageUrl(url);
      //         console.log(url);
      //       });
      //       window.location.reload();
      //     } else message.success("Failed. Please try again");
      //   });
      //   onFinishForm1;
    }
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
          <h2>Sign Up</h2>
          <h3>Create your new account</h3>
          <div className="profile_img_upload">
            <div className="">
              <Image
                src="/img/Avatar.png"
                alt="avatar"
                width={100}
                height={100}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />

              <Upload
                name="avatar"
                //action={`${API_PATH}/dummy-api`}
                listType="picture-card"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                maxCount={1}
              >
                <Image
                  src="/img/Edit.png"
                  width={30}
                  height={30}
                  alt="SHOP@SOULSARA"
                />
              </Upload>
            </div>
          </div>
          <div className={classNames(authStyle["form"], "antd_custom_style")}>
            <Form
              form={form}
              name="horizontal_login"
              onFinish={onFinish}
              onFieldsChange={() => {
                // add your additionaly logic here
                setIsTouched(true);
              }}
            >
              <div className={classNames(authStyle["custom_form_input"])}>
                <Image
                  src="/img/city.png"
                  width={14}
                  height={16}
                  alt=""
                  className={authStyle.input_icon}
                />
                <Form.Item
                  //label="Email"
                  name="country"
                  rules={[
                    { required: true, message: "Please Enter your Country!" },
                  ]}
                  style={{ marginBottom: 10 }}
                  className={authStyle.text_input}
                >
                  <Select
                    showSearch
                    filterOption={(input, option) =>
                      (option!.children as unknown as string)
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    placeholder="Please Enter your Country"
                  >
                    {TelephonoCodes.map((item) => {
                      return (
                        <Option value={item.label} key={item.label}>
                          {item.label}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
              <Form.Item
                className={authStyle.text_input}
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Address Line 1!",
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
                  placeholder="Address Line 1"
                />
              </Form.Item>
              <div className={authStyle["col_input"]}>
                <Form.Item
                  className={authStyle.text_input}
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Address Line 2!",
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
                    placeholder="Address Line 2"
                  />
                </Form.Item>
                <Form.Item
                  className={authStyle.text_input}
                  name="lastname"
                  rules={[
                    { required: true, message: "Please input your Zip Code!" },
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
                    placeholder="Zip Code"
                  />
                </Form.Item>
              </div>
              {/* <div
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
              </div> */}

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
                    onClick={() => router.push("/sign-up/complete")}
                    disabled={
                      !clientReady ||
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Finish
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
