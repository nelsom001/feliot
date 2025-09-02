"use client";
import styles from "./nav.module.scss";
import Image from "next/image";
import Link from "next/link";

import { IconType } from "react-icons";
import { COMPANYNAME } from "../config";
import { FaBowlFood } from "react-icons/fa6";
import { IoWineSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

interface LinkType {
  text: string;
  link: string;
  icon: IconType;
}

const Nav: React.FC = () => {
  const topLinks: LinkType[] = [
    {
      link: "/",
      text: "Food",
      icon: FaBowlFood,
    },
    {
      text: "Drinks",
      link: "/drinks",
      icon: IoWineSharp,
    },
  ];
  const pathName = usePathname();
  return (
    <nav className={styles.nav}>
      <div className={styles.top}>
        <Link href={"/"} className={styles.logo}>
          <Image src={"/logo.png"} fill alt={COMPANYNAME} />
        </Link>
        <span>{COMPANYNAME}</span>
      </div>
      <div className={styles.center}>
        {topLinks.map((e, i) => (
          <Link
            href={e.link}
            className={`${styles.link} ${
              pathName == e.link ? styles.active : ""
            }`}
            key={i}
          >
            <e.icon className={styles.icon} />
            <span>{e.text}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
