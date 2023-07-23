import { Inter } from "next/font/google";
import AboutPage from "../components/about";
import HomeLayout from "../layouts/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <HomeLayout>
      <AboutPage />
    </HomeLayout>
  );
}
