import Head from "next/head";
import styles from "../styles/Layout.module.css";
import "../components/console.image";

function Layout({ children, title = "jeuGuy" }) {
	/*console.clear();
	console.image("https://pbs.twimg.com/media/DQi_M-xXkAU6Dmz?format=jpg&name=small");
	console.log("%c You've violated the law!", "color: red; font-size: 28px; font-weight: 900;");*/

	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<meta name="description" content="jeuGuy, un jeu créé par les Ravagex" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{children}
			</main>
		</div>
	);
}

export default Layout;
