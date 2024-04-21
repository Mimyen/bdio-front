import { WiStars } from "react-icons/wi";
import { CiCircleCheck } from "react-icons/ci";
import { PiStudentThin } from "react-icons/pi";
import { PiRocketLaunchThin } from "react-icons/pi";
import { PiSmileyWinkThin } from "react-icons/pi";
import { CiMedal } from "react-icons/ci";

function AboutUsText() {
	return (
		<div className="flex flex-col justify-center items-center ">
			<h2 className="uppercase text-mainBlue font-semibold mt-4 text-2xl ">
				O nas
			</h2>
			<hr className="h-[2px] w-4/5 m-6  bg-lighGray border-0 rounded " />
			<div className="p-6 mt-4 text-sm text-center leading-relaxed text-mainBlue">
				<p className="w-full ">
					Jesteśmy zespołem doświadczonych korepetytorów, {""}
					<span className="text-mainSalmon font-semibold">
						gotowych Ci pomóc
					</span>{" "}
					{""}w osiągnięciu sukcesu edukacyjnego.
				</p>

				<div className="flex flex-row justify-center items-center mt-10 text-4xl gap-10 text-mainPurple ">
					<PiStudentThin />
					<CiCircleCheck />
					<WiStars />
				</div>

				<p className=" mt-10 w-full text-center">
					Nasi korepetytorzy posiadają{" "}
					<span className="text-mainSalmon font-semibold">
						bogate doświadczenie w nauczaniu
					</span>{" "}
					oraz ukończą edukację na renomowanych uniwersytetach. Ich wiedza i
					umiejętności są atutem, który przekłada się na skuteczność nauki.
				</p>
			</div>
			<hr className="h-[2px] w-4/5 m-6  bg-lighGray border-0 rounded " />

			<div className="flex flex-col items-end h-full w-full ">
				<h3 className="py-2 pl-10 px-4 text-center uppercase rounded-l-lg bg-mainPurple text-white font-semibold mt-4 text-xl ">
					Jak to działa?
				</h3>
			</div>

			<div className="text-mainBlue text-sm mt-12 p-4">
				<ol className="list-outside list-decimal pl-9 marker:font-bold">
					<li className="pb-4">
						<h5 className="font-bold tracking-tight text-base ">
							Znajdź swojego korepetytora.
						</h5>
						<p className="text-xs leading-relaxed mt-4">
							{" "}
							Przeglądaj profile{" "}
							<span className="text-mainSalmon font-semibold">
								naszych korepetytorów{" "}
							</span>{" "}
							i <span className="text-mainSalmon font-semibold">wybierz</span>{" "}
							tego, który najlepiej odpowiada Twoim potrzebom i preferencjom.
						</p>
					</li>
					<li className="pb-4">
						<h5 className="font-bold tracking-tight text-base ">
							Zaplanuj lekcje.
						</h5>
						<p className="text-xs leading-relaxed mt-4">
							Umów się na lekcje z wybranym korepetytorem{" "}
							<span className="text-mainSalmon font-semibold">
								w dogodnym dla Ciebie terminie
							</span>
							. Możesz nawet korzystać z lekcji online, co daje Ci elastyczność
							i wygodę.
						</p>
					</li>
					<li>
						<h5 className="font-bold tracking-tight text-base ">
							Komunikacja przez chat
						</h5>
						<p className="text-xs leading-relaxed mt-4">
							Nasza platforma umożliwia łatwą komunikację z korepetytorem {""}
							<span className="text-mainSalmon font-semibold">
								poprzez chat
							</span>
							. Możesz zadawać pytania, uzgadniać szczegóły lekcji oraz dzielić
							się swoimi postępami w nauce.
						</p>
					</li>
				</ol>
			</div>
			<hr className="h-[2px] w-4/5 m-6  bg-lighGray border-0 rounded " />

			<div className="flex flex-col items-start h-full w-full ">
				<h3 className="py-2 pr-10 px-4 text-center uppercase rounded-r-lg bg-mainPurple text-white font-semibold mt-4 text-xl ">
					Nasza misja
				</h3>
			</div>
			<div className="p-6  text-sm text-center leading-relaxed text-mainBlue">
				<p className=" mt-8 w-full text-center">
					Dążymy do tego, aby{" "}
					<span className="text-mainSalmon font-semibold">każdy uczeń</span>{" "}
					miał możliwość osiągnięcia swoich celów edukacyjnych.
				</p>

				<div className="flex flex-row justify-center items-center mt-10 text-4xl gap-10 text-mainPurple ">
					<PiRocketLaunchThin />
					<CiMedal />
					<PiSmileyWinkThin />
				</div>

				<p className=" mt-8 w-full text-center">
					Poprzez indywidualne podejście, wysokiej jakości nauczanie i wygodne
					narzędzia komunikacyjne{" "}
					<span className="text-mainSalmon font-semibold">
						staramy się zapewnić optymalne warunki
					</span>{" "}
					do nauki dla każdego ucznia.
				</p>
			</div>
		</div>
	);
}

export default AboutUsText;