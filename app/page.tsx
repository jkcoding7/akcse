import { Label } from "@/components/ui/label";
import MainLogo from "./ui/Home/mainLogo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex w-full h-full">
      <div className="w-1/2 h-[600px] bg-white rounded-3xl shadow-lg ml-3 mt-2">
        <MainLogo />
      </div>
      <div className="grid w-1/2 h-full text-center m-auto">
        <Label className="text-3xl">Welcome to AKCSE McGill!</Label>
        <div className="w-1/2 text-center m-auto">
          <Label className="text-lg">
            We are ....We are ......We are .....We are .....We are .....We are
            .....We are .....
          </Label>
        </div>
        <Button className="w-1/3 m-auto">Join AKCSE McGill</Button>
      </div>
    </section>
  );
}
