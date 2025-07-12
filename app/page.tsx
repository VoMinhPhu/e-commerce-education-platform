import Banner from "@/components/home/Banner";
import Suggest from "@/components/home/Suggest";
import Category from "@/components/home/Category";
import TopSearch from "@/components/home/TopSearch";

export default function Home() {
  return (
    <main className="mt-16">
      <Banner />
      <Category />
      <TopSearch />
      <Suggest />
    </main>
  );
}
