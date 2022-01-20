import React from 'react'
import ItemsCard from './ItemsCard'
import './ItemsRender.css'
function ItemsRender(props) {
	return (
		<div>
			{props.formData.map((el) => {
				return (
					<ItemsCard
						key={el.id}
						text={el.text}
						select={el.select}
						check={el.check}
					/>
				)
			})}
		</div>
	)
}

export default ItemsRender
