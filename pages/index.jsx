import Head from "next/head";

import Card from "../components/HomePage/Card";
import Hero from "../components/HomePage/Hero";

const COURSES_DATA = [
  {
    name: "Medicinal Chemistry",
    slug: "Medicinal",
    lecturer: "Maryan El-Attar",
    hours: 3,
    image: "/images/medicinal.webp",
  },
  {
    name: "Quality Control",
    slug: "Quality",
    lecturer: "Reham Said",
    hours: 3,
    image: "/images/quality.jpg",
  },
  {
    name: "PharmacoKinetics",
    slug: "Kinetics",
    lecturer: "Fatma Ismail",
    hours: 3,
    image: "/images/kinetics.jpg",
  },
  {
    name: "PH-Technology",
    slug: "Techno",
    lecturer: "Kadreya Elkhodery",
    hours: 3,
    image: "/images/techno.jpg",
  },
  {
    name: "Community Pharmacy",
    slug: "Community",
    lecturer: "Sally Galal",
    hours: 3,
    image: "/images/community.png",
  },
  {
    name: "CL-Microbiology",
    slug: "Micro",
    lecturer: "Hoda Omar",
    hours: 3,
    image: "/images/micro.jpg",
  },
  {
    name: "First Aid",
    slug: "Aid",
    lecturer: "Fatma Ismail",
    hours: 2,
    image: "/images/first-aid.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tagme3a -- Semester 6</title>
      </Head>
      <Hero />
      <div className="subjects">
        {COURSES_DATA.map((course) => (
          <Card
            key={course.slug}
            name={course.name}
            slug={course.slug}
            lecturer={course.lecturer}
            hours={course.hours}
            image={course.image}
          />
        ))}
      </div>
    </>
  );
}
