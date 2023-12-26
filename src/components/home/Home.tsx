"use client";
import React, { ReactNode, useState, useEffect, useRef } from "react";
import HomeStyle from "../../styles/home.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { Header } from "../commen";
import { Button, Checkbox, Form, Input, Select } from "antd";
import "antd/dist/reset.css";
import Link from "next/link";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
const { Panel } = Collapse;
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

export function Home(): JSX.Element {
  const [value, setValue] = useState(1);
  const [sidebarHide, setSidebarHide] = useState(false);
  const [sidebarHideRight, setSidebarHideRight] = useState(false);
  const wrapperRefFilter = useRef(null);
  const wrapperRefSort = useRef(null);
  useOutsideAlerter(wrapperRefFilter);
  useOutsideAlerter(wrapperRefSort);

  const onChangeType = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const isOpenFilter = () => {
    setSidebarHide(true);
  };
  const isOpenSort = () => {
    setSidebarHideRight(true);
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
          setSidebarHideRight(false);
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

  return (
    <>
      <Header />
      <div className="desktop_page_main_wrapper">
        {/* categories list */}
        <div className={HomeStyle.categories_list_wrapper}>
          <div className={HomeStyle.line_top}>
            <p>Categories</p>
            <Link href="">See All</Link>
          </div>
          <div className={HomeStyle.cat_style}>
            <ul>
              <li>
                <p>Flowers</p>
                <Image src="/img/cat_01.svg" width={70} height={70} alt="" />
              </li>
              <li>
                <p>Edibles</p>
                <Image src="/img/cat_02.svg" width={70} height={70} alt="" />
              </li>
              <li>
                <p>Pre-rolls</p>
                <Image src="/img/cat_03.svg" width={70} height={70} alt="" />
              </li>
              <li>
                <p>Concentrates</p>
                <Image src="/img/cat_04.svg" width={70} height={70} alt="" />
              </li>
              <li>
                <p>Accessories</p>
                <Image src="/img/cat_05.svg" width={70} height={70} alt="" />
              </li>
              <li>
                <p>Cartridge</p>
                <Image src="/img/cat_04.svg" width={70} height={70} alt="" />
              </li>
              <li>
                <p>Hemp CBD</p>
                <Image src="/img/cat_01.svg" width={70} height={70} alt="" />
              </li>
              <li>
                <p>Strains</p>
                <Image src="/img/cat_03.svg" width={70} height={70} alt="" />
              </li>
              <li>
                <p>Dispenseries</p>
                <Image src="/img/cat_05.svg" width={70} height={70} alt="" />
              </li>
            </ul>
          </div>
        </div>
        {/* Product Section */}
        <div className={HomeStyle.hot_deal_section_wrapper}>
          <div className={HomeStyle.filter_section}>
            <div className={HomeStyle.filter} onClick={isOpenFilter}>
              <Image src="/img/filter_icon.svg" width={20} height={20} alt="" />
              <p>Filter</p>
            </div>
            <div className={HomeStyle.sort} onClick={isOpenSort}>
              <p>Sort</p>
              <Image src="/img/sort.svg" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={HomeStyle.hot_now_section}>
            <div className={HomeStyle.hot_now}>
              <Image src="/img/hot_now.svg" width={21} height={26} alt="" />
              <p>Hot Now</p>
            </div>
            <div className={HomeStyle.border}></div>
            <a href="">See all</a>
          </div>
          <div className={HomeStyle.product_list_wrapper}>
            <div className={HomeStyle.product_card}>
              <label className={HomeStyle.brand}>HYBRID</label>
              <div className={HomeStyle.image_box}>
                <Image
                  src="/img/product1.png"
                  fill
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={HomeStyle.price_bar}>
                <div className={HomeStyle.rate}>
                  <h4>4.8</h4>
                  <Image
                    src="/img/star-Filled.png"
                    width={14}
                    height={14}
                    alt=""
                  />
                  <p className={HomeStyle.count}>(356)</p>
                </div>
                <div className={HomeStyle.price}>
                  <p>USD 25</p>
                </div>
              </div>
              <div className={HomeStyle.content}>
                <Link href="/product-details">
                  <div className={HomeStyle.lable}>
                    <label>Focused</label>
                    <label>Relaxed</label>
                    <label>Euphoric</label>
                  </div>
                  <h2>Wedding Cake</h2>
                  <p className={HomeStyle.found}>Found in 20 Dispensaries </p>
                </Link>
              </div>
            </div>
            <div className={HomeStyle.product_card}>
              <label className={HomeStyle.brand}>HYBRID</label>
              <div className={HomeStyle.image_box}>
                <Image
                  src="/img/product1.png"
                  fill
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={HomeStyle.price_bar}>
                <div className={HomeStyle.rate}>
                  <h4>4.8</h4>
                  <Image
                    src="/img/star-Filled.png"
                    width={14}
                    height={14}
                    alt=""
                  />
                  <p className={HomeStyle.count}>(356)</p>
                </div>
                <div className={HomeStyle.price}>
                  <p>USD 25</p>
                </div>
              </div>
              <div className={HomeStyle.content}>
                <Link href="/product-details">
                  <div className={HomeStyle.lable}>
                    <label>Focused</label>
                    <label>Relaxed</label>
                    <label>Euphoric</label>
                  </div>
                  <h2>Wedding Cake</h2>
                  <p className={HomeStyle.found}>Found in 20 Dispensaries </p>
                </Link>
              </div>
            </div>
            <div className={HomeStyle.product_card}>
              <label className={HomeStyle.brand}>HYBRID</label>
              <div className={HomeStyle.image_box}>
                <Image
                  src="/img/product1.png"
                  fill
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={HomeStyle.price_bar}>
                <div className={HomeStyle.rate}>
                  <h4>4.8</h4>
                  <Image
                    src="/img/star-Filled.png"
                    width={14}
                    height={14}
                    alt=""
                  />
                  <p className={HomeStyle.count}>(356)</p>
                </div>
                <div className={HomeStyle.price}>
                  <p>USD 25</p>
                </div>
              </div>
              <div className={HomeStyle.content}>
                <Link href="/product-details">
                  <div className={HomeStyle.lable}>
                    <label>Focused</label>
                    <label>Relaxed</label>
                    <label>Euphoric</label>
                  </div>
                  <h2>Wedding Cake</h2>
                  <p className={HomeStyle.found}>Found in 20 Dispensaries </p>
                </Link>
              </div>
            </div>
            <div className={HomeStyle.product_card}>
              <label className={HomeStyle.brand}>HYBRID</label>
              <div className={HomeStyle.image_box}>
                <Image
                  src="/img/product1.png"
                  fill
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={HomeStyle.price_bar}>
                <div className={HomeStyle.rate}>
                  <h4>4.8</h4>
                  <Image
                    src="/img/star-Filled.png"
                    width={14}
                    height={14}
                    alt=""
                  />
                  <p className={HomeStyle.count}>(356)</p>
                </div>
                <div className={HomeStyle.price}>
                  <p>USD 25</p>
                </div>
              </div>
              <div className={HomeStyle.content}>
                <Link href="/product-details">
                  <div className={HomeStyle.lable}>
                    <label>Focused</label>
                    <label>Relaxed</label>
                    <label>Euphoric</label>
                  </div>
                  <h2>Wedding Cake</h2>
                  <p className={HomeStyle.found}>Found in 20 Dispensaries </p>
                </Link>
              </div>
            </div>
          </div>
          {/* Dispensaries list */}
          <div className={HomeStyle.hot_now_section}>
            <div className={HomeStyle.hot_now}>
              <Image
                src="/img/dispensaries_icon.png"
                width={21}
                height={26}
                alt=""
              />
              <p className={HomeStyle.Dispen}>Dispensaries</p>
            </div>
            <div className={HomeStyle.border}></div>
            <a href="">See all</a>
          </div>
          <div className={HomeStyle.dispensaries_list}>
            <div className={HomeStyle.dispen_box}>
              <label className={HomeStyle.brand}>HYBRID</label>
              <div className={HomeStyle.img_box}>
                <Image
                  src="/img/Ellipse11.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className={HomeStyle.content}>
                <Link href="/dispensaries">
                  <h2>MedMen</h2>
                  <div className={HomeStyle.rate}>
                    <h4>4.8</h4>
                    <Image
                      src="/img/star-Filled.png"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <p className={HomeStyle.count}>(356)</p>
                  </div>
                  <p className={HomeStyle.miles}>2.5 miles away</p>
                  <div className={HomeStyle.location}>
                    <Image src="/img/city.png" width={12} height={14} alt="" />
                    <p>New York, NY</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className={HomeStyle.dispen_box}>
              <label className={HomeStyle.brand}>HYBRID</label>
              <div className={HomeStyle.img_box}>
                <Image
                  src="/img/Ellipse11.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className={HomeStyle.content}>
                <Link href="/dispensaries">
                  <h2>MedMen</h2>
                  <div className={HomeStyle.rate}>
                    <h4>4.8</h4>
                    <Image
                      src="/img/star-Filled.png"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <p className={HomeStyle.count}>(356)</p>
                  </div>
                  <p className={HomeStyle.miles}>2.5 miles away</p>
                  <div className={HomeStyle.location}>
                    <Image src="/img/city.png" width={12} height={14} alt="" />
                    <p>New York, NY</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className={HomeStyle.dispen_box}>
              <label className={HomeStyle.brand}>HYBRID</label>
              <div className={HomeStyle.img_box}>
                <Image
                  src="/img/Ellipse11.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className={HomeStyle.content}>
                <Link href="/dispensaries">
                  <h2>MedMen</h2>
                  <div className={HomeStyle.rate}>
                    <h4>4.8</h4>
                    <Image
                      src="/img/star-Filled.png"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <p className={HomeStyle.count}>(356)</p>
                  </div>
                  <p className={HomeStyle.miles}>2.5 miles away</p>
                  <div className={HomeStyle.location}>
                    <Image src="/img/city.png" width={12} height={14} alt="" />
                    <p>New York, NY</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className={HomeStyle.dispen_box}>
              <label className={HomeStyle.brand}>HYBRID</label>
              <div className={HomeStyle.img_box}>
                <Image
                  src="/img/Ellipse11.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className={HomeStyle.content}>
                <Link href="/dispensaries">
                  <h2>MedMen</h2>
                  <div className={HomeStyle.rate}>
                    <h4>4.8</h4>
                    <Image
                      src="/img/star-Filled.png"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <p className={HomeStyle.count}>(356)</p>
                  </div>
                  <p className={HomeStyle.miles}>2.5 miles away</p>
                  <div className={HomeStyle.location}>
                    <Image src="/img/city.png" width={12} height={14} alt="" />
                    <p>New York, NY</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className={HomeStyle.dispen_box}>
              <label className={HomeStyle.brand}>HYBRID</label>
              <div className={HomeStyle.img_box}>
                <Image
                  src="/img/Ellipse11.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className={HomeStyle.content}>
                <Link href="/dispensaries">
                  <h2>MedMen</h2>
                  <div className={HomeStyle.rate}>
                    <h4>4.8</h4>
                    <Image
                      src="/img/star-Filled.png"
                      width={14}
                      height={14}
                      alt=""
                    />
                    <p className={HomeStyle.count}>(356)</p>
                  </div>
                  <p className={HomeStyle.miles}>2.5 miles away</p>
                  <div className={HomeStyle.location}>
                    <Image src="/img/city.png" width={12} height={14} alt="" />
                    <p>New York, NY</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filter */}
      <div
        id="side-bar"
        className={sidebarHide ? "side-bar--open" : ""}
        ref={wrapperRefFilter}
      >
        <div className="sidebar-main-content">
          <div className="side_bar_header">
            <div className="left">
              <Image src="/img/filter_icon.svg" width={21} height={21} alt="" />
              <p>Filters</p>
            </div>
            <div className="right">
              <button>Clear Filters</button>
            </div>
          </div>
          <div className="filter_body">
            <Collapse
              defaultActiveKey={["1"]}
              onChange={onChange}
              className="footer_link_collapse"
              accordion
            >
              <Panel header="Type" key="1">
                <div className="radio_group_wrapper">
                  <Radio.Group onChange={onChangeType} value={value}>
                    <Radio value={1}>
                      <div className="lable_with_img">
                        <span>Sativa</span>
                        <Image
                          src="/img/image18.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                    </Radio>
                    <Radio value={2}>
                      <div className="lable_with_img">
                        <span>Indica</span>
                        <Image
                          src="/img/image21.png"
                          width={28}
                          height={24}
                          alt=""
                          style={{ position: "relative", left: "3px" }}
                        />
                      </div>
                    </Radio>
                    <Radio value={3}>
                      <div className="lable_with_img">
                        <span>Hybrid</span>
                        <Image
                          src="/img/image20.png"
                          width={24}
                          height={24}
                          alt=""
                        />
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>
              </Panel>
              <Panel header="CBD" key="2">
                <div className="radio_group_wrapper none_bg">
                  <Radio.Group onChange={onChangeType} value={value}>
                    <Radio value={1}>
                      <div className="lable_with_img">
                        <span>0%</span>
                      </div>
                    </Radio>
                    <Radio value={2}>
                      <div className="lable_with_img">
                        <span>0% to 5%</span>
                      </div>
                    </Radio>
                    <Radio value={3}>
                      <div className="lable_with_img">
                        <span>5% to 10%</span>
                      </div>
                    </Radio>
                    <Radio value={3}>
                      <div className="lable_with_img">
                        <span>10% to 15%</span>
                      </div>
                    </Radio>
                    <Radio value={3}>
                      <div className="lable_with_img">
                        <span>15% to 20%</span>
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>
              </Panel>
              <Panel header="THC" key="3">
                <div className="radio_group_wrapper none_bg">
                  <Radio.Group onChange={onChangeType} value={value}>
                    <Radio value={1}>
                      <div className="lable_with_img">
                        <span>All</span>
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>
              </Panel>
              <Panel header="Flavor" key="4">
                <div className="radio_group_wrapper none_bg">
                  <Radio.Group onChange={onChangeType} value={value}>
                    <Radio value={1}>
                      <div className="lable_with_img">
                        <span>All</span>
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>
              </Panel>
              <Panel header="Dispensary" key="5">
                <div className="radio_group_wrapper none_bg">
                  <Radio.Group onChange={onChangeType} value={value}>
                    <Radio value={1}>
                      <div className="lable_with_img">
                        <span>All</span>
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>
              </Panel>
              <Panel header="Helps with" key="6">
                <div className="radio_group_wrapper none_bg">
                  <Radio.Group onChange={onChangeType} value={value}>
                    <Radio value={1}>
                      <div className="lable_with_img">
                        <span>All</span>
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>
              </Panel>
            </Collapse>
            <button className="apply_btn">Apply Filters</button>
          </div>
        </div>
      </div>
      {/* Sort */}
      <div
        id="side-bar"
        className={sidebarHideRight ? "right side-bar--open" : "right"}
        ref={wrapperRefSort}
      >
        <div className="sidebar-main-content">
          <div className="side_bar_header">
            <div className="left">
              <Image src="/img/filter_icon.svg" width={21} height={21} alt="" />
              <p>Sort</p>
            </div>
            <div className="right">
              <button>Clear Filters</button>
            </div>
          </div>
          <div className="filter_body">
            <Collapse
              defaultActiveKey={["1"]}
              onChange={onChange}
              className="footer_link_collapse"
              accordion
            >
              <Panel header="Flavor" key="1">
                <div className="radio_group_wrapper none_bg">
                  <Radio.Group onChange={onChangeType} value={value}>
                    <Radio value={1}>
                      <div className="lable_with_img">
                        <span>Recommended</span>
                      </div>
                    </Radio>
                    <Radio value={2}>
                      <div className="lable_with_img">
                        <span>
                          <label>Price:</label> Low to High
                        </span>
                      </div>
                    </Radio>
                    <Radio value={3}>
                      <div className="lable_with_img">
                        <span>
                          <label>Price:</label> High to Low
                        </span>
                      </div>
                    </Radio>
                    <Radio value={4}>
                      <div className="lable_with_img">
                        <span>
                          <label>Distance:</label> Nearest first
                        </span>
                      </div>
                    </Radio>
                    <Radio value={5}>
                      <div className="lable_with_img">
                        <span>
                          <label>THC:</label> Low to High
                        </span>
                      </div>
                    </Radio>
                    <Radio value={6}>
                      <div className="lable_with_img">
                        <span>
                          <label>THC:</label> High to Low
                        </span>
                      </div>
                    </Radio>
                    <Radio value={7}>
                      <div className="lable_with_img">
                        <span>
                          <label> Delivery:</label> Fastest First
                        </span>
                      </div>
                    </Radio>
                    <Radio value={8}>
                      <div className="lable_with_img">
                        <span>
                          <label>Rating:</label> High to Low
                        </span>
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>
              </Panel>
            </Collapse>
            <button className="apply_btn">Apply Filters</button>
          </div>
        </div>
      </div>
    </>
  );
}
