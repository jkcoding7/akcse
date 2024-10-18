import { Label } from "@/components/ui/label";
import Timeline from "../ui/Activities/Timeline";
import MobileTimeline from "../ui/Activities/MobileTimeline";

export default function ActivitiesPage() {
  return (
    <section className="w-full h-full">
      <div className="flex w-full pt-7 pl-11">
        <Label className="w-full text-3xl ml-auto">
          2024 - 2025 Main Events Timeline
        </Label>
      </div>
      <div className="hidden lg:block">
        <Timeline />
      </div>
      <div className="black lg:hidden">
        <MobileTimeline />
      </div>
    </section>
  );
}
