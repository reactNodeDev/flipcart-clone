import React from "react";
import {  AnimationControls, TargetAndTransition, VariantLabels, motion } from "framer-motion";

interface IAnimatedSymbol {
    animate : boolean | TargetAndTransition | VariantLabels | AnimationControls | undefined;
    symbol : React.ReactNode
}

const AnimatedSymbol = ({animate, symbol}:IAnimatedSymbol) => {
  return (
    <motion.span
      animate={animate}
      transition={{
        duration: 0.1,
        type: "tween",
      }}
    >
      {symbol}
    </motion.span>
  );
};

export default AnimatedSymbol;
