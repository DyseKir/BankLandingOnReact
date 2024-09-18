import { Link } from 'react-router-dom'
import './FooterComponent.scss'

function FooterComponent() {
	return (
		<footer>
			<div className='footer-block'>
				<div className='footer-block__wrapper'>
					<Link to='/' className='footer-block__logo-link'>
						<img
							className='footer-block__logo'
							src='/header-logo-icon-1.svg'
							alt='YourBanK logo'
						/>
						<img
							className='footer-block__text-logo'
							src='/header-logo-icon-2.svg'
							alt='YourBanK text logo'
						/>
					</Link>
					<ul className='footer-block__list'>
						<li className='footer-block__item'>
							<Link to='/' className='footer-block__item-link'>
								Home
							</Link>
						</li>
						<li className='footer-block__item'>
							<Link to='/career' className='footer-block__item-link'>
								Careers
							</Link>
						</li>
						<li className='footer-block__item'>
							<Link to='/about' className='footer-block__item-link'>
								About
							</Link>
						</li>
						<li className='footer-block__item'>
							<Link to='/security' className='footer-block__item-link'>
								Security
							</Link>
						</li>
					</ul>
				</div>
				<hr />
				<div className='footer-links-block'>
					<ul className='footer-links-block__list'>
						<li className='footer-links-block__item'>
							<Link
								className='footer-links-block__item-link'
								href='mailto:	midoriya20052003@gmail.com'
							>
								<img
									className='footer-links-block__item-link-svg'
									src='/Icon-home-page-8.svg'
									alt='Mail icon'
								/>
								midoriya20052003@gmail.com
							</Link>
						</li>
						<li className='footer-links-block__item'>
							<Link
								className='footer-links-block__item-link'
								href='tel:+1234567890'
							>
								<img
									className='footer-links-block__item-link-svg'
									src='/Icon-home-page-9.svg'
									alt='Phone icon'
								/>
								+91 91813 23 2309
							</Link>
						</li>
						<li className='footer-links-block__item'>
							<Link
								className='footer-links-block__item-link'
								href='https://www.google.com/maps/dir//Kyiv,+02000/@50.4379604,30.4224916,32770m/data=!3m1!1e3!4m18!1m8!3m7!1s0x40d4cf4ee15a4505:0x764931d2170146fe!2sKyiv,+02000!3b1!8m2!3d50.4503596!4d30.5245025!16zL20vMDJzbjM0!4m8!1m0!1m5!1m1!1s0x40d4cf4ee15a4505:0x764931d2170146fe!2m2!1d30.5245025!2d50.4503596!3e3?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D'
								target='_blank'
							>
								<img
									className='footer-links-block__item-link-svg'
									src='/Icon-home-page-10.svg'
									alt='Location icon'
								/>
								Kyiv
							</Link>
						</li>
					</ul>
				</div>
				<hr />
				<div className='privacy-block'>
					<ul className='privacy-block__list'>
						<li className='privacy-block__item'>
							<Link className='privacy-block__item-links' to='*'>
								<img
									className='privacy-block__item-links-svg'
									src='/Button-home-page-2.svg'
									alt='Facebook icon'
								/>
							</Link>
						</li>
						<li className='privacy-block__item'>
							<Link className='privacy-block__item-links' to='*'>
								<img
									className='privacy-block__item-links-svg'
									src='/Button-home-page-3.svg'
									alt='Twitter icon'
								/>
							</Link>
						</li>
						<li className='privacy-block__item'>
							<Link
								className='privacy-block__item-links'
								to='https://www.instagram.com/persssonnongrata/'
							>
								<img
									className='privacy-block__item-links-svg'
									src='/Button-home-page-4.svg'
									alt='Instagram icon'
								/>
							</Link>
						</li>
					</ul>
					<p className='privacy-block__policy-text'>
						YourBank All Rights Reserved
					</p>
					<div className='privacy-block__policy-text-block'>
						<p className='privacy-block__policy-text'>Privacy Policy</p>
						<div className='privacy-block__vertical-line'></div>
						<p className='privacy-block__policy-text'>Terms of Service</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterComponent
