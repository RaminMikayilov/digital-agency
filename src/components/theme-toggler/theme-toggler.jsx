"use client";

import React, { useContext } from "react";
import styles from "./theme-toggler.module.css";
import { ThemeContext } from "@/context/theme.context";
import { THEME_MODE } from "@/constants";

const ThemeToggler = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === THEME_MODE.LIGHT ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default ThemeToggler;
