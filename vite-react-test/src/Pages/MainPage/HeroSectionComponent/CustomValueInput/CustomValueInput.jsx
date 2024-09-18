import React, { useState } from 'react'
import classes from './CustomValueInput.module.scss'

function CustomValueInput({
	value,
	onValueChange,
	additionalClass,
	placeholder,
}) {
	const [isFocused, setIsFocused] = useState(false)

	// Разрешить ввод только числовых значений
	const handleChange = e => {
		const newValue = e.target.value
		if (/^\d*$/.test(newValue)) {
			onValueChange(newValue)
		}
	}

	return (
		<input
			placeholder={placeholder}
			className={`${classes['custom-value-input']} ${additionalClass}`}
			value={isFocused || value ? value : placeholder}
			onChange={handleChange}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		/>
	)
}

export default CustomValueInput
