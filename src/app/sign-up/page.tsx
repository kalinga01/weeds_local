import Image from "next/image";
import styles from "../styles/base.module.scss";
import { useEffect } from "react";
import { SignUpStep01 } from "../../components/auth/Signup";

export default function Home() {
  return <SignUpStep01 />;
}
