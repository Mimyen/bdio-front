import { PiNotebookLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";

function HeaderButtonIcon() {
	return (
		<>
			<div className=" flex flex-col justify-center items-center w-11/12 mb-12 p-6 gap-y-6 min-[375px]:gap-y-8 min-[535px]:flex-row min-[535px]:gap-x-12 sm:p-8 md:flex-row md:mb-0 md:gap-x-10  ">
				<button className="flex flex-col justify-center items-center w-full h-20   shadow-mainBlue min-[481px]:h-24 min-[535px]:h-32 min-[535px]:w-32 sm:h-40 md:h-36 md:w-24 lg:w-28 bg-mainPurple hover:bg-mainPurpleHover px-4 py-3 shadow-md rounded-xl text-white">
					<div className="rounded-full bg-white flex justify-center items-center border border-mainPurple mb-2 h-8 w-8  ">
						<div className="text-mainPurple text-xl">
							<PiNotebookLight />
						</div>
					</div>
					<p className="text-center text-xs">Wybierz przedmiot</p>
				</button>

				<button className="flex flex-col justify-center items-center w-full h-20   shadow-mainBlue min-[481px]:h-24 min-[535px]:h-32 min-[535px]:w-32 sm:h-40 md:h-36 md:w-24 lg:w-28 bg-mainPurple hover:bg-mainPurpleHover px-4 py-3 shadow-md rounded-xl text-white">
					<div className="rounded-full bg-white flex justify-center items-center border border-mainPurple mb-2 h-8 w-8  ">
						<div className="text-mainPurple text-xl">
							<CiUser />
						</div>
					</div>
					<p className="text-center text-xs">Wybierz korepetytora</p>
				</button>

				<button className="flex flex-col justify-center items-center w-full h-20   shadow-mainBlue min-[481px]:h-24 min-[535px]:h-32 min-[535px]:w-32 sm:h-40 md:h-36 md:w-24 lg:w-28 bg-mainPurple hover:bg-mainPurpleHover px-4 py-3 shadow-md rounded-xl text-white">
					<div className="rounded-full bg-white flex justify-center items-center border border-mainPurple mb-2 h-8 w-8  ">
						<div className="text-mainPurple text-xl">
							<SlEarphonesAlt />
						</div>
					</div>
					<p className="text-center text-xs">Skontaktuj się z nim</p>
				</button>
			</div>
		</>
	);
}

export default HeaderButtonIcon;

{
	/* <div className="flex flex-col justify-center items-center mb-12 p-6 gap-y-6 min-[480px]:flex-row min-[480px]:justify-around min-[480px]:gap-x-10 min-[480px]:">
	<Button className="flex flex-col justify-center items-center w-full h-20 m-1  min-[480px]:h-full  shadow-mainBlue  ">
		<div className="rounded-full bg-white flex justify-center items-center border border-mainPurple mb-2 h-8 w-8  ">
			<div className="text-mainPurple text-xl">
				<PiNotebookLight />
			</div>
		</div>
		<p className="text-center text-xs">Wybierz przedmiot</p>
	</Button>

	<Button className="flex flex-col justify-center items-center w-full h-20 m-1  min-[480px]:h-full shadow-mainBlue ">
		<div className="rounded-full bg-white flex justify-center items-center border border-mainPurple mb-2 h-8 w-8  ">
			<div className="text-mainPurple text-xl">
				<CiUser />
			</div>
		</div>
		<p className="text-center text-xs">Wybierz korepetytora</p>
	</Button>

	<Button className="flex flex-col justify-center items-center w-full h-20   shadow-mainBlue min-[480px]:h-full  ">
		<div className="rounded-full bg-white flex justify-center items-center border border-mainPurple mb-2 h-8 w-8  ">
			<div className="text-mainPurple text-xl">
				<SlEarphonesAlt />
			</div>
		</div>
		<p className="text-center text-xs">Skontaktuj się z nim</p>
	</Button>
</div>; */
}