import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import controllerBlue from '../../assets/controller-blue.png'
import controllerGreen from '../../assets/controller-green.png'
import controllerRed from '../../assets/controller-red.png'
import controllerPurple from '../../assets/controller-purple.png'
import cartIcon from '../../assets/Cart.svg'
import heartIcon from '../../assets/heartIcon.svg'

interface Color {
	name: string
	bg: string
}

type ControllerImgsType = {
	[key: string]: string
}

const controllerImgs: ControllerImgsType = {
	blue: controllerBlue,
	green: controllerGreen,
	red: controllerRed,
	purple: controllerPurple,
}

const colors: Color[] = [
	{
		name: 'blue',
		bg: 'bg-blue',
	},
	{
		name: 'green',
		bg: 'bg-green',
	},
	{
		name: 'red',
		bg: 'bg-red',
	},
	{
		name: 'purple',
		bg: 'bg-purple',
	},
]

const boxAnimationVariants = {
	initial: {
		opacity: 0,
		x: 300,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 1,
			duration: 1,
		},
	},
}

const imgAnimationVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 2,
			duration: 1,
		},
	},
}

interface Props {
	currentColor: string
	setCurrentColor: (value: string) => void
}

const Details = ({ currentColor, setCurrentColor }: Props) => {
	const [selectedColor, setSelectedColor] = useState(currentColor)
	const [currentImg, setCurrentImg] = useState(controllerBlue)

	const handleColorChange = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement

		setCurrentColor(target.value)
		setSelectedColor(target.value)
	}

	useEffect(() => {
		setCurrentImg(controllerImgs[currentColor])
	}, [currentColor])

	return (
		<motion.div
			initial='initial'
			animate='animate'
			variants={boxAnimationVariants}
			className='relative h-[30.25rem] w-[95%] xl:w-[49.375rem] lg:w-[60vw] lg:ml-auto lg:mr-[5vw] rounded-[45px] bg-details-bg backdrop-filter backdrop-blur-[62px] z-50'
		>
			<motion.img
				initial='initial'
				animate='animate'
				variants={imgAnimationVariants}
				src={currentImg}
				alt='Image of a controller'
				className='absolute -right-2 top-14 md:top-20 w-[55vw] lg:right-[34rem] lg:top-0 lg:w-[50vw] -z-50'
			/>
			<div className='lg:w-[75%] lg:h-full pl-5 lg:pl-3 lg:ml-auto'>
				<div>
					<h1 className='text-[3.5rem] md:text-[4.5rem] font-bold leading-[3rem] py-4 md:py-0 md:leading-normal'>
						Dual Sense
					</h1>
					<p className='text-base md:text-[1.4375rem] font-normal'>
						Wireless Controller
					</p>
				</div>
				<p className='my-[1.7rem]'>$40.00</p>
				<div className='flex'>
					<p className='text-[0.9375rem] font-medium'>Colors : </p>
					<div className='flex items-center gap-3 ml-4'>
						{colors.map((color, i) => {
							return (
								<button
									key={i}
									value={color.name}
									className={`rounded-full h-4 w-4 transition ${color.bg} ${
										selectedColor === color.name && 'transform scale-125'
									}`}
									onClick={handleColorChange}
								></button>
							)
						})}
					</div>
				</div>
				<p className='w-full md:w-[23rem] lg:w-[25.5rem] pr-5 md:h-[6.5rem] text-[0.875rem] font-medium leading-[163.5%] mt-10 md:mt-[1.5rem] bg-black/20 rounded md:bg-transparent'>
					Wireless Gaming Controller, Joystick Gamepad with Dual-Vibration PC
					Game Controller Compatible with PS5, Switch, Windows 10/8/7 PC,
					Laptop, TV Box, Android Mobile Phones, 6.5 ft USB Cable
				</p>
				<div className='flex gap-5 md:gap-[3.3rem] mt-[1.5rem] text-sm'>
					<button
						className={`flex justify-center items-center w-36 md:w-[11.5625rem] h-[2.625rem] rounded-[1.75rem] bg-${currentColor} border-[1px] border-white/25 font-semibold uppercase transition duration-500 active:scale-95`}
					>
						<img src={cartIcon} alt='Cart Icon' className='mr-3 w-3' />
						Add to Cart
					</button>
					<button className='flex justify-center items-center w-36 md:w-[12rem] h-[2.625rem] rounded-[1.75rem] font-semibold uppercase transition duration-500 hover:opacity-50'>
						<img src={heartIcon} alt='Cart Icon' className='md:mr-3 w-3' />
						Add to Favorites
					</button>
				</div>
			</div>
		</motion.div>
	)
}

export default Details
