"use client";

import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    function getScreenSize() {
      return window.innerWidth;
    }
    function handleReszie() {
      setScreenSize(getScreenSize());
    }
    handleReszie();

    window.addEventListener("resize", handleReszie);
    return () => window.removeEventListener("resize", handleReszie);
  }, []);
  return screenSize;
};

export default useScreenSize;
