import './MissionVision.scss'

function MissionVision() {
	return (
		<section className='MissionVisionSection'>
			<div className='MissionVisionSection__title-text-block'>
				<h2 className='MissionVisionSection__title'>Mission & Vision</h2>
				<p className='MissionVisionSection__text'>
					We envision being a leading force in the industry, driven by
					innovation, integrity, and inclusivity, creating a brighter financial
					future for individuals and businesses while maintaining a strong
					commitment to customer satisfaction and community development
				</p>
			</div>

			<div className='MissionVisionSection__img-block-container'>
				<div className='MissionVisionSection__img-text-block-mission'>
					<div className='MissionVisionSection__img-block'>
						<img
							src='/aboutPage-mission-1.svg'
							alt=''
							className='MissionVisionSection__img'
						/>
					</div>
					<div className='MissionVisionSection__img-block-container-text-block-mission'>
						<h3 className='MissionVisionSection__img-block-container-title'>
							Mission
						</h3>
						<p className='MissionVisionSection__img-block-container-text'>
							At YourBank, our mission is to empower our customers to achieve
							financial success. We are dedicated to delivering innovative
							banking solutions that cater to their unique needs. Through
							personalized services, expert guidance, and cutting-edge
							technology, we aim to build strong, lasting relationships with our
							customers. Our mission is to be their trusted partner, helping
							them navigate their financial journey and realize their dreams.
						</p>
					</div>
				</div>
				<div className='MissionVisionSection__img-text-block-vision'>
					<div className='MissionVisionSection__img-block'>
						<img
							src='/aboutPage-mission-1.svg'
							alt=''
							className='MissionVisionSection__img'
						/>
					</div>
					<div className='MissionVisionSection__img-block-container-text-block-vision'>
						<h3 className='MissionVisionSection__img-block-container-title'>
							Vision
						</h3>
						<p className='MissionVisionSection__img-block-container-text'>
							Our vision at YourBank is to redefine banking by creating a
							seamless and personalized experience for our customers. We
							envision a future where banking is accessible, transparent, and
							tailored to individual preferences. Through continuous innovation
							and collaboration, we strive to be at the forefront of the
							industry, setting new standards for customer-centric banking. Our
							vision is to be the preferred financial institution, known for our
							unwavering commitment to excellence, trust, and customer
							satisfaction.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MissionVision
