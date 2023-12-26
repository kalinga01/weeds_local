"use client";
import React, { ReactNode, useState, useEffect, useRef } from "react";
import headerStyle from "../../styles/header.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { Button, Checkbox, Form, Input, Select } from "antd";
import "antd/dist/reset.css";
import Link from "next/link";

export function Header(): JSX.Element {
  const wrapperRefMenu = useRef(null);
  const [sidebarHide, setSidebarHide] = useState(false);

  useOutsideAlerter(wrapperRefMenu);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          setSidebarHide(false);
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
  const isOpenMenu = () => {
    setSidebarHide(true);
  };

  const isCloseMenu = () => {
    setSidebarHide(false);
  };

  return (
    <>
      <div className={headerStyle.header_main_wrapper}>
        <div className={headerStyle.header_top}>
          <Link href="/home">
            <div className={headerStyle.logo}>
              <Image src="/img/logo_circle.svg" alt="" width={56} height={56} />
              <h1>UBERWEEDS</h1>
            </div>
          </Link>
        </div>
        <div className={headerStyle.header_bottom}>
          <div className={headerStyle.left}>
            <div className={headerStyle.menu} onClick={isOpenMenu}>
              <Image src="img/menu.svg" alt="" width={22} height={17} />
            </div>
            <div className={classNames(headerStyle["select_location"])}>
              <Image
                src="/img/map-marker-Regular.svg"
                width={20}
                height={20}
                alt=""
              />
              <Select
                defaultValue="New York, NY"
                onChange={handleChange}
                className="header_location_dropdown"
                // options={[
                //   { value: "jack", label: "Jack" },
                //   { value: "lucy", label: "Lucy" },
                //   { value: "Yiminghe", label: "yiminghe" },
                //   { value: "disabled", label: "Disabled", disabled: true },
                // ]}
              >
                <option value="Nevada">Nevada</option>
                <option value="New York, NY">New York, NY</option>
              </Select>
            </div>
          </div>
          <div className={headerStyle.center}>
            <input
              type="text"
              placeholder="Search for Dispensaries, Strains, Products..."
            />
            <div className={headerStyle.cart_icon}>
              <Image
                src="/img/shopping-cart.svg"
                width={26}
                height={26}
                alt=""
              />
            </div>
          </div>
          <div className={headerStyle.right}>
            <p>Hi, Jane</p>
            <Image src="/img/Avatar.png" width={50} height={50} alt="" />
          </div>
        </div>
      </div>
      <div id="side-bar" className={sidebarHide ? "side-bar--open" : ""}>
        <div className="sidebar-main-content pading_0" ref={wrapperRefMenu}>
          <div className={headerStyle.main_menu_wrapper}>
            <div className={headerStyle.menu_header}>
              <div className={headerStyle.menu} onClick={isCloseMenu}>
                <Image src="img/menu.svg" alt="" width={22} height={17} />
              </div>
              <div className={classNames(headerStyle["select_location"])}>
                <Image
                  src="/img/map-marker-Regular.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <Select
                  defaultValue="New York, NY"
                  onChange={handleChange}
                  className="header_location_dropdown"
                  // options={[
                  //   { value: "jack", label: "Jack" },
                  //   { value: "lucy", label: "Lucy" },
                  //   { value: "Yiminghe", label: "yiminghe" },
                  //   { value: "disabled", label: "Disabled", disabled: true },
                  // ]}
                >
                  <option value="Nevada">Nevada</option>
                  <option value="New York, NY">New York, NY</option>
                </Select>
              </div>
            </div>
            <div className={headerStyle.profile_name}>
              <Image src="/img/Avatar.png" width={55} height={55} alt="" />
              <p>Hi, Ric</p>
            </div>
            <div className={headerStyle.menu_list}>
              <ul>
                <li>
                  <div className={headerStyle.left}>
                    <Image
                      src="/img/menuVector00.png"
                      width={23}
                      height={19}
                      alt=""
                    />
                    <p>My Profile</p>
                  </div>
                  <div className={headerStyle.right}>
                    <p>Edit</p>
                    <Image src="/img/Icon.png" width={10} height={15} alt="" />
                  </div>
                </li>
                <li className={headerStyle.my_order}>
                  <div className={headerStyle.menu_v2}>
                    <div className={headerStyle.left}>
                      <p>My order</p>
                    </div>
                    <div className={headerStyle.right}>
                      <p>View more</p>
                      <Image
                        src="/img/Icon.png"
                        width={10}
                        height={15}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className={headerStyle.sub_menu}>
                    <div>
                      <Image
                        src="/img/menu_Icon02.png"
                        width={22}
                        height={22}
                        alt=""
                      />
                      <p>Wait for payment</p>
                    </div>
                    <div>
                      <Image
                        src="/img/menuIcon(1).png"
                        width={22}
                        height={22}
                        alt=""
                      />
                      <p>Processing</p>
                    </div>
                    <div>
                      <Image
                        src="/img/Livearea.png"
                        width={22}
                        height={22}
                        alt=""
                      />
                      <p>Shipping</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={headerStyle.left}>
                    <Image
                      src="/img/menuVector(8).png"
                      width={22}
                      height={22}
                      alt=""
                    />
                    <p>Support</p>
                  </div>
                  <div className={headerStyle.right}>
                    <Image src="/img/Icon.png" width={10} height={15} alt="" />
                  </div>
                </li>
                <li>
                  <div className={headerStyle.left}>
                    <Image
                      src="/img/Settings.png"
                      width={22}
                      height={22}
                      alt=""
                    />
                    <p>Settings</p>
                  </div>
                  <div className={headerStyle.right}>
                    <p>Edit</p>
                    <Image src="/img/Icon.png" width={10} height={15} alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
