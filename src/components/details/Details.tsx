"use client";
import React, { ReactNode, useState, useEffect, useRef } from "react";
import detailsStyle from "../../styles/productDetails.module.scss";
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

export function ProductDetails(): JSX.Element {
  const [value, setValue] = useState(1);
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [dispensaryOpen, setDispensaryOpen] = useState(false);
  const wrapperRefSort = useRef(null);
  useOutsideAlerter(wrapperRefSort);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          setHover(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const onChangeType = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleChange = (event: any) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const AddToCartPopup = () => {
    setIsCartOpen(true);
  };

  return (
    <>
      <Header />
      <div className="desktop_page_main_wrapper">
        <div className={detailsStyle.product_details_wrapper}>
          <div className={detailsStyle.left}>
            <div className={detailsStyle.filter}>
              <p className={detailsStyle.brand}>SATIVA</p>
              <ul>
                <li>
                  <label>THC</label> 19%
                </li>
                <li>
                  <label>CBD</label> 0%
                </li>
              </ul>
            </div>
            <div className={detailsStyle.like}>
              <Image src="/img/like.png" alt="" width={23} height={20} />
            </div>
            <div className={detailsStyle.product_image}>
              <Image src="/img/product_lg.png" alt="" fill />
            </div>
            <div className={detailsStyle.nearest_dispensary_wrapper}>
              <div className={detailsStyle.head}>
                <p>Nearest Dispensary</p>
                <div
                  className={detailsStyle.dropdown_btn}
                  onMouseEnter={() => setHover((prevState) => !prevState)}
                >
                  <p>Change Dispensary</p>
                  <Image
                    src="/img/chevron-down.png"
                    width={18}
                    height={10}
                    alt=""
                  />
                </div>
              </div>
              <div className={detailsStyle.body} ref={wrapperRefSort}>
                <div
                  className={
                    hover ? "select_Dispensary active" : "select_Dispensary"
                  }
                >
                  <Radio.Group onChange={onChangeType} value={value}>
                    <Radio value={1}>
                      <div className="lable_with_img">
                        <div className="left">
                          <h4>Cookies Flamingo</h4>
                          <div className="rate">
                            <h4>4.8</h4>
                            <Image
                              src="/img/star-Filled.png"
                              width={14}
                              height={14}
                              alt=""
                            />
                            <p className="count">(356)</p>
                          </div>
                        </div>
                        <div className="right">
                          <div className="fastest_delivery">
                            <p>Fastest Delivery</p>
                            <Image
                              src="/img/delivery.png"
                              width={20}
                              height={17}
                              alt=""
                            />
                          </div>
                          <p className="miles">
                            2.5 Miles <label></label> 10 Mins
                          </p>
                        </div>
                      </div>
                    </Radio>
                    <Radio value={2}>
                      <div className="lable_with_img">
                        <div className="left">
                          <h4>MedMen</h4>
                          <div className="rate">
                            <h4>4.6</h4>
                            <Image
                              src="/img/star-Filled.png"
                              width={14}
                              height={14}
                              alt=""
                            />
                            <p className="count">(356)</p>
                          </div>
                        </div>
                        <div className="right">
                          {/* <div className="fastest_delivery">
                            <p>Fastest Delivery</p>
                            <Image
                              src="/img/delivery.png"
                              width={20}
                              height={17}
                              alt=""
                            />
                          </div> */}
                          <p className="miles">
                            2.5 Miles <label></label> 10 Mins
                          </p>
                        </div>
                      </div>
                    </Radio>
                    <Radio value={3}>
                      <div className="lable_with_img">
                        <div className="left">
                          <h4>The Grove</h4>
                          <div className="rate">
                            <h4>4.8</h4>
                            <Image
                              src="/img/star-Filled.png"
                              width={14}
                              height={14}
                              alt=""
                            />
                            <p className="count">(356)</p>
                          </div>
                        </div>
                        <div className="right">
                          <div className="fastest_delivery">
                            <p>Best Ratings</p>
                            <Image
                              src="/img/ratingicon.png"
                              width={20}
                              height={17}
                              alt=""
                            />
                          </div>
                          <p className="miles">
                            2.5 Miles <label></label> 10 Mins
                          </p>
                        </div>
                      </div>
                    </Radio>
                    <Radio value={3}>
                      <div className="lable_with_img">
                        <div className="left">
                          <h4>Planet 13</h4>
                          <div className="rate">
                            <h4>4.8</h4>
                            <Image
                              src="/img/star-Filled.png"
                              width={14}
                              height={14}
                              alt=""
                            />
                            <p className="count">(356)</p>
                          </div>
                        </div>
                        <div className="right">
                          {/* <div className="fastest_delivery">
                            <p>Fastest Delivery</p>
                            <Image
                              src="/img/delivery.png"
                              width={20}
                              height={17}
                              alt=""
                            />
                          </div> */}
                          <p className="miles">
                            2.5 Miles <label></label> 10 Mins
                          </p>
                        </div>
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>
              </div>
            </div>
          </div>
          <div className={detailsStyle.right}>
            <div className={detailsStyle.prodcut_name_wrapper}>
              <div className={detailsStyle.left}>
                <h1>Sour Diesel</h1>
                <div className={detailsStyle.rate}>
                  <h4>4.8</h4>
                  <Image
                    src="/img/star-Filled.png"
                    width={14}
                    height={14}
                    alt=""
                  />
                  <p className={detailsStyle.count}>(356)</p>
                </div>
              </div>
              <div className={detailsStyle.right}>
                <p className={detailsStyle.price}>USD 25</p>
                <p className={detailsStyle.unit}>Unit Price</p>
              </div>
            </div>
            <div className={detailsStyle.filter}>
              <p className={detailsStyle.brand}>Energetic</p>
              <p className={detailsStyle.brand}>Creative</p>
              <p className={detailsStyle.brand}>Talkative</p>
            </div>
            <p className={detailsStyle.desc}>
              {` Sour Diesel, also known as "Sour D" and "Sour Deez," is a popular
              sativa marijuana strain made by crossing Chemdawg and Super Skunk.
              Sour Diesel effects are dreamy, cerebral, fast-acting and
              energizing. This strain features a pungent flavor profile that
              smells like diesel. Medical marijuana patients choose Sour Diesel
              to help relieve symptoms associated with depression, pain, and
              stress. Fun fact: Sour Diesel first became popular in the early
              1990s and has been legendary ever since.`}
            </p>
            <div className={detailsStyle.totle_price_wrapper}>
              <div className={detailsStyle.count}>
                <div className={detailsStyle.select_box}>
                  <select value="1" onChange={handleChange}>
                    <option key="1" value="1">
                      1
                    </option>
                    <option key="2" value="2">
                      2
                    </option>
                    <option key="3" value="3">
                      3
                    </option>
                    <option key="4" value="4">
                      4
                    </option>
                    <option key="5" value="5">
                      5
                    </option>
                  </select>
                </div>

                <p>nos.</p>
              </div>
              <div className={detailsStyle.price}>
                <p className={detailsStyle.lable}>Total</p>
                <p className={detailsStyle.price}>USD 25</p>
              </div>
            </div>
          </div>
        </div>
        <div className={detailsStyle.add_to_cart_btn_wrapper}>
          <button className={detailsStyle.addto} onClick={AddToCartPopup}>
            Add to Cart
          </button>
          <Link className={detailsStyle.checkout} href="/checkout">
            Checkout Now
          </Link>
          <p className={detailsStyle.tips}>
            Please Note: Orders once delivered can not be returned or claim for
            refund.
          </p>
        </div>
      </div>
      {isCartOpen && (
        <div className={detailsStyle.addto_cart_modal}>
          <div className={detailsStyle.modal_content}>
            <div className={detailsStyle.modal_header}>
              <div
                className={detailsStyle.back}
                onClick={() => setIsCartOpen(false)}
              >
                <Image src="/img/ArrowLeft.svg" width={20} height={16} alt="" />
                <span>Back</span>
              </div>
              <h2>
                <Image src="/img/ok_red.png" width={24} height={24} alt="" />{" "}
                Added to cart
              </h2>
            </div>
            <div className={detailsStyle.body}>
              <div className={detailsStyle.product_details}>
                <div className={detailsStyle.img_box}>
                  <Image
                    src="/img/product_lg.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className={detailsStyle.content}>
                  <h2>Sour Diesel</h2>
                  <div className={detailsStyle.p_info}>
                    <Image
                      src="/img/Vector456.png"
                      width={15}
                      height={18}
                      alt=""
                    />
                    <p>Cookies Flamingo</p>
                  </div>
                  <div className={detailsStyle.p_info}>
                    <Image
                      src="/img/Frame445.png"
                      width={16}
                      height={16}
                      alt=""
                    />
                    <p>USD 25</p>
                  </div>
                  <div className={detailsStyle.p_info}>
                    <Image
                      src="/img/Frame454.png"
                      width={18}
                      height={14}
                      alt=""
                    />
                    <p>2 nos.</p>
                  </div>
                </div>
              </div>
              <div
                className={classNames(
                  detailsStyle["add_to_cart_btn_wrapper"],
                  detailsStyle["popup_btn"]
                )}
              >
                <button className={detailsStyle.addto}>Add to Cart</button>
                <Link className={detailsStyle.checkout} href="/checkout">
                  Checkout Now
                </Link>
                <p className={detailsStyle.tips}>
                  Please Note: Orders once delivered can not be returned or
                  claim for refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
