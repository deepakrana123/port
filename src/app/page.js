"use client"
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RendeModel from "@/components/RendeModel";
import { Wizard } from "@/components/models/Wizard";
import Naviagtion from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={bg}
        alt="background-image"
        className="w-full h-full object-cover object-center opacity-25" fill
      />
      <div className="w-full h-screen">
        <Naviagtion/>
        <RendeModel>
          <Wizard/>
          </RendeModel>
      </div>
    </main>
  );
}
