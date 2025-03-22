import styles from "@/components/layout/header/header.module.css";
import Logo from "@/components/ui/logo/page";
import Image from "next/image";
import { AiFillBell } from "react-icons/ai";
import { MdOutlineSearch } from "react-icons/md";
import { FaPen } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div>
        <ul className={styles.headerList}>
          <li>
            <MdOutlineSearch size={24} color="#717171" />
          </li>
          <li>
            <AiFillBell size={24} color="#717171" />
          </li>
          <li>
            <Image
              src="/images/avator.avif"
              className={styles.avator}
              alt="アバター"
              width={32}
              height={32}
            />
          </li>
          <li>
            <button className={styles.postButton}>
              投稿する
              <FaPen size={12} color="#ECF0E9" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
