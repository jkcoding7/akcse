import MainLogo from "./ui/Home/mainLogo";
import MainText from "./ui/Home/mainText";

export default function Home() {
  return (
    <section className="lg:flex w-full h-full">
      <div className="w-full lg:w-1/2 lg:h-[770px] xl:h-[790px] bg-white rounded-3xl shadow-lg lg:ml-3 mt-2">
        <MainLogo />
      </div>
      <div className="flex w-full lg:w-1/2 h-full mt-auto">
        <MainText />
      </div>
    </section>
  );
}
