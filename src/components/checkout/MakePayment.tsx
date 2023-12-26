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

export function MakePayment(): JSX.Element {
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
      <div className={checkoutStyle.change_address}>
        <div className={checkoutStyle.content}>
          <div className={checkoutStyle.delivery_at}>
            <Image
              src="/img/map-marker-Regular.png"
              width={10}
              height={12}
              alt=""
            />
            <p>
              Delivery at <span>Home</span>{" "}
            </p>
          </div>
          <div className={checkoutStyle.address}>
            <p>777 6th Avenue New York NY 10001</p>
          </div>
          <button>Change</button>
        </div>
      </div>
      <div className="desktop_page_main_wrapper">
        <div className={checkoutStyle.delivery_miles}>
          <div className={checkoutStyle.despenc}>
            <Image
              src="/img/icon_deliveryfastsolid_.png"
              width={16}
              height={16}
              alt=""
            />
            <p>Cookies Flamingo</p>
          </div>
          <div className={checkoutStyle.line}></div>
          <div className={checkoutStyle.miles}>
            <p>2.5 Miles</p>
            <label></label>
            <p>10 Mins</p>
          </div>
        </div>
        <div className={checkoutStyle.product_details_payment}>
          <div className={checkoutStyle.border_line}>
            <p>PAYMENT INFO</p>
          </div>
          <div className={checkoutStyle.price_title}>
            <h1>USD 85.50</h1>
            <p>View detailed order</p>
          </div>
          <div className={checkoutStyle.payment_data_wrapper}>
            <div className={checkoutStyle.left}>
              <div className="payment_option_radio po_relative">
                <Radio.Group onChange={onChangeType} value={value}>
                  <Radio value={3}>
                    <div className="lable_with_img">
                      <div className="left">
                        <h4>Credit/Debit Card</h4>
                      </div>
                      <div className="right">
                        <Image
                          src="/img/payment.png"
                          width={71}
                          height={23}
                          alt=""
                        />
                        <Image
                          src="/img/payment(1).png"
                          width={71}
                          height={23}
                          alt=""
                        />
                      </div>
                    </div>
                  </Radio>
                  <div className={checkoutStyle.info}>
                    <p>
                      Pay securely with your Bank Account using Visa or
                      Mastercard
                    </p>
                  </div>
                  <Radio value={3}>
                    <div className="lable_with_img">
                      <div className="left">
                        <h4>PayPal</h4>
                      </div>
                      <div className="right">
                        <Image
                          src="/img/payment(2).png"
                          width={71}
                          height={23}
                          alt=""
                        />
                      </div>
                    </div>
                  </Radio>
                  <div className={checkoutStyle.info}>
                    <p>
                      You will be redirected to PayPal website to complete your
                      order securely.
                    </p>
                  </div>
                </Radio.Group>
              </div>
            </div>
            <div
              className={classNames(
                checkoutStyle["right"],
                checkoutStyle["payment"]
              )}
            >
              <h4>Payment form</h4>
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
            onClick={() => router.push("/order-placed-successfully")}
          >
            Place Order
          </button>
          <Link className={checkoutStyle.checkout} href="/checkout">
            or Cancel Payment and Go Back
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
