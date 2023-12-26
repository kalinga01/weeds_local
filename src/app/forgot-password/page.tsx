import Image from "next/image";
import styles from "../styles/base.module.scss";
import { useEffect } from "react";
import { ForgotPassword } from "../../components/auth/forgotpassword";

export default function Home() {
  return <ForgotPassword />;
}
