import React from "react";

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <div
      className="flex items-center justify-center w-full relative rounded-lg
    overflow-hidden p-6 bg-background/20 border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div className="slef-end flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted"></div>
      <p className="text-foreground">{new Date(date).toDateString()}</p>
    </div>
  );
};

export default ProjectLayout;
