import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/Layout";
import stylesLayout from "../../styles/Layout.module.css";
import styles from "../../styles/Select.module.css";
import dynamic from "next/dynamic";

const RadioSelect = dynamic(() => import("../../components/select/RadioSelect"));
const CheckboxSelect = dynamic(() => import("../../components/select/CheckboxSelect"));

function SelectOptions() {
	let localOptions = null;
	if (process.browser) {
		localOptions = JSON.parse(localStorage.getItem("options"));
	}
	const [options, setOptions] = useState(localOptions || {
		difficulty: 1,
		duration: 1,
		themes: ["normal", "defi"]
	});

	const saveOptions = () => {
		localStorage.setItem("options", JSON.stringify(options));
	}

	const handleDifficulty = (index) => {
		setOptions({ ...options, difficulty: index });
	}

	const handleDuration = (index) => {
		setOptions({ ...options, duration: index });
	}

	const handleThemes = (label) => {
		let newThemes = options.themes;

		if (newThemes.includes(label)) {
			const index = newThemes.indexOf(label);
			if (index > -1)
				newThemes.splice(index, 1);
		}
		else {
			newThemes.push(label);
		}
		
		setOptions({ ...options, themes: newThemes });
	}

	return (
		<Layout title="Selectionner">
			<div className={stylesLayout.title}>
				<h1>jeuGuy</h1>
			</div>

			<p className={styles.text}>Choisissez les options :</p>

			<form className={`${styles.container} ${styles.form_options}`}>
				<p>Difficulté gorgées</p>
				<RadioSelect
					name="difficulty"
					content={["Facile", "Moyen", "Difficile"]}
					fctHandle={handleDifficulty}
					selected={options.difficulty}
				/>
				<p>Durée</p>
				<RadioSelect
					name="duration"
					content={["Court", "Moyen", "Long"]}
					fctHandle={handleDuration}
					selected={options.duration}
				/>
				<p>Thèmes</p>
				<CheckboxSelect
					name="themes"
					content={[
						{text: "Normal", icon: "☄️", theme: "normal"},
						{text: "Sport", icon: "🤸", theme: "sport"},
						{text: "Défi", icon: "🥇", theme: "defi"},
						{text: "Hot", icon: "🔥", theme: "hot"},
					]}
					fctHandle={handleThemes}
					selected={options.themes}
				/>
			</form>

			<Link href="/select/players">
				<a onClick={saveOptions} className={`${styles.container} ${styles.btn}`}>
					<span>Précédent</span>
				</a>
			</Link>
			<Link href="/play">
				<a onClick={saveOptions} className={`${styles.container} ${styles.btn}`}>
					<span>Jouer</span>
				</a>
			</Link>
		</Layout>
	);
}

export default SelectOptions;