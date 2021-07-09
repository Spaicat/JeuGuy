import styles from "../../styles/Select.module.css";
import CloseIcon from "../../components/media/CloseIcon";
import MarsIcon from "../../components/media/MarsIcon";
import VenusIcon from "../../components/media/VenusIcon";

export default function NameItem(props) {
	let name = `gender-input-${props.index}`;
	let idFemale = `female-input-${props.index}`;
	let idMale = `male-input-${props.index}`;

	const handleGender = (event) => {
		props.fctGender(event, props.index);
	}

	return (
		<li className={`${styles.container} ${styles.player_item}`}>
			<span className={styles.name}>{props.name}</span>
			<div className={styles.gender}>
				<input type="radio" id={idFemale} name={name} value="F" checked={props.gender === "F"} onChange={handleGender} />
				<label htmlFor={idFemale}>
					<VenusIcon />
				</label>

				<input type="radio" id={idMale} name={name} value="M" checked={props.gender === "M"} onChange={handleGender} />
				<label htmlFor={idMale}>
					<MarsIcon />
				</label>
			</div>
			<button onClick={props.fctRemove} className={styles.btn_remove}>
				<CloseIcon />
			</button>
		</li>
	);
}
