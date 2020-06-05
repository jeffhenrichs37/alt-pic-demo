import React, { Component } from 'react';

const kitty = {
	title: "I'm a kitty cat.",
	src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
	alt: 'Kitty'
};

const style = {
	length: '250',
	width: '300'
};

export class Kitty extends Component {

	render() {
		return (
			<div>
				<h2 style={{ textAlign: 'center'}}>{kitty.title}</h2>
				<div style={{ textAlign: 'center'}}>
					<img 
						src={kitty.src}
						width = {style.width}
						length = {style.length}
						alt = {kitty.alt}
						onClick = {this.props.onClick}
						style={{ textAlign: 'center'}}
					/>
				</div>
			</div>
		);
	};
}