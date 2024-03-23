import { useForm } from 'react-hook-form';
import { useUserWidth } from '../hooks/useUserWidth';
import BackgroundContainer from '../ui/BackgroundContainer';
import TextInput from '../features/Auth/TextInput';
import {
	validateEmail,
	validatePassword,
	validateRepeatPassword,
} from '../utils/isInputCorrect';

import Button from '../ui/Inputs/Button';
import SelectInput from '../features/Auth/SelectInput';

function RegisterPage() {
	const width = useUserWidth();
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			{width >= 640 && <BackgroundContainer />}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='relative flex justify-center items-center md:py-10'
			>
				<div className='sm:w-[400px] md:w-[500px] px-0 w-5/6 sm400:w-2/3 sm:px-10 pb-10 pt-5 bg-white sm:shadow-myShadow shadow-shadowBlack rounded-xl gap-8 flex flex-col items-center'>
					<div className='relative'>
						<p className='pb-5 text-2xl mt-4'>Rejestracja</p>
						<div className='absolute bottom-[21.5px] left-0 w-[28px] h-[2px] bg-mainPurple rounded-full'></div>
						<div className='absolute bottom-[21.5px] left-11 w-[85px] h-[2px] bg-mainPurple rounded-full'></div>
						<div className='absolute bottom-[21.5px] left-36 w-[16px] h-[2px] bg-mainPurple rounded-full'></div>
					</div>

					<SelectInput register={register} />

					<TextInput
						register={register}
						error={errors?.firstName?.message}
						label={'Imię'}
						field={'firstName'}
						type={'text'}
					/>

					<TextInput
						register={register}
						error={errors?.lastName?.message}
						label={'Nazwisko'}
						field={'lastName'}
						type={'text'}
					/>

					<TextInput
						register={register}
						error={errors?.email?.message}
						label={'E-mail'}
						field={'email'}
						type={'email'}
						validateFunction={() => validateEmail(getValues().email)}
					/>

					<TextInput
						register={register}
						error={errors?.password?.message}
						label={'Hasło'}
						field={'password'}
						type={'password'}
						validateFunction={() => validatePassword(getValues().password)}
						info={
							'Hasło powinno składać sie z conajmniej 8 znaków (mała litery, duża litera, cyfra, znak specjalny)'
						}
					/>

					<TextInput
						register={register}
						error={errors?.repeatPassword?.message}
						label={'Powtórz Hasło'}
						field={'repeatPassword'}
						type={'password'}
						validateFunction={() =>
							validateRepeatPassword(
								getValues().password,
								getValues().repeatPassword
							)
						}
					/>

					<div className='mt-5'>
						<Button type='submit'>Zarejestruj się</Button>
					</div>
				</div>
			</form>
		</>
	);
}

export default RegisterPage;
