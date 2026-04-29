"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsetFor = (dir: Direction, distance: number) => {
  switch (dir) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  style?: CSSProperties;
  amount?: number;
};

export function Reveal({
  children,
  direction = "up",
  distance = 40,
  delay = 0,
  duration = 0.6,
  className,
  as = "div",
  style,
  amount = 0.2,
}: RevealProps) {
  const reduced = useReducedMotion();
  const offset = reduced ? { x: 0, y: 0 } : offsetFor(direction, distance);
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduced ? 0.01 : duration, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  as?: "div" | "section" | "ul" | "ol";
};

export function Stagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  amount = 0.15,
  as = "div",
}: StaggerProps) {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduced ? 0 : delayChildren,
        staggerChildren: reduced ? 0 : staggerChildren,
      },
    },
  };
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
  as?: "div" | "li" | "span" | "article";
};

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 30,
  duration = 0.5,
  as = "div",
}: StaggerItemProps) {
  const reduced = useReducedMotion();
  const offset = reduced ? { x: 0, y: 0 } : offsetFor(direction, distance);
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduced ? 0.01 : duration, ease: "easeOut" },
    },
  };
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}

// Subtle hover-lift wrapper for cards. Use sparingly; CSS transitions still apply.
export function HoverLift({
  children,
  className,
  scale = 1.02,
  y = -4,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
  y?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduced ? undefined : { scale, y }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
