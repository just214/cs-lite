import { Layout } from "components/Layout";
import Link from "next/link";
import { BsHurricane } from "react-icons/bs";
import { FaHouseDamage, FaHome, FaBuilding, FaBoxes } from "react-icons/fa";
import { SEO } from "components/SEO";

const highlights = [
  ["Residential Claims", FaHome],
  ["Commercial Claims", FaBuilding],
  ["Daily Adjuster Services", FaHouseDamage],
  ["Catastrophe Adjuster Services", BsHurricane],
  ["Contents Services", FaBoxes],
] as const;

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <p>America&apos;s largest hunger relief organization.</p>
    </Layout>
  );
}
