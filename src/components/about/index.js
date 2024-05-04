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
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
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
      </div>
    </section>
  );
};

export default AboutDeatils;
