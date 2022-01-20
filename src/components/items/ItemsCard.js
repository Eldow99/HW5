import React from 'react'
import './ItemsCard.css'
function ItemsCard(props) {
	return (
		<div className='list'>
			<div>{props.check}</div>
			<div> {props.text}</div>
			<div className='select'> {props.select}</div>
		</div>
	)
}

export default ItemsCard
