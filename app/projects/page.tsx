import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <section className="grid w-full h-full p-3 gap-2">
      <div>
        <Label className="text-2xl">Projects</Label>
      </div>
      <div className="flex w-full h-full gap-2">
        <div className="w-1/2 h-full">
          <Label className="text-lg">AKCSE McGill Website</Label> <br />
          <Image
            src="/projects/akcseWebsite/image1.jpg"
            width={400}
            height={400}
            alt="AKCSE Website"
            className="w-full h-96 rounded-lg border shadow-lg p-1"
          />
          <Label>Members: </Label> <br />
          <Label>Purpose: </Label> <br />
          <Label>Achievements: </Label> <br />
          <Label>Description: </Label> <br />
        </div>
        <div className="w-1/2 h-full">
          <Label className="text-lg">AKCSE McGill Website</Label> <br />
          <Image
            src="/projects/akcseWebsite/image1.jpg"
            width={400}
            height={400}
            alt="AKCSE Website"
            className="w-full h-96 rounded-lg border shadow-lg p-1"
          />
          <Label>Members: </Label> <br />
          <Label>Purpose: </Label> <br />
          <Label>Achievements: </Label> <br />
          <Label>Description: </Label> <br />
        </div>
      </div>
    </section>
  );
}
