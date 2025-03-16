"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import styles from "@/styles/Header.module.scss";
import { Jersey_15 } from "next/font/google";

import LogoImage from "@/../public/images/WalkSignal.png";
import LoginImage from "@/../public/images/login.png";
import MapImage from "@/../public/images/map.png";
import ContactImage from "@/../public/images/contact.png";

const jersey = Jersey_15({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div>
            {/* ヘッダー */}
            <div className={styles.header}>
                <div className={styles["header__container"]}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <div className={styles["logo__inner"]}>
                                <Image src={LogoImage} height="100" width="100" alt="Logo" className={styles["logo__img"]} />
                                <span className={`${styles["logo__letter"]} ${jersey.className}`}>
                                    <span className={styles["letter-green"]}>W</span>alk<span className={styles["letter-red"]}>S</span>ignal
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ハンバーガーメニュー */}
            <div
                className={classNames(styles.hamburger, { [styles.active]: menuOpen })}
                onClick={toggleMenu}
            >
                <div className={styles["hamburger__line"]}></div>
                <div className={styles["hamburger__line"]}></div>
                <div className={styles["hamburger__line"]}></div>
            </div>

            {/* メニュー */}
            <div className={classNames(styles.menu, { [styles.active]: menuOpen })}>
                <div className={styles["menu__container"]}>
                <div className={styles.logo}>
                        <Link href="/">
                            <div className={styles["logo__inner"]}>
                                <Image src={LogoImage} height="100" width="100" alt="Logo" className={styles["logo__img"]} />
                                <span className={`${styles["logo__letter"]} ${jersey.className}`}>
                                    <span className={styles["letter-green"]}>W</span>alk<span className={styles["letter-red"]}>S</span>ignal
                                </span>
                            </div>
                        </Link>
                    </div>
                    <ul className={styles["menu__inner"]}>
                        <li>
                            <Link href="/login">
                                <Image src={LoginImage} height={70} width={70} alt="Login" />
                                <span>ログイン・新規登録</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/map">
                                <Image src={MapImage} height={70} width={70} alt="Map" />
                                <span>WalkSignal - マップ</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <Image src={ContactImage} height={70} width={70} alt="Contact" />
                                <span>お問い合わせ</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
