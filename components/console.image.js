function renderImage (url, scale = 0.3) {
	const img = {
		height: 400,
		width: 1000,
	}

	const style = `
		display: block !important;
		margin: 10px 0;
		font-size: ${img.height * scale}px;
		padding: ${Math.floor(img.height * scale/2)}px ${Math.floor(img.width * scale/2)}px;
		background: url(${url});
		background-size: ${img.width * scale}px ${img.height * scale}px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	`

	console.log("%c ", style);
}

console.image = renderImage