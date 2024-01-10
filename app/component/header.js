import Link from 'next/link';
import { globalApi } from '../util/api';
import Navbar from './navbar';

export default async function Header() {
  const global = await globalApi();

  return (
    <>
      <div className="bg-navy">
        <div className="mx-auto max-w-[1250px] flex justify-between items-center px-4 py-5">
          <img src={global.logo} alt="Logo" />
          <div className="flex gap-2">
            <Link
              href={global.link.login}
              className="bg-orange text-white p-2 rounded-md hover:bg-yellow"
            >
              Login
            </Link>
            <Link
              href={global.link.register}
              className="bg-gray text-white p-2 rounded-md hover:bg-[#BBBBBB]"
            >
              Daftar sekarang
            </Link>
          </div>
        </div>
      </div>
      <nav className="bg-blue">
        <Navbar />
      </nav>
    </>
  );
}
