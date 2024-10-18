import { Label } from "@/components/ui/label";
import ProjectsInfo from "../ui/Projects/ProjectsInfo";
import ProjectsDisplay from "../ui/Projects/ProjectsDisplay";

export default function ProjectsPage() {
  return (
    <section className="w-full h-full p-3 gap-2">
      <div>
        <Label className="text-2xl">AKCSE McGill Projects</Label>
      </div>
      <div className="mt-2">
        <ProjectsDisplay />
      </div>
    </section>
  );
}
