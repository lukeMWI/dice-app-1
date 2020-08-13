import React from 'react';

const DieImage = ({ src }) => ( 
	<img 
		className="die-image"
		src={ src }
		width="70" height="70" 
		alt="die img"
	/>
)

export default DieImage;