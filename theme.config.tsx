import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <Image
      src="/favicon.ico"
      width={32}
      height={32}
      style={{ borderRadius: "9999px" }}
      alt="Image of a stylised emoticon face - the a-eye logo."
      priority
    />
  ),
  project: {
    link: "https://github.com/A-Eye-Project-for-CSC1028/a-eye-info",
  },
  footer: {
    text: "MIT Licence | © Aidan Juma 2024-present",
  },
  gitTimestamp: false,
};

export default config;
