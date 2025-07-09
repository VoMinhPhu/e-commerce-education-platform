import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-16">
      <Header />
      <Banner />
      <Category />
      hello world
    </div>
  );
}
