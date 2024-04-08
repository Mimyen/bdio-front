function HeaderText() {
	return (
		<div className="container flex flex-col w-full z-10">
			<h3 className=" px-4 text-2xl font-semibold text-mainBlue  md:text-3xl md:mt-6 md:p-8 ">
				Zacznij naukę!
			</h3>
			<h1 className=" text-5xl p-5 text-right font-bold  text-mainBlue  md:text-5xl md:text-left md:px-8  ">
				Z naszymi <span className="text-mainSalmon">Ekspertami</span>
			</h1>
			<p className="p-7  text-sm w-full text-left leading-7 backdrop:text-mainBlue min-[480px]:text-base md:text-base md:w-2/3">
				Buduj swoje umiejętności światowej klasy uniwersytety oraz firmy.Możesz
				uczyć się z dowolnego miejsca
			</p>
		</div>
	);
}

export default HeaderText;
