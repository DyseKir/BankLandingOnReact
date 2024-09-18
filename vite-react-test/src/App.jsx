import './App.scss'
// import HeaderComponent from './Pages/HeaderComponent/HeaderComponent.jsx'
import HeaderComponentUserUi from './Pages/HeaderComponent/HeaderComponentUserUi.jsx'
import FooterComponent from './Pages/FooterComponent/FooterComponent.jsx'
import ScrollToTop from './Pages/ScrollOnTopComponent.jsx'
import { Outlet } from 'react-router-dom'

function App() {
	return (
		<>
			<ScrollToTop />
			{/* <HeaderComponent /> */}
			<HeaderComponentUserUi />
			<Outlet />
			<FooterComponent />
		</>
	)
}

export default App
