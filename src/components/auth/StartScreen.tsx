"use client";

import React, { ReactNode, useEffect } from "react";
import authStyle from "../../styles/auth.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/navigation";

export function StartScreen(): JSX.Element {
  const router = useRouter();

  return (
    <div className={authStyle.auth_page_wrapper}>
      <div className={authStyle.auth_content_wrapper}>
        <div className={authStyle.c_logo_wrapper}>
          <Image src="/img/logo_circle.svg" alt="" width={90} height={90} />
          <h2>UBERWEEDS</h2>
        </div>
        <div className={authStyle.start_screen_wrapper}>
          <h3>A Company on a mission for Wellness</h3>
          <div className={authStyle.choos_login_option}>
            <p>Create an account, its free!</p>
            <button
              className={classNames(authStyle["btn"], authStyle["green_btn"])}
            >
              Let’s Get Started
            </button>
            <div className={authStyle.loginLink}>
              <p>Already have an account?</p>
              <button
                onClick={() => router.push("/login")}
                className={classNames(
                  authStyle["btn"],
                  authStyle["border_btn"]
                )}
              >
                Login Here
              </button>
            </div>
            <a href="">or Continue as Guest</a>
          </div>
        </div>
      </div>
    </div>
  );
}
