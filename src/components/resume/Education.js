import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-[825px] h-[1000px] border-l-[6px] cursor-pointer border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science And Engineering"
            subTitle="Bihar Engineering University (2019 - 2023)"
            result="8.23/10"
            des="
                  The B.Tech in Computer Science and Engineering program at Bihar Engineering University offers a comprehensive curriculum covering computer systems, algorithms, programming languages, and software development. Students gain practical skills and industry-relevant knowledge to pursue successful careers in computer science."        
          />
          <ResumeCard
            title="Intermediate - Science (PCM)"
            subTitle="R.P.S College Danapur, Patna(2016 - 2018)  "
            result="55.4% (BSEB) "
            des="Higher education is tertiary education program equips students with a solid foundation in scientific principles and problem-solving skills. Upon completion, students can pursue further studies or embark on careers in various scientific and technological fields."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Shivdhari Sukhdev High School Mouzmabad (2015 - 2016)"
            result="70.4% (BSEB) "
            des="The Secondary High School in BSEB Patna provides a well-rounded education for students. With a focus on academic excellence and personal growth, the school offers a diverse range of subjects and extracurricular activities. Dedicated teachers and a supportive environment foster students' overall development, preparing them for future endeavors and success."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education