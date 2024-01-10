'use client';

import { useState } from 'react';

export default function ContentBox({ content }) {
  const [slide, setSlide] = useState(0);
  return (
    <div className="contentBox relative mx-auto mt-[90px] bg-white max-w-[1200px] rounded-xl rounded-ss-none">
      <div className="absolute top-[-48px] flex gap-[10px]">
        {content.map((el, index) => (
          <div
            key={index}
            onClick={() => setSlide(index)}
            className={`${
              slide === index ? 'bg-orange' : 'bg-navy'
            } cursor-pointer flex justify-center items-center text-white  w-[210px] h-[48px] rounded-ss-lg rounded-tr-lg`}
          >
            {el.title}
          </div>
        ))}
      </div>

      <div className="p-5 px-10 transition-all w-fit">
        <div dangerouslySetInnerHTML={{ __html: content[slide].content }} />
      </div>
    </div>
  );
}
