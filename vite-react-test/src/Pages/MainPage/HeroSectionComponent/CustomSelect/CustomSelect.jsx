import React from 'react'
import classes from './CustomSelect.module.scss'
import CustomOption from '../CustomOption/CustomOption'

function CustomSelect({
	options,
	additionalClass,
	selectedOption,
	onOptionChange,
	disabledOption,
}) {
	const [isOpen, setIsOpen] = React.useState(false)

	const handleOptionClick = option => {
		onOptionChange(option)
		setIsOpen(false)
		console.log(option)
	}

	// Filter out the selected option and the disabled option from the list
	const filteredOptions = options.filter(
		option =>
			option.label !== selectedOption.label && option.label !== disabledOption
	)

	return (
		<div className={`${classes['custom-select']} ${additionalClass}`}>
			<div
				className={classes['custom-select__container']}
				onClick={() => setIsOpen(!isOpen)}
			>
				<img
					className={classes['custom-select__container-img']}
					src={selectedOption.image}
					alt={selectedOption.label}
				/>
				<p className={classes['custom-select__container-text']}>
					{selectedOption.label}
				</p>
			</div>
			<p className={classes['custom-select__text']}>{selectedOption.text}</p>

			{isOpen && (
				<div className={classes['custom-select__options']}>
					{filteredOptions.map((option, index) => (
						<CustomOption
							key={index}
							option={option}
							onClick={handleOptionClick}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default CustomSelect
