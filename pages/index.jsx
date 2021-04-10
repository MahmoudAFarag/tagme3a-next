import Head from "next/head";

import Card from "../components/HomePage/Card";
import Hero from "../components/HomePage/Hero";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tagme3a -- Semester 6</title>
      </Head>
      <Hero />
      <div className="subjects">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
