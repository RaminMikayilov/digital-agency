"use client";

import Link from "next/link";
import { links } from "./constants";
import styles from "./navbar.module.css";
import ThemeToggler from "../theme-toggler/theme-toggler";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div className={styles.links}>
        <ThemeToggler />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
