import styles from "@/styles/Navbar.module.css";

import Image from "next/image";
import Logo from "@/../public/icon-clean.png";
import Link from "next/link";

export default function NavbarComponent() {
    return (
        <div className={styles['navbar']}>
            <Link
                href={"./"}
                className={styles['link']}
            >
                <h1 className={styles['title']}>
                    <Image
                        alt="Deepfriend logo"
                        src={Logo}
                        className={styles['logo']}
                    />
                    Deepfriend
                </h1>
            </Link>
        </div>
    );
}
