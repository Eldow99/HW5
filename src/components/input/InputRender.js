import React from 'react'
import InputForm from './InputForm'
function InputRender(props) {
	const saveInputData = (inputData) => {
		const dataInp = {
			...inputData,
			id: Math.random().toString(),
		}
		props.onGetInpData(dataInp)
	}
	return (
		<div>
			<InputForm onSaveInputData={saveInputData} />
		</div>
	)
}

export default InputRender
