import { useParams } from 'react-router';
import { useTutorInfo } from '../features/TutorInfo/useTutorInfo';
import { useContext, useEffect } from 'react';
import { CiBullhorn, CiCalendar, CiCircleInfo, CiStar } from 'react-icons/ci';
import Loader from '../ui/Loader';
import TutorInfoHeader from '../features/Settings/TutorInfoHeader';
import SettingsElement from '../features/Settings/SettingsElement';
import TutorInfoPageHeader from '../features/TutorInfo/TutorInfoPageHeader';
import CalendarContainer from '../features/Settings/CalendarContainer';
import StarRating from '../ui/StarRating';
import TutorRatings from '../features/TutorInfo/TutorRatings';
import MakeTutorOpionion from '../features/TutorInfo/MakeTutorOpionion';
import TutorInfoAboutSession from '../features/TutorInfo/TutorInfoAboutSession';
import { FooterContext } from '../context/FooterContext';

function TutorInfoPage() {
	const { getTutorInfo, isTutorInfoPending, tutorInfo } = useTutorInfo();
	const { id: tutorId } = useParams();
	const { changeColor } = useContext(FooterContext);

	useEffect(() => {
		changeColor('text-gray');
	}, [changeColor]);

	useEffect(() => {
		getTutorInfo({ tutorId: tutorId });
	}, [getTutorInfo, tutorId]);

	return !isTutorInfoPending ? (
		<div className='py-10 max-w-7xl mx-auto w-full'>
			<div className='mb-14'>
				<TutorInfoPageHeader tutorInfo={tutorInfo} />
			</div>
			<div className='max-w-4xl mx-auto px-2 flex flex-col gap-16'>
				<div className='flex flex-col gap-2'>
					<TutorInfoHeader icon={<CiCircleInfo />} label={'Opis'} />
					<SettingsElement onlyRead={true} hoverDisabled={true}>
						{tutorInfo?.description ? tutorInfo?.description : 'Brak'}
					</SettingsElement>
				</div>
				<div className='flex flex-col gap-2'>
					<TutorInfoHeader icon={<CiBullhorn />} label={'Informacje'} />
					<TutorInfoAboutSession tutorInfo={tutorInfo} />
				</div>
				<div>
					<TutorInfoHeader icon={<CiCalendar />} label={'Wolne terminy'} />
					<CalendarContainer
						readOnly={true}
						tutorShedule={tutorInfo?.tutor_schedule_items}
					/>
				</div>
				<div>
					<div className='flex flex-wrap gap-4 items-center justify-between'>
						<TutorInfoHeader icon={<CiStar />} label={'Opinie'} />
						<div className='flex flex-row items-center gap-2 text-lg'>
							<p>{tutorInfo?.avg_rating}</p>
							<StarRating
								size='xl'
								currRating={tutorInfo?.avg_rating}
								readOnly={true}
							/>
						</div>
					</div>
					<MakeTutorOpionion tutorId={tutorId} getTutorInfo={getTutorInfo} />
					<TutorRatings tutorInfo={tutorInfo} />
				</div>
			</div>
		</div>
	) : (
		<Loader />
	);
}

export default TutorInfoPage;
