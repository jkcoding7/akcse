import { Label } from "@/components/ui/label";
import CardsSection from "../ui/About/cardsSection";

export default function AboutPage() {
  return (
    <section className="w-full h-5/6">
      <div className="w-full lg:h-[350px] rounded-b-3xl text-center bg-[#ebc1bd] lg:p-16 p-5 pt-10">
        <Label className="text-3xl font-bold">What is AKCSE?</Label> <br />
        <Label className="text-lg">
          Learn more about AKCSE and ACKSE McGill
        </Label>
        <div className="mt-16">
          <CardsSection />
        </div>
      </div>
    </section>
  );
}
