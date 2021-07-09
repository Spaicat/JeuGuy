import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Layout from "../components/Layout";
import styles from "../styles/Play.module.css";
import data from '../data/sentences.json';

const consoleInformation = (sentences, players) => {
	let cssSquare = "padding: 3px 5px; border-radius: 5px; font-weight: bold;";
	let cssSmall = "font-size: 10px;";
	console.groupCollapsed(`%cJoueurs (${players.length})`, `${cssSquare} color: black; background-color: white;`);
	players.forEach(player => {
		console.log(`%c${player.gender}%c ${player.name}`,
		`${cssSquare} color: black; background-color: white;`,
		"");
	});
	console.groupEnd();
	console.groupCollapsed(`%cPhrases (${sentences.length})%c %c(${sentences.filter(x => x.type == "virus").length} virus)`,
	`${cssSquare} color: black; background-color: white;`,
	"",
	`${cssSquare} color: white; background-color: red;`);
	sentences.forEach(sentence => {
		let cssTheme = "";
		switch (sentence.theme) {
			case "sport":
				cssTheme = "color: white; background-color: blue;";
				break;
			case "hot":
				cssTheme = "color: white; background-color: #ff36bf;";
				break;
			default:
				cssTheme = "color: black; background-color: white;";
				break;
		}
		let sentenceType = "";
		let spaceType = "";
		if (sentence.type != "normal") {
			sentenceType = sentence.type;
			spaceType = " ";
		}
		console.groupCollapsed(`%c${sentenceType}%c${spaceType}%c${sentence.theme}%c ${sentence.text}`,
		`${cssSquare} color: white; background-color: red; ${cssSmall}`,
		`${cssSmall}`,
		`${cssSquare} ${cssTheme} ${cssSmall}`,
		`${cssSmall}`);
		console.table(sentence);
		console.groupEnd();
	});
	console.groupEnd();
}


let regexToFind = {
	"neutral": /\[nom\]/g,
	"male": /\[nomM\]/g,
	"female": /\[nomF\]/g,
	"gorgees": /\[g[0-3]\]/g,
};
let stringToFind = {
	"neutral": "[nom]",
	"male": "[nomM]",
	"female": "[nomF]",
};

/**
 * Renvoie un entier aléatoire entre min et max [min, max]
 * @param  {number} min la valeur minimum que peut atteindre l'entier
 * @param  {number} max la valeur maximum que peut atteindre l'entier
 * @return {number} L'entier tiré au hasard
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {number} difficulty 
 * @returns {number}
 */
 const getAmount = (difficulty) => {
	return [
		["2 gorgées", "3 gorgées", "4 gorgées", "6 gorgées"],
		["3 gorgées", "4 gorgées", "6 gorgées", "9 gorgées"],
		["4 gorgées", "6 gorgées", "8 gorgées", "1 cul sec"],
	][difficulty];
}

/**
 * Renvoie le nombre de phrases à afficher
 * @param {number} duration 
 * @returns {number} Nombre de phrases
 */
const getLengthSentences = (duration) => {
	return {
		"total": 20 + 15*duration,
		"virus": 2 + 2*duration
	};
}

/**
 * 
 * @param {Object[]} sentences
 * @param {Object[]} options 
 * @param {Object[]} players 
 * @returns {Object[]} 
 */
const filterSentences = (sentences, options, players) => {
	let nbFemale = players.reduce((acc, cur) => cur.gender === "F" ? ++acc : acc, 0);
	let nbGender = {
		"female": nbFemale,
		"male": players.length - nbFemale
	};

	//Nombre d'élément regex trouvé dans la phrase
	const getNbElt = (regex, text) => {
		return (text.match(regex) || []).length;
	};
	
	return sentences.filter((elt) => {
		let nbEltFinded = getNbElt(regexToFind.neutral, elt.text);
		let nbEltMaleFinded = getNbElt(regexToFind.male, elt.text);
		let nbEltFemaleFinded = getNbElt(regexToFind.female, elt.text);
		
		//On vérifie s'il y a bien, autant ou plus de joueur que la phrases en nécessite (en fonction du sexe)
		let enoughEltHomme = nbGender.male >= nbEltMaleFinded;
		let enoughEltFemme = nbGender.female >= nbEltFemaleFinded;
		let enoughPlayer = players.length >= (nbEltFinded + nbEltMaleFinded + nbEltFemaleFinded);

		return options.themes.includes(elt.theme) && enoughEltHomme && enoughEltFemme && enoughPlayer;
	});
}

/**
 * 
 * @param {Object[]} sentences 
 * @param {Object[]} options 
 * @param {Object[]} players 
 * @returns {Object[]}
 */
const selectSentences = (sentences, options, players) => {
	let sentencesSelected = [];
	let lengthSentences = getLengthSentences(options.duration);
	
	let nbSentencesPicked = 0;
    let nbVirusPicked = 0;
	let idSentencesPicked = [];

	while (nbSentencesPicked < lengthSentences.total && idSentencesPicked.length < sentences.length) {
		//On choisit un numéro au hasard
		let nbRandomSentence = Math.floor(Math.random()*sentences.length);
		if (!idSentencesPicked.includes(nbRandomSentence)) {
			idSentencesPicked.push(nbRandomSentence);
			
			let sentencePicked = sentences[nbRandomSentence];

			if (sentencePicked.type == "virus") {
				if (nbVirusPicked < lengthSentences.virus) {
					sentencesSelected.push(sentencePicked);
					nbSentencesPicked++;
					nbVirusPicked++;
				}
			}
			else {
				sentencesSelected.push(sentencePicked);
				nbSentencesPicked++;
			}
		}
	}

	return sentencesSelected;
}

const initSentences = (sentences, options, players) => {
	let amount = getAmount(options.difficulty);
	return sentences.map((sentence) => {
		//Fait une copie des joueurs
		let playersNotPicked = players.slice();

		const initPlayers = (stringMatch) => {
			while (sentence.text.indexOf(stringMatch) > -1) {
				//Choisit parmis quel type de joueur on peut tirer
				let playerToPick;
				switch (stringMatch) {
					case stringToFind.female:
						playerToPick = playersNotPicked.filter(player => player.gender == "F");
						break;
					case stringToFind.male:
						playerToPick = playersNotPicked.filter(player => player.gender == "M");
						break;
					default:
						playerToPick = playersNotPicked;
				}

				//Choisit un joueur au hasard
				let playerPicked = playerToPick[Math.floor(Math.random()*playerToPick.length)];
				
				//Retire ce joueur de la liste des joueurs non pris
				playersNotPicked.splice(playersNotPicked.indexOf(playerPicked), 1);

				//Remplace l'élément par le nom du joueur
				sentence.text = sentence.text.replace(stringMatch, playerPicked.name);

                //Si la phrase est un virus et qu'on trouve un élément dans les details
                if (sentence.type == "virus" && sentence.details.indexOf(stringMatch) > -1) {
                    //Remplace le eltToFind par le nom du joueur (le même que le text)
                    sentence.details = sentence.details.replace(stringMatch, playerPicked.name);
                }
			}
		};
		
		initPlayers(stringToFind.neutral);
		initPlayers(stringToFind.male);
		initPlayers(stringToFind.female);

		const initGorgees = (text) => {
			let gorgeesFinded = text.match(regexToFind.gorgees) || [];
			gorgeesFinded.forEach((elt) => {
				let amountIndex = amount[parseInt(elt.charAt(2))];
				text = text.replaceAll(elt, amountIndex);
			});
			return text;
		};

		sentence.text = initGorgees(sentence.text);
		sentence.details = initGorgees(sentence.details);

		return sentence;
	});
}

/**
 * Place les virus en tant que phrase
 * @param {Object[]} sentences Tableau des phrases retenues
 */
 const putVirus = (sentences) => {
	let newSentences = sentences.slice();

	for (let i = 0; i < sentences.length; i++) {
		if (sentences[i].type == "virus") {
			const indexRandVirus = getRandomInt(3, 6); //TODO : different virus length (difficulty)
			const sentenceVirus = {
				"text": sentences[i].details,
				"theme": sentences[i].theme,
				"type": "virusEnd",
			};
			newSentences.splice(i+indexRandVirus, 0, sentenceVirus);
		}
	}

	return newSentences;
}


function Play() {
	let localOptions = null;
	let localPlayers = null;
	if (process.browser) {
		localOptions = JSON.parse(localStorage.getItem("options"));
		localPlayers = JSON.parse(localStorage.getItem("players"));
	}
	const router = useRouter();
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");
	const [players] = useState(localPlayers);
	const [options] = useState(localOptions);
	const [barLength, setBarLength] = useState(0);

    let currentSentence = 0;

	const handleClick = (event, sentences) => {
		event.preventDefault();
		//Clique à gauche
		if (event.clientX < window.innerWidth / 2) {
			if (currentSentence > 0) {
				currentSentence--;
			}
		}
		//Clique à droite
		else {
			if (currentSentence < sentences.length-1) {
				currentSentence++;
			}
			else {
				router.reload('/play');
			}
		}
		setText(sentences[currentSentence].text);
		setBarLength(getLengthBar(sentences.length));
	};

	const getLengthBar = (sentencesLength) => {
		return currentSentence*100 / sentencesLength;
	};

	useEffect(() => {
		let sentences = filterSentences(data, options, players);
		sentences = selectSentences(sentences, options, players);
		sentences = initSentences(sentences, options, players);
		sentences = putVirus(sentences);
		consoleInformation(sentences, players);

		setBarLength(getLengthBar(sentences.length));
		setText(sentences[0].text);
		
		document.addEventListener("click", (e) => handleClick(e, sentences));

        /*let nRandomSentences = Math.floor(Math.random()*data.length);
		setText(data[nRandomSentences].text);*/

		// TODO : (idée en ts => Faire reducer et interface pour les phrases du json : https://youtu.be/Z5iWr6Srsj8?t=918)
		// (Faire des fonctions (en dehors du composants pour que ça soit clean (juste au dessus là)))
		// - Filtrer le json data pour ne prendre que les phrases qui respectent les options (thèmes...)
		// - Faire le tableau de phrases (une certaine longueur en fonction de la longueur en option)
		// - Remplacer les noms dans les phrases (tirer les noms au hasard tout ça tout ça)
		// - Mettre les virus quelque part
		// - Mettre la conséquence juste après pour les choix
		//
		// - Pour les choix, ce sera dans le jeu de remplacer le nom des détails donc pas dans cette fonction
	}, []);

	return (
		<Layout title="Selectionner">
			<div className={`${styles.container} ${styles.main}`}>
				<Link href="/select/players">
					<a className={styles.quitBtn}></a>
				</Link>
				<div className="title">
					{title || ""}
				</div>
				<span>
					{text || "Chargement..."}
				</span>
				<div className={styles.barContainer}>
					<div className={styles.bar}>
						<div
							className={styles.barValue}
							style={{width: `${barLength}%`, backgroundColor: "#84FFB9"}}
						>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Play;