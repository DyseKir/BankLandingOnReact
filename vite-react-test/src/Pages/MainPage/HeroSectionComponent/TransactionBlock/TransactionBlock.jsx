import React from 'react'
import './TransactionBlock.scss'

function TransactionBlock({
	imageSrc,
	altText,
	text,
	spanText,
	value, // Передаем значение, которое пришло из `HeroSectionComponent`
	className,
}) {
	return (
		<div className={`transactions__container-wrapper-block ${className}`}>
			<div className='transactions__container-wrapper-block-container'>
				<img
					className='transactions__container-wrapper-block-svg'
					src={imageSrc}
					alt={altText}
				/>
				<div className='transactions__container-wrapper'>
					<p className='transactions__container-text'>{text}</p>
					<span className='transactions__container-span'>{spanText}</span>
				</div>
			</div>
			<span className='transactions__container-span-value'>
				{value} {/* Здесь выводим результат конверсии */}
			</span>
		</div>
	)
}

export default TransactionBlock
