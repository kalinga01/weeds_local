import Image from "next/image";
import styles from "../styles/base.module.scss";
import { useEffect } from "react";
import { TrackOrder } from "../../components/checkout";

export default function CheckoutPage() {
  return <TrackOrder />;
}
