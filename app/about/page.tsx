import { Label } from "@/components/ui/label";
import CardsSection from "../ui/About/cardsSection";

export default function AboutPage() {
  return (
    <section className="w-full h-full">
      <div className="w-full h-[350px] rounded-b-3xl text-center bg-[#df8b82] p-16">
        <Label className="text-3xl font-bold">What is AKCSE?</Label> <br />
        <Label className="text-lg">
          Learn more about ACKSE and ACKSE McGill
        </Label>
        <div className="mt-16">
          <CardsSection />
        </div>
      </div>
    </section>
  );
}
