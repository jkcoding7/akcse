import { Label } from "@/components/ui/label";
import Timeline from "../ui/Activities/Timeline";

export default function ActivitiesPage() {
  return (
    <section className="w-full h-full">
      <div className="flex w-full pt-7 pl-11">
        <Label className="w-full text-3xl ml-auto">
          AKCSE McGill Events Timeline
        </Label>
      </div>
      <Timeline />
    </section>
  );
}
