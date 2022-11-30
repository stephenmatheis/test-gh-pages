import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    const date = new Date().toLocaleDateString();
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Test | About</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>About</h1>

                <p className={styles.description}>
                    Lorem ipsum dolor sit amet.
                </p>

                <code className={styles.code}>{date}</code>
  
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
