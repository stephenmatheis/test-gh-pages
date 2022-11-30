import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Test Next.js on GH Pages</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Hello, World!</h1>

                <p className={styles.description}>
                    Lorem ipsum dolor sit amet.
                </p>

                <code className={styles.code}>code</code>

                <div
                    className={styles.grid}
                    onClick={() => {
                        alert("Title");
                    }}
                >
                    <div className={styles.card}>
                        <h2>Title &rarr;</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>Title &rarr;</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>Title &rarr;</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>Title &rarr;</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/stephenmatheis"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub | Stehpen Matheis
                </a>
            </footer>
        </div>
    );
}
