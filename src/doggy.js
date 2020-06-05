import React from 'react';

const doggy = {
	title: "I'm a playful pup",
	src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg",
	alt: "Playful Pup"
};

const style = {
	length: "250",
	width: "300"
}

export class Doggy extends React.Component {

	render() {
		return (
			<div>
				<h2 style={{ textAlign: 'center'}}>{doggy.title}</h2>
				<div style={{ textAlign: 'center'}}>
					<img 
						src={doggy.src}
						alt={doggy.alt}
						length={style.length}
						width={style.width} 
						onClick={this.props.onClick}
						
					/>
				</div>
			</div>
			
		);
	}
}