import Image from "next/image";
import styles from "../styles/base.module.scss";
import { useEffect } from "react";
import { LoginPhone } from "../../components/auth/Login";

export default function Home() {
  return <LoginPhone />;
}
