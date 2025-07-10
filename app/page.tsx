import Header from "@/components/Header";
import Banner from "@/components/home/Banner";
import Suggest from "@/components/home/Suggest";
import Category from "@/components/home/Category";
import TopSearch from "@/components/home/TopSearch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mt-16">
      <Header />
      <Banner />
      <Category />
      <TopSearch />
      <Suggest />
      <Footer />
    </main>
  );
}
