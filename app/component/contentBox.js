'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContentBox({ content }) {
  const [slide, setSlide] = useState(0);
  return (
    <>
      <div className="flex gap-[10px] flex-wrap mt-[80px] max-w-[1200px] mx-auto">
        {content.map((el, index) => (
          <div
            key={index}
            onClick={() => setSlide(index)}
            className={`${
              slide === index ? 'bg-orange' : 'bg-navy'
            } cursor-pointer hover:bg-orange flex justify-center items-center text-white  w-[210px] h-[48px] rounded-ss-lg rounded-tr-lg`}
          >
            {el.title}
          </div>
        ))}
      </div>
      <div className="contentBox mx-auto  bg-white max-w-[1200px] rounded-xl rounded-ss-none">
        <div className="py-7 px-10 transition-all w-fit">
          {content.map(
            (el, index) =>
              slide === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  dangerouslySetInnerHTML={{ __html: el.content }}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}
