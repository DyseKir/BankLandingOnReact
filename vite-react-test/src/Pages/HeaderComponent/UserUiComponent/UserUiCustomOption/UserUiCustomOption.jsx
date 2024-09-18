import React from 'react'
import './UserUiCustomOption.scss'
function UserUiCustomOption({ option, onClick }) {
	return (
		<div className='UserUiCustomOption' onClick={() => onClick(option)}>
			<img className='UserUiCustomOption-img' src={option.image} alt='' />
			<p className='UserUiCustomOption-text'>{option.text}</p>
		</div>
	)
}

export default UserUiCustomOption
