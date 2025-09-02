import styles from "./grid.module.scss";

export interface GridType {
  title: string;
  data: { name: string; price: number }[];
}

export default function GridBox({ data }: { data: GridType }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{data.title}</h2>
      </div>
      <div className={styles.grid}>
        {data.data.map((e, i) => (
          <div key={i} className={styles.item}>
            <p>{e.name}</p>
            <p>{`₦ ${e.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
