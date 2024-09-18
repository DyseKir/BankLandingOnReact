import React, { useState } from 'react'
import UserUiCustomOption from '../UserUiCustomOption/UserUiCustomOption'
import './UserUiCustomSelect.scss'
function UserUiCustomSelect({ options, selectedOption, onOptionChange }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleOptionClick = option => {
		onOptionChange(option)
		setIsOpen(false)
	}

	return (
		<div className='UserUiCustomSelect'>
			<div
				className='UserUiCustomSelect-container'
				onClick={() => setIsOpen(!isOpen)}
			>
				<img
					className='UserUiCustomSelect-container-img'
					src={selectedOption.image}
					alt={selectedOption.text}
				/>
				<p className='UserUiCustomSelect-container-text'>
					{selectedOption.text}
				</p>
			</div>

			{isOpen && (
				<div className='UserUiCustomSelect-options'>
					{options.map((option, index) => (
						<UserUiCustomOption
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

export default UserUiCustomSelect
