import './App.scss'
import HeaderComponentUserUi from './Pages/HeaderComponent/HeaderComponentUserUi.jsx'
import FooterComponent from './Pages/FooterComponent/FooterComponent.jsx'
import ScrollToTop from './Pages/ScrollOnTopComponent.jsx'
import { Outlet } from 'react-router-dom'
import { CurrencyProvider } from './CurrencyContext'
function App() {
	return (
		<CurrencyProvider>
			<ScrollToTop />
			<HeaderComponentUserUi />
			<Outlet />
			<FooterComponent />
		</CurrencyProvider>
	)
}

export default App
