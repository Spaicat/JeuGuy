import { useState, useEffect, Fragment } from "react";
import styles from "../../styles/Select.module.css";

export default function CheckboxSelect(props) {
	const [selected, setSelected] = useState(props.selected);

	useEffect(() => {
		setSelected(props.selected);
	}, [props.selected]);

	return (
		<div className={styles.checkbox}>
			{props.content.map((item, key) => {
				return (
					<Fragment key={key}>
						<input
							type="checkbox"
							id={props.name + "-" + key}
							name={props.name}
							value={item.theme}
							checked={selected.includes(item.theme)}
							onChange={() => {
								props.fctHandle(item.theme);
							}}
						/>
						<label htmlFor={props.name + "-" + key}>
							<div>
								<span>{item.icon}</span>
								<span>{item.text}</span>
							</div>
						</label>
					</Fragment>
				);
			})}
		</div>
	);
}
