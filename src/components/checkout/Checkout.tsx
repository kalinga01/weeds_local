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

export function Checkout(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState("Credit/Debit Card");
  const routs = useRouter();

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
            <p>PRODUCT CART</p>
          </div>
          <div className={checkoutStyle.details_wrapper}>
            <div className={checkoutStyle.left}>
              <div className={checkoutStyle.cart_item_wrapper}>
                <div className={checkoutStyle.product_details}>
                  <div className={checkoutStyle.pro_img}>
                    <Image
                      src="/img/product_lg.png"
                      width={66}
                      height={66}
                      alt=""
                    />
                  </div>
                  <div className={checkoutStyle.pro_name}>
                    <h2>Sour Diesel</h2>
                    <div className={checkoutStyle.despenc}>
                      <Image
                        src="/img/Vector456.png"
                        width={14}
                        height={18}
                        alt=""
                      />
                      <p>Cookies Flamingo</p>
                    </div>
                  </div>
                </div>
                <div className={checkoutStyle.price_count}>
                  <div className={checkoutStyle.select_box}>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <p className={checkoutStyle.price}>
                    <span>USD</span> 25
                  </p>
                </div>
              </div>
              <div className={checkoutStyle.cart_item_wrapper}>
                <div className={checkoutStyle.product_details}>
                  <div className={checkoutStyle.pro_img}>
                    <Image
                      src="/img/product_lg.png"
                      width={66}
                      height={66}
                      alt=""
                    />
                  </div>
                  <div className={checkoutStyle.pro_name}>
                    <h2>Sour Diesel</h2>
                    <div className={checkoutStyle.despenc}>
                      <Image
                        src="/img/Vector456.png"
                        width={14}
                        height={18}
                        alt=""
                      />
                      <p>Cookies Flamingo</p>
                    </div>
                  </div>
                </div>
                <div className={checkoutStyle.price_count}>
                  <div className={checkoutStyle.select_box}>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <p className={checkoutStyle.price}>
                    <span>USD</span> 25
                  </p>
                </div>
              </div>
            </div>
            <div className={checkoutStyle.right}>
              <h3>BILL SUMMARY</h3>
              <div className={checkoutStyle.summary_content}>
                <div className={checkoutStyle.summary_line}>
                  <div
                    className={classNames(
                      checkoutStyle["left_text"],
                      checkoutStyle["bold"]
                    )}
                  >
                    <p>Subtotal</p>
                  </div>
                  <p className={checkoutStyle.price}>
                    <span>USD</span> 75.0
                  </p>
                </div>
                <div className={checkoutStyle.summary_line}>
                  <div className={checkoutStyle.left_text}>
                    <Image
                      src="/img/CouncilTax.png"
                      width={16}
                      height={16}
                      alt=""
                    />
                    <p>TAX and restaurant charges</p>
                  </div>
                  <p className={checkoutStyle.price}>
                    <span>USD</span> 75.0
                  </p>
                </div>
                <div className={checkoutStyle.summary_line}>
                  <div className={checkoutStyle.left_text}>
                    <Image
                      src="/img/icon _delivery.png"
                      width={16}
                      height={16}
                      alt=""
                    />
                    <p>Delivery partner fee</p>
                  </div>
                  <p className={checkoutStyle.price}>
                    <span>USD</span> 75.0
                  </p>
                </div>
                <div
                  className={classNames(
                    checkoutStyle["summary_line"],
                    checkoutStyle["Grand_Total"]
                  )}
                >
                  <div
                    className={classNames(
                      checkoutStyle["left_text"],
                      checkoutStyle["bold"]
                    )}
                  >
                    <p>Grand Total</p>
                  </div>
                  <p className={checkoutStyle.price}>
                    <span>USD</span> 85.0
                  </p>
                </div>
              </div>
              <div className={checkoutStyle.your_details_wrapper}>
                <div className={checkoutStyle.text}>
                  <p>Your Details</p>
                  <p className={checkoutStyle.user_details}>
                    John Kush, (347) 999-1234
                  </p>
                </div>
                <Image src="/img/Icon.png" width={14} height={20} alt="" />
              </div>
              <div className={checkoutStyle.payment_option_wrapper}>
                <div className={checkoutStyle.payment_mode}>
                  <Image
                    src="/img/Banknotes.png"
                    width={16}
                    height={14}
                    alt=""
                  />
                  <p>Payment Mode</p>
                </div>
                <div className={checkoutStyle.payment_select_option}>
                  <button onClick={handleOpen} className="radio_btn_pay">
                    <div>
                      <Radio checked></Radio> {value}
                    </div>

                    <Image
                      src="/img/chevron-down.png"
                      width={20}
                      height={13}
                      alt=""
                    />
                  </button>
                  {open ? (
                    <div className="payment_option_radio">
                      <Radio.Group onChange={onChangeType} value={value}>
                        <Radio value="Credit/Debit Card">
                          Credit/Debit Card
                        </Radio>
                        <Radio value="Bank account">Bank account</Radio>
                        <Radio value="Paypal">Paypal</Radio>
                      </Radio.Group>
                    </div>
                  ) : null}
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
            onClick={() => routs.push("make-payment/")}
          >
            Place Order
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
