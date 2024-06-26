import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "@/app/data";
import RendeModel from "@/components/RendeModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        className="-z-50 fixed top-0 left-0 w-full  h-full object-cover object-center opacity-25"
        priority
        size="100vw"
        alt="Next.js Portfolio website's about page"
      />
      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-16 h-screen">
        <RendeModel>
          <Staff />
        </RendeModel>
      </div>
      <ProjectList projects={projectsData} />
    </>
  );
}
