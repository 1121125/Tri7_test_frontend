import Link from 'next/link';
import { globalApi } from '../util/api';

export default async function Footer() {
  const global = await globalApi();
  // console.log(global);
  return (
    <div className="w-full">
      <div className="py-7">
        <Link
          href={global.download_app.link}
          className="hover:cursor-pointe mx-auto "
        >
          <img
            src={global.download_app.img}
            className="max-w-[1250px] mx-auto"
          />
        </Link>
      </div>

      <div className="bg-blue">
        <div className="max-w-[1250px] mx-auto flex justify-between py-3">
          {global.contact.map((el, index) => (
            <div className="flex gap-1 items-center" key={index}>
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
        <div className="max-w-[1250px] mx-auto flex justify-between py-3">
          {global.footer.map((el, index) => (
            <Link
              key={index}
              href={el.link}
              className="flex gap-1 items-center hover:cursor-pointer"
            >
              <img src={el.img} alt={el.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
