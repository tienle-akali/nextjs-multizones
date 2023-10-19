import Link from "next/link";
import styles from "./nav.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="../">Home</Link>
      <Link href="../about">About</Link>
      <Link href="../tour">Tour</Link>
      <Link href="../feed">Feed</Link>
      <Link href="../hotel">Hotel</Link>
      <Link href="../flight">Flight</Link>
      <Link href="../youtube">Youtube</Link>
      <Link href="../help">Help</Link>
    </nav>
  );
}
