import Image from "next/image";
import styles from "../styles/base.module.scss";
import { useEffect } from "react";
import { Dispensaries } from "../../components/dispensaries";

export default function HomePage() {
  return <Dispensaries />;
}
