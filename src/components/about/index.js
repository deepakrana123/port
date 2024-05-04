import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};
const AboutDeatils = () => {
  return (
    <section className="py-10 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className="col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light">
            Devendra Rana is a frontend developer known for his blend of
            creativity and technical prowess. With expertise in HTML, CSS, and
            JavaScript, he crafts engaging user interfaces. A lifelong learner,
            he stays updated on the latest trends. Collaborative and innovative,
            Devendra is a visionary in web development
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            25+
            <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            4+
            <sub className="font-semibold text-base">year of experiencess</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-4 !p-0">
          <img
            alt="github"
            loading="lazy"
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=deepakrana123&show_icons=false&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
          />
        </ItemLayout>
        <ItemLayout className="col-span-8 !p-0">
          <img
            alt="github"
            loading="lazy"
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=deepakrana123&show_icons=false&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full !p-0">
          <img
            alt="github"
            loading="lazy"
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,wasm,nodejs,figma,react,aws,vue,angular,git,firebase,npm,nextjs,netlify,d3,docker,github,html,js,jquery,threejs,supabase,sass,redux,replit,postgres,graphql,mysql,kubernetes,linux,mongodb,tailwind,yarn,vite,vscodess)"
          />
        </ItemLayout>
        <ItemLayout className="col-span-6 !p-0">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=deepakrana123&theme=transparent&hide_border=true&border_radius=&border=E5EB1B"
              alt="GitHub Streak"
              loading="lazy"
              className="w-full h-auto"
            />
          
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDeatils;
