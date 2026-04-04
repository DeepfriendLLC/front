"use client";

import styles from "@/styles/Navbar.module.css";

import Image from "next/image";
import Logo from "@/../public/icon-clean.png";

export function NavbarComponent() {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>
                <Image
                    alt="Deepfriend logo"
                    src={Logo}
                    className={styles.logo}
                />
                Deepfriend
            </h1>
        </div>
    );
}