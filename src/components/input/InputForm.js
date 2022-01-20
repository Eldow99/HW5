import { useState } from 'react'
import './InputForm.css'
const InputForm = (props) => {
	const [check, setCheck] = useState(false)
	const [text, setText] = useState('')
	const [select, setSelect] = useState('LEXUS')
	const onCheckHandler = (e) => {
		setCheck(e.target.checked)
	}

	const onTextHandler = (e) => {
		setText(e.target.value)
	}
	const onSelectHandler = (e) => {
		setSelect(e.target.value)
	}
	const submitHandler = (e) => {
		const formData = {
			check: check.toString(),
			text,
			select,
		}
		e.preventDefault()
		props.onSaveInputData(formData)
	}
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='input'>
					<label>MARRIAGE :</label>
					<input
						checked={check}
						onChange={onCheckHandler}
						type='checkbox'
					/>
				</div>

				<div className='text'>
					<label>TextArea:</label>
					<textarea
						value={text}
						onChange={onTextHandler}
						type='checkbox'
					/>
				</div>
				<div>
					{' '}
					<select onChange={onSelectHandler} value={select}>
						<option value='Lexus'>LEXUS</option>
						<option value='Mercedes'>Mersedes</option>
						<option value='Toyota'>Toyota</option>
						<option value='BMW'>BMW</option>
						<option value='Lambo'>Lamborghini</option>
					</select>
				</div>

				<div>
					<button type='submit'>SAVE</button>
				</div>
			</form>
		</div>
	)
}
export default InputForm
