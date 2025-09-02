import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        <p>Thank you for your patronage</p>
      </div>
    </footer>
  );
};

export default Footer;
