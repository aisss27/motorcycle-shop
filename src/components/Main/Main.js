import React from 'react';

const Header = () => {
    return (
        <section className={styles.hero}>
            <header className={styles.header}>
                <span>MONTBLANC</span>
                <nav>
                    <ul>
                        <li><a href="#">Bikes</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Sign In</a></li>
                    </ul>
                </nav>
            </header>
            <h1>Welcome to our motorcycle shop</h1>
            <div className={styles.moto_characteristics}>
                <div className={styles.moto_characteristics_card}>
                    <span className={styles.characteristics_left}>TOP SPEED</span>
                    <div className={styles.characteristics_right}>
                        <span>6-SPEED CONSTANT-MESH</span>
                        <span>169 MPH</span>
                        <span>272 KM/H</span>
                    </div>
                </div>
                <div className={styles.moto_characteristics_card}>
                    <span className={styles.characteristics_left}>POWER</span>
                    <div className={styles.characteristics_right}>
                        <span>121 kW</span>
                        <span>162 HP</span>
                        <span>9.250 RPM</span>
                    </div>
                </div>
                <div className={styles.moto_characteristics_card}>
                    <span className={styles.characteristics_left}>FUEL CAPACITY</span>
                    <div className={styles.characteristics_right}>
                        <span>4.5 US GAL</span>
                        <span>17 L</span>
                        <span>3.7 IMP GAL</span>
                    </div>
                </div>
            </div>
            <a className={styles.browse_btn} href="#">BROWSE</a>
        </section>
    );
};

export default Header;
