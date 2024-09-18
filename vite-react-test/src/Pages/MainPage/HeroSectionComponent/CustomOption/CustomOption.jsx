import React from 'react'
import './CustomOption.scss'

function CustomOption({ option, onClick }) {
	return (
		<div className='custom-option' onClick={() => onClick(option)}>
			<div className='custom-option__container'>
				<img
					className='custom-option__container-img'
					src={option.image}
					alt=''
				/>
				<p className='custom-option__container-text'>{option.label}</p>
			</div>
			<p className='custom-option__text'>{option.text}</p>
		</div>
	)
}

export default CustomOption
