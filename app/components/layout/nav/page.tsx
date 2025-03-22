import styles from "@/components/layout/nav/nav.module.css";
export default function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>Navメニュー</li>
      </ul>
    </nav>
  );
}
