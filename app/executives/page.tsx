import ExecutiveMembers from "../ui/Executives/ExecutiveMembers";
import HearderText from "../ui/Executives/HeaderText";

export default function ExecutivesPage() {
  return (
    <section className="p-7">
      <HearderText />
      <div className="mt-10">
        <ExecutiveMembers />
      </div>
    </section>
  );
}
