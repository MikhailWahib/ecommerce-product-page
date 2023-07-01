import BgBox from './BgBox'
import Details from './Details'

interface Props {
	currentColor: string
	setCurrentColor: (value: string) => void
}

const Product = ({ currentColor, setCurrentColor }: Props) => {
	return (
		<div className='relative w-full h-screen flex justify-center items-center'>
			<BgBox currentColor={currentColor} />
			<Details currentColor={currentColor} setCurrentColor={setCurrentColor} />
		</div>
	)
}

export default Product
