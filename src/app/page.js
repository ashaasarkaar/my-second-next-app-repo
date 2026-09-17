import Counter from "@/components/Counter";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
      <div className="w-10/12 mx-auto my-5 text-center">
        <Header></Header>
        <Counter></Counter>
        
      </div>
  );
}
