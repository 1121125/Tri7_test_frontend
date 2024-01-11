import Link from 'next/link';
import { fetctData } from '../util/api';

export default async function Footer() {
  const global = await fetctData('global');
  // console.log(global);
  return (
    <div className="w-full">
      <div className="py-7">
        <Link
          href={global.download_app.link}
          className="hover:cursor-pointe w-fit"
        >
          <img src={global.download_app.img} className="mx-auto" />
        </Link>
      </div>

      <div className="bg-blue">
        <div className="max-w-[1250px] mx-auto flex justify-between py-3 flex-wrap gap-4">
          {global.contact.map((el, index) => (
            <div className="flex gap-1 items-center mx-auto" key={index}>
              <img src={el.img} />
              <p className="text-white">
                <b>{el.label}:</b>
              </p>
              <p className="text-yellow text-nowrap">{el.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-navy">
        <div className="max-w-[1250px] mx-auto flex justify-between py-3 flex-wrap gap-4">
          {global.footer.map((el, index) => (
            <Link
              key={index}
              href={el.link}
              className="flex gap-1 items-center hover:cursor-pointer mx-auto"
            >
              <img src={el.img} alt={el.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
