import React from 'react'
import ReactDOM from 'react-dom/client'
import '../css/index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import MainPage from './Pages/MainPage/MainPage.jsx'
import CareerPage from './Pages/CareerPage/CareerPage.jsx'
import AboutPage from './Pages/AboutPage/AboutPage.jsx'
import SignUpModal from './Pages/SignUpModal/SignUpModal.jsx'
import LoginModal from './Pages/LoginModal/LoginModal.jsx'
import SecurityPage from './Pages/SecurityPage/SecurityPage.jsx'
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/career',
				element: <CareerPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/security',
				element: <SecurityPage />,
			},
			{
				path: '/signup',
				element: <SignUpModal />,
			},
			{
				path: '/login',
				element: <LoginModal />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
