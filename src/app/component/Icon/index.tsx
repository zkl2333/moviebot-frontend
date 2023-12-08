"use client";
import { Icon } from "@iconify/react";

export default function IconWapper({ icon, ...rest }) {
  return <Icon icon={icon} {...rest} />;
}
