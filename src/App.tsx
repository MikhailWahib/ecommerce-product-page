import Product from './components/Product'
// import bgImg from './assets/bg-controller.png'
import { useState } from 'react'

function App() {
	const [currentColor, setCurrentColor] = useState('blue')

	return (
		<main className='relative overflow-hidden min-h-screen w-full bg-background text-typo'>
			{/* BACKGROUND GLOWS */}
			<div
				className={`absolute -top-[310px] -left-[252px] bg-${currentColor} h-[667px] w-[667px] rounded-full blur-3xl opacity-75 transition`}
			></div>
			<div
				className={`absolute -top-[151px] left-[577px] bg-${currentColor} h-[349px] w-[349px] rounded-full blur-3xl opacity-75 transition`}
			></div>
			<div
				className={`absolute top-[475px] -right-[333px] bg-${currentColor} h-[667px] w-[667px] rounded-full blur-3xl opacity-75 z-10 transition`}
			></div>

			{/* BG IMG */}
			{/* <div className={`hidden lg:block absolute -right-16 -bottom-10 z-0`}>
				<img src={bgImg} alt='Image of a controller' />
			</div> */}

			<Product currentColor={currentColor} setCurrentColor={setCurrentColor} />
		</main>
	)
}

export default App
