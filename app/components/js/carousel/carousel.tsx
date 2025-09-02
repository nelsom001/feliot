import Image from "next/image";

import styles from "./carousel.module.scss";

import { COMPANYNAME } from "../config";

export interface TopperType {
  img: string;
  title: string;
  text: string;
}
interface TopperProp {
  data: TopperType;
}
export const Topper: React.FC<TopperProp> = ({ data }) => {
  return (
    <div className={styles.topper}>
      <div className={styles.img}>
        <Image src={data.img} fill alt={COMPANYNAME} />
      </div>
      <div className={styles.text}>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Topper;
