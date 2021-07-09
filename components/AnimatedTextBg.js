import styles from "../styles/Home.module.css";

export default function AnimatedTextBg(props) {
	const getAnimatedBg = (nbRow, nbCol) => {
		let animatedList = [];

		for (let i = 0; i < nbRow; i++) {
			const createRow = (id) => {
				let row = [];
				for (let j = 0; j < nbCol; j++) {
					row.push(<span key={i+id+j} >Ravagex</span>);
				}
				return row;
			}
			animatedList.push(
				<div key={"animatedRow"+i} className={styles.animated_row}>
					<div>{createRow("first")}</div>
					<div>{createRow("second")}</div>
				</div>
			);
		}
		return animatedList;
	}
	
	return (
		<div className={styles.animated}>
			{getAnimatedBg(props.row, props.col)}
		</div>
	);
}
