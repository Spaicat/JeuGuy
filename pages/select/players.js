import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/Layout";
import stylesLayout from "../../styles/Layout.module.css";
import styles from "../../styles/Select.module.css";
import dynamic from "next/dynamic";

const NameItem = dynamic(() => import("../../components/select/NameItem"));

function SelectPlayers() {
	let localPlayers = [];
	if (process.browser) {
		localPlayers = JSON.parse(localStorage.getItem("players")) || [];
	}
	const [playerList, setPlayerList] = useState(localPlayers);
	const [name, setName] = useState("");
	const [error, setError] = useState("");
	
	const isNameValid = () => {
		let errorTemp = "";
		let nameTemp = name.trim();
		
		if (nameTemp == "")
			errorTemp = "Le nom ne peut pas être vide";
		else if (playerList.some(player => player.name === nameTemp))
			errorTemp = "Il ne peut pas y avoir deux fois le même nom";
		else if (nameTemp.length > 20)
			errorTemp = "Le nom ne doit pas faire plus de 20 caractères";
		
		if (errorTemp) {
			setError(errorTemp);
			return false;
		}

		setError("");
		return true;
	}

	const addPlayer = (event) => {
		event.preventDefault();
		if (isNameValid()) {
			setPlayerList([...playerList, { name: name.trim(), gender: "F" }]);
			setName("");
		}
	}
	const removePlayer = (index) => {
		const reducedArr = [...playerList];
		reducedArr.splice(index, 1);
		setPlayerList(reducedArr);
	}

	const savePlayers = () => {
		localStorage.setItem("players", JSON.stringify(playerList));
	}

	const handleName = (event) => {
		setName(event.target.value);
		setError("");
	}

	const handleGender = (event, index) => {
		let reducedArr = [...playerList];
		let item = { ...reducedArr[index], gender: event.target.value};
		reducedArr[index] = item;
		setPlayerList(reducedArr);
	}

	return (
		<Layout title="Selectionner">
			<div className={stylesLayout.title}>
				<h1>jeuGuy</h1>
			</div>

			<p className={styles.text}>Entrez les noms des participants :</p>
			<form
				onSubmit={addPlayer}
				className={`${styles.container} ${styles.name_entry_container}`}
			>
				<input className={styles.input_text} type="text" value={name} onChange={handleName} />
				<button type="submit" className={styles.input_btn}>Ajouter</button>
			</form>
			<p>{error}</p>

			<ul className={`${styles.container} ${styles.players}`}>
				{playerList.map((item, key) => {
					return (
						<NameItem
							name={item.name}
							gender={item.gender}
							fctRemove={removePlayer}
							fctGender={handleGender}
							index={key}
							key={key}
						/>
					);
				})}
			</ul>

			<Link href="/select/options">
				<a onClick={savePlayers} className={`${styles.container} ${styles.btn}`}>
					<span>Suivant</span>
				</a>
			</Link>
		</Layout>
	);
}

export default SelectPlayers;