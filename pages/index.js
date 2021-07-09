import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import stylesLayout from "../styles/Layout.module.css";
import AnimatedTextBg from "../components/AnimatedTextBg";

function Home() {
	return (
		<Layout>
			<div className={stylesLayout.title}>
				<h1>
					jeuGuy
				</h1>
			</div>

			<Link href="/select/players">
				<a className={styles.btn}>Jouer</a>
			</Link>

			<AnimatedTextBg row={21} col={18} />
		</Layout>
	);
}

export default Home;