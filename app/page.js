import "./page.css";
import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}
