import MainLogo from "./ui/Home/mainLogo";
import MainText from "./ui/Home/mainText";

export default function Home() {
  return (
    <section className="lg:flex w-full h-fit">
      <div className="w-full lg:w-1/2 h-[500px] lg:h-[800px] bg-white rounded-3xl shadow-lg lg:ml-3 mt-2">
        <MainLogo />
      </div>
      <MainText />
    </section>
  );
}
