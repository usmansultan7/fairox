import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

import { Comparison } from "@/components/sections/Comparison";
import { OverlayConcept } from "@/components/sections/OverlayConcept";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { Features } from "@/components/sections/Features";
import { Leadership } from "@/components/sections/Leadership";
import { client } from "@/sanity/lib/client";

async function getHeroData() {
  const query = `*[_type == "pageHome"][0]{
    heroHeadline,
    heroSubtext,
    heroImage
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const data = await getHeroData();

  return (
    <>
      <Hero
        headline={data?.heroHeadline}
        subtext={data?.heroSubtext}
        image={data?.heroImage}
      />
      <OverlayConcept />
      <Comparison />

      <Features />
      <BusinessModel />
      <Leadership />
    </>
  );
}
