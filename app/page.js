import Link from 'next/link';
import { homeApi } from './util/api';

export default async function Home() {
  const home = await homeApi();
  return (
    <div className="">
      {home.slideshow.map((el, index) => (
        <Link href={el.link} key={index}>
          <img src={el.img} alt={el.name} className="mx-auto" />
        </Link>
      ))}

      <div className="flex justify-between gap-10 overflow-hidden py-10 max-w-[1250px] mx-auto flex-wrap px-2">
        {home.offers.map((el, index) => (
          <img
            src={el.img}
            className="rounded-lg w-[384px] mx-auto"
            key={index}
          />
        ))}
      </div>
      <div className="bg-[#000]/5">
        <div
          dangerouslySetInnerHTML={{ __html: home.content }}
          className="py-10 max-w-[1250px] mx-auto px-4"
        />
        <div className="flex justify-between mx-auto max-w-[1250px] gap-[50px] py-10 px-4 flex-wrap">
          {home.services.map((el, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center flex-1 mx-auto"
            >
              <img src={el.img} />
              <p className="text-navy font-extrabold text-2xl text-center">
                {el.title}
              </p>
              <p className="text-[#6B6B6B] text-center">{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
