"use client";
import React, { ReactNode, useState, useEffect, useRef } from "react";
import checkoutStyle from "../../styles/checkout.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { Header } from "../commen";
import "antd/dist/reset.css";
import { Collapse } from "antd";
const { Panel } = Collapse;
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function TrackOrder(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState("Credit/Debit Card");
  const router = useRouter();
  const onChangeType = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Header />
      <div className={checkoutStyle.map_img}>
        <Image src="/img/Rectangle41.png" fill alt="" />
      </div>
      <div className="desktop_page_main_wrapper">
        <div className={checkoutStyle.product_details_payment}>
          <div className={checkoutStyle.payment_data_wrapper}>
            <div className={checkoutStyle.left}>
              <div className={checkoutStyle.data_block}>
                <div className={checkoutStyle.dirive_data}>
                  <div className={checkoutStyle.image_box}>
                    <Image
                      src="/img/Avatar.png"
                      width={55}
                      height={55}
                      alt=""
                    />
                  </div>
                  <div className={checkoutStyle.driver_info}>
                    <p>Delivery Partner</p>
                    <h3>Adrian Hunt</h3>
                    <div className={checkoutStyle.rate}>
                      <Image
                        src="/img/star-Filled.png"
                        width={14}
                        height={14}
                        alt=""
                      />
                      <p>4.3</p>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames(
                    checkoutStyle["call_btn"],
                    checkoutStyle["red"]
                  )}
                >
                  <Image src="/img/Vector8.png" width={21} height={21} alt="" />
                  <p>Call Driver </p>
                </div>
              </div>
              <div className={checkoutStyle.driver_otp}>
                <h4>
                  Delivery OTP <span>429 423</span>
                </h4>
                <p>Please give this OTP to Driver </p>
              </div>
            </div>
            <div className={checkoutStyle.right}>
              <div className={checkoutStyle.data_block}>
                <div className={checkoutStyle.order_details}>
                  <h3>Delivery details</h3>
                  <p className={checkoutStyle.d_green}>
                    John Kush, (347) 999-1234
                  </p>
                  <p className={checkoutStyle.d_green}>
                    777 6th Avenue New York NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={classNames(
            checkoutStyle["add_to_cart_btn_wrapper"],
            checkoutStyle["popup_btn"]
          )}
        >
          <button
            className={checkoutStyle.addto}
            onClick={() => router.push("/home")}
          >
            Back to Home
          </button>
          <Link className={checkoutStyle.checkout} href="">
            or View order details
          </Link>
          <p className={checkoutStyle.tips}>
            Please Note: Orders once delivered can not be returned or claim for
            refund.
          </p>
        </div>
      </div>
    </>
  );
}
