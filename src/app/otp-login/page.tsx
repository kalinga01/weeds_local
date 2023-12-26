import Image from "next/image";
import styles from "../styles/base.module.scss";
import { useEffect } from "react";
import { OtpLogin } from "../../components/auth/Login";

export default function Home() {
  return <OtpLogin />;
}
