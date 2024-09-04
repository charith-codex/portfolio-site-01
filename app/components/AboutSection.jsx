'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { Content } from 'next/font/google';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Next.js</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Information Technology Degree</li>
        <li>University of Moratuwa</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'Certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Developer - IBM</li>
        <li>Javascript for Beginners - Coursera</li>
        <li>React Developer - Udemy</li>
        <li className="text-teal-400">
          will be Add certifications showing page
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-16 text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-8">
        <Image
          className="rounded-xl hidden sm:block"
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center sm:text-left">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-center sm:text-left">
            I specialize in building custom MERN and Next.js full-stack
            projects, meticulously tailored to meet your specific requirements.
            With a strong focus on delivering high-quality, scalable, and robust
            solutions, I ensure that each project aligns perfectly with your
            business goals, providing you with efficient and future-proof web
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === 'skills'}
              selectTab={() => handleTabChange('skills')}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              active={tab === 'education'}
              selectTab={() => handleTabChange('education')}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              active={tab === 'Certifications'}
              selectTab={() => handleTabChange('Certifications')}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
