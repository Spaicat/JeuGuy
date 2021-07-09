import { useState, useEffect, Fragment } from "react";
import styles from "../../styles/Select.module.css";

export default function RadioSelect(props) {
	const [selected, setSelected] = useState(props.selected);

	useEffect(() => {
		setSelected(props.selected);
	}, [props.selected]);
	
	return (
		<div className={styles.radio}>
			{props.content.map((item, key) => {
				return (
					<Fragment key={key}>
						<input
							type="radio"
							id={props.name + "-" + key}
							name={props.name}
							value={key}
							checked={selected === key}
							onChange={() => {
								props.fctHandle(key);
							}}
						/>
						<label htmlFor={props.name + "-" + key}>
							{item}
						</label>
					</Fragment>
				);
			})}
		</div>
	);
}
