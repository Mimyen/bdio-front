import { CiMail } from 'react-icons/ci';
import Button from '../../ui/Inputs/Button';
import TutorHeader from '../../ui/TutorHeader';

function TutorInfoPageHeader({ tutorInfo }) {
	return (
		<div className='flex flex-col items-center justify-center md:flex-row md:justify-between px-5 gap-5 max-w-5xl mx-auto'>
			<TutorHeader tutorInfo={tutorInfo} />
			<Button
				className={'flex items-center gap-2'}
				onClick={() => console.log('napisz wiadomośc')}
			>
				<span className='text-2xl'>
					<CiMail />
				</span>
				Napisz wiadomość
			</Button>
		</div>
	);
}

export default TutorInfoPageHeader;
