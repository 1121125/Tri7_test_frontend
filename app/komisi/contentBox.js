'use client';

import { useState } from 'react';

export default function ContentBox({ komisi }) {
  const [slide, setSlide] = useState('detail');
  return (
    <div className="contentBox relative mx-auto mt-[90px] bg-white max-w-[1200px] rounded-xl rounded-ss-none">
      <div
        onClick={() => setSlide('detail')}
        className={`${
          slide === 'detail' ? 'bg-orange' : 'bg-navy'
        } absolute cursor-pointer flex justify-center items-center text-white  w-[210px] h-[48px] top-[-48px] rounded-ss-lg rounded-tr-lg`}
      >
        {komisi[0].title}
      </div>
      <div
        onClick={() => setSlide('syarat')}
        className={`${
          slide === 'syarat' ? 'bg-orange' : 'bg-navy'
        } absolute cursor-pointer flex justify-center items-center text-white bg-navy w-[210px] h-[48px] top-[-48px] left-[220px] rounded-ss-lg rounded-tr-lg`}
      >
        {komisi[1].title}
      </div>
      <div className="p-5 px-10 transition-all w-fit">
        {slide === 'detail' ? (
          <div dangerouslySetInnerHTML={{ __html: komisi[0].content }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: komisi[1].content }} />
        )}
      </div>
    </div>
  );
}
