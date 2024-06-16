import { Metadata } from "next";
import React, { useState } from "react";

type Props = {};
export const metadata: Metadata = {
  title: "About",
  description: "About page of practise",
};
function About({}: Props) {
  return <div>About</div>;
}

export default About;
