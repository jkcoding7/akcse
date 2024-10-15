import { Label } from "@/components/ui/label";
import ProjectsInfo from "../ui/Projects/ProjectsInfo";

export default function ProjectsPage() {
  return (
    <section className="w-full h-full p-3 gap-2">
      <div>
        <Label className="text-2xl">AKCSE McGill Projects</Label>
      </div>
      <div className="flex w-full h-full gap-2 mt-7">
        <ProjectsInfo />
      </div>
    </section>
  );
}
