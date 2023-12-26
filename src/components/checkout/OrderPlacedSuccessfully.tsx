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

export function OrderPlacedSuccessfully(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const [value, setValue] = useState("Credit/Debit Card");

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
      <div className="desktop_page_main_wrapper">
        <div className={checkoutStyle.product_details_payment}>
          <div className={checkoutStyle.success_msg}>
            <Image
              src="/img/icons8-complete-240.png"
              width={132}
              height={132}
              alt=""
            />
            <h2>Order Placed Successfully</h2>
          </div>
          <div className={checkoutStyle.border_line}>
            <p>PAYMENT INFO</p>
          </div>

          <div className={checkoutStyle.payment_data_wrapper}>
            <div className={checkoutStyle.left}>
              <div className={checkoutStyle.data_block}>
                <div className={checkoutStyle.order_details}>
                  <ul>
                    <li>
                      <span>Order ID</span>{" "}
                      <span className={checkoutStyle.d_green}>123456789</span>
                    </li>
                    <li>
                      <span>Order date</span>{" "}
                      <span className={checkoutStyle.d_green}>
                        11:24, 9/10/2023
                      </span>
                    </li>
                    <li>
                      <span>Status</span>{" "}
                      <span className={checkoutStyle.d_green}>
                        Pickup in process
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
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
              <div
                className={classNames(
                  checkoutStyle["data_block"],
                  checkoutStyle["flex_js_bt"]
                )}
              >
                <div className={checkoutStyle.tracking_details}>
                  <h3>Delivery details</h3>
                  <Image
                    src="/img/icon_deliveryfastsolid_.png"
                    width={22}
                    height={20}
                    alt=""
                  />
                  <p className={checkoutStyle.red_text}>
                    10 Mins <span className={checkoutStyle.dot}></span>On time
                  </p>
                </div>
                <div className={checkoutStyle.track_btn}>
                  <p>Track</p>
                  <Image src="/img/arrow.png" width={8} height={13} alt="" />
                </div>
              </div>
            </div>
            <div className={checkoutStyle.right}>
              <div className={checkoutStyle.data_block}>
                <div className={checkoutStyle.order_details}>
                  <h3>
                    <Image
                      src="/img/dispensaries_icon.png"
                      width={14}
                      height={16}
                      alt=""
                    />{" "}
                    Cookies Flamingo
                  </h3>
                  <p className={checkoutStyle.d_green}>
                    01. Sour Diesel x 2 nos.
                  </p>
                  <p className={checkoutStyle.d_green}>
                    02. Wedding Cake x 1 no.
                  </p>
                </div>
                <div className={checkoutStyle.view_invoice}>
                  <p>View Invoice</p>
                  <Image src="/img/arrow.png" width={8} height={13} alt="" />
                </div>
              </div>
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
                  <p>Call Driver</p>
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
            onClick={() => router.push("/track-order")}
          >
            Track Order
          </button>
          <Link className={checkoutStyle.checkout} href="/home">
            or Continue shopping
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
