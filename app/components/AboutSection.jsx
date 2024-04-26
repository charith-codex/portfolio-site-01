"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Javascript</li>
        <li>Tailwind</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Bachelor of Information Technology</li>
        <li>University of Moratuwa</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul>
        <li>Fullstack Developer - IBM</li>
        <li>Javascript for Beginners - Coursera</li>
      </ul>
    )
  
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            repellendus officiis incidunt esse? Neque natus ad similique nihil
            nobis aperiam corporis porro pariatur, asperiores minus vero dolor,
            voluptas harum rerum? Eligendi quasi tempore fugit qui ipsum
            expedita recusandae. Culpa fuga rerum eos illo libero voluptas nulla
            labore.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              active={tab === "Certifications"}
              selectTab={() => handleTabChange("Certifications")}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
