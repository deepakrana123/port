"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
const AboutDeatils = () => {
  return (
    <section className="py-10 w-full">
      <div className="grid grid-cols-12 gap-8  xs:gap-6  md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-2xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Devendra Rana is a frontend developer known for his blend of
            creativity and technical prowess. With expertise in HTML, CSS, and
            JavaScript, he crafts engaging user interfaces. A lifelong learner,
            he stays updated on the latest trends. Collaborative and innovative,
            Devendra is a visionary in web development.I wield frameworks like
            React.js and Next.js with precision, crafting seamless portals
            (websites) that connect realms (users) across the digital universe
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+
            <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full  xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+
            <sub className="font-semibold text-base">year of experiencess</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            alt="github"
            loading="lazy"
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs/?username=deepakrana123&show_icons=false&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false`}
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            alt="github"
            loading="lazy"
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=deepakrana123&show_icons=false&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false`}
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            alt="github"
            loading="lazy"
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,wasm,nodejs,figma,react,aws,vue,angular,git,firebase,npm,nextjs,netlify,d3,docker,github,html,js,jquery,threejs,supabase,sass,redux,replit,postgres,graphql,mysql,kubernetes,linux,mongodb,tailwind,yarn,vite,vscodess)"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
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
