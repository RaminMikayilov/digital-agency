"use client";

import Link from "next/link";
import { links } from "./constants";
import styles from "./navbar.module.css";

const Navbar = () => {
  const signOut = () => {
    console.log("Sign out");
  };
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        <button className={styles.logout} onClick={signOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
