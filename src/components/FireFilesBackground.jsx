"use client";
import React, { useEffect, useState } from "react";

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random()*100}%`,
  left: `${Math.random()*100}%`,
  animationDuration: `${Math.random()*5 + 5}s`,
});

const FireFilesBackground = () => {
  const [fireflie, setFireFile] = useState([]);
  useEffect(() => {
    const addFireflyPeriodcally = () => {
      const newFirefly = createFirefly();
      setFireFile((curr) => 
        [...curr.slice(-14), newFirefly]
      );
    };
    const interval = setInterval(addFireflyPeriodcally, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireflie?.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full bg-accent w-[10px] h-[10px] bg-firefly-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite
              alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFilesBackground;
