import './App.css'
import InputRender from './components/input/InputRender'
import ItemsRender from './components/items/ItemsRender'
import { useState } from 'react'
const DATA = [
	{
		check: 'true',
		text: 'lorem Ipsum',
		select: 'MACLAREN',
		id: 'e1',
	},
]
function App() {
	const [items, setItems] = useState(DATA)

	const getInpData = (dataInp) => {
		const data = {
			...dataInp,
		}
		setItems((PrevData) => {
			return [data, ...PrevData]
		})
	}
	return (
		<div className='App'>
			<InputRender onGetInpData={getInpData} />
			<ItemsRender formData={items} />
		</div>
	)
}

export default App
