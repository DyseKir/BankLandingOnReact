import React from 'react'
import './ProductCardComponent.scss'

function ProductCardComponent({ product, visible }) {
	return (
		<article
			className={`article-wrapper__article-block ${visible ? 'visible' : ''}`}
		>
			<img
				className='article-wrapper__article-block-svg'
				src={product.src}
				alt={product.alt}
			/>
			<div className='article-wrapper__article-text-block'>
				<h3 className='article-wrapper__logo'>{product.title}</h3>
				<p className='article-wrapper__article-block-text'>{product.text}</p>
			</div>
		</article>
	)
}

export default ProductCardComponent
