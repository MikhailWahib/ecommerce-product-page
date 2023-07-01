import { motion } from 'framer-motion'

const boxAnimationVariants = {
	initial: {
		opacity: 0,
		x: -200,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
}

interface Props {
	currentColor: string
}

const BlueBox = ({ currentColor }: Props) => {
	return (
		<motion.div
			initial='initial'
			animate='animate'
			variants={boxAnimationVariants}
			className={`absolute lg:left-[147px] flex justify-center items-center w-[95%] overflow-hidden lg:w-[37.3125rem] h-[40.5rem] bg-${currentColor} rounded-[45px]`}
		>
			<div className='relative flex flex-col gap-[4vw] lg:gap-[0.06rem] transform -rotate-90'>
				<div className='flex justify-center items-center h-[6rem] sm:h-[9.375rem] w-[38.875rem] text-[7.5rem] font-black opacity-30'>
					<p>GAMING</p>
				</div>
				<div className='flex justify-center items-center h-[6rem] sm:h-[9.375rem] w-[38.875rem] text-[7.5rem] font-black opacity-50'>
					<p>GAMING</p>
				</div>
				<div className='flex justify-center items-center h-[6rem] sm:h-[9.375rem] w-[38.875rem] text-[7.5rem] font-black opacity-60'>
					<p>GAMING</p>
				</div>
				<div className='flex justify-center items-center h-[6rem] sm:h-[9.375rem] w-[38.875rem] text-[7.5rem] font-black opacity-80'>
					<p>GAMING</p>
				</div>
			</div>
		</motion.div>
	)
}

export default BlueBox
