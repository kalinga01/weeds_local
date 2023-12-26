"use client";
import Image from "next/image";
// import styles from "../styles/base.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }, [router]);
  return (
    <div className="loading_screen">
      <div className="loading_content">
        <div className="logo">
          <Image src="/img/weed_logo.svg" alt="" width={330} height={230} />
        </div>
        <div className="loading_bar">
          <p>Loading...</p>
          <Image src="/img/loading.svg" alt="" width={250} height={48} />
        </div>
      </div>
    </div>
  );
}
