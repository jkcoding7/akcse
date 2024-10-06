import MainLogo from "./ui/Home/mainLogo";
import MainText from "./ui/Home/mainText";

export default function Home() {
  return (
    <section className="flex w-full h-fit">
      <div className="w-1/2 h-[800px] bg-white rounded-3xl shadow-lg ml-3 mt-2">
        <MainLogo />
      </div>
      <MainText />
    </section>
  );
}
