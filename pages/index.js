import Header from "../components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className=" bg-black min-h-screen">
        <Header />
      </div>
    </main>
  );
}
