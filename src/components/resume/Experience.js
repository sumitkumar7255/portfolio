import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Java Coding Internship"
            subTitle="Suven Consultants & Technology Pvt. Ltd"
            result="WFH"
            des="Successful Java internship with practical projects (Consumer Loan Assistant, Home Inventory Manager) demonstrating expertise in Java programming and problem-solving."
          />
          <ResumeCard
            title="Machine Learning"
            subTitle="Summer Internship"
            result="Engineer Core - IIIT Allahabad"
            des="Credit card analysis using Python and machine learning to detect fraud, predict behavior, and mitigate risks for financial institutions."
          />
          <ResumeCard
            title="Core Java"
            subTitle="Summer Training "
            result="IIT Kanpur"
            des="Completed intensive 4-week Core Java Training at IIT Kanpur, gaining expertise in programming concepts, data handling, and algorithm implementation."
          />
        
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]"></p> */}
          <h2 className="text-4xl font-bold">Training & Certification</h2>
        </div>
        <div className="mt-14 w-[110%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Cyber Security Essentials"
            subTitle="Cisco Networking Academy Training"
            result="CISCO"
            des="
            Completed cybersecurity training at Cisco Networking Academy, gaining knowledge of cybercriminal tactics and principles of data protection."
          />
          <ResumeCard
            title="Programming With Python"
            subTitle="Training"
            result="Internshala"
            des="Successfully completed Python training program with Internshala, gaining practical experience and enhancing proficiency in Python programming."
          />
          <ResumeCard
            title="Leadership And Team Effectiveness"
            subTitle="Course"
            result="NPTEL"
            des="Successfully completed Leadership And Team Effectiveness course from NPTEL, gaining valuable insights and skills in leadership and effective teamwork."
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
