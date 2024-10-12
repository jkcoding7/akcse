import Timeline from "../ui/Activities/Timeline";

export const recentEvent = {
  event: "AKCSE Orientation Night",
  date: "September 20th, 2024",
  purpose:
    "The purpose of an orientation is to introduce new members or students to an organization. It helps individuals understand key policies, procedures, expectations, and the resources available to them. Orientation involves familiarizing participants with the physical layout, organizational culture, team dynamics, and specific roles or responsibilities. It’s also an opportunity for networking and getting answers to questions, which helps individuals transition smoothly into their new roles or settings, ultimately fostering a positive, supportive, and informed experience.",
};

export const upcomingEvents = {
  event: "AKCSE Ideathon",
  date: "November --, 2024",
  purpose:
    "The purpose of an orientation is to introduce new members or students to an organization. It helps individuals understand key policies, procedures, expectations, and the resources available to them. Orientation involves familiarizing participants with the physical layout, organizational culture, team dynamics, and specific roles or responsibilities. It’s also an opportunity for networking and getting answers to questions, which helps individuals transition smoothly into their new roles or settings, ultimately fostering a positive, supportive, and informed experience.",
};

export default function ActivitiesPage() {
  return (
    <section className="w-full h-full">
      <Timeline />
    </section>
  );
}
