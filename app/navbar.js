'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <div className="mx-auto max-w-[1250px] flex justify-between items-center px-4 py-2 text-white font-semibold">
      <Link
        href={'/'}
        className={`active:text-yellow hover:text-yellow ${
          pathname === '/' ? 'text-yellow' : 'text-white'
        }`}
      >
        Tentang OLE777
      </Link>
      <Link
        href={'/komisi'}
        className={`active:text-yellow hover:text-yellow ${
          pathname === '/komisi' ? 'text-yellow' : 'text-white'
        }`}
      >
        Komisi
      </Link>
      <Link
        href={'/peraturan'}
        className={`active:text-yellow hover:text-yellow ${
          pathname === '/peraturan' ? 'text-yellow' : 'text-white'
        }`}
      >
        Peraturan
      </Link>
      <Link
        href={'./jawaban'}
        className={`active:text-yellow hover:text-yellow ${
          pathname === '/jawaban' ? 'text-yellow' : 'text-white'
        }`}
      >
        Pertanyaan & Jawaban
      </Link>
      <div className="bg-yellow text-navy font-bold px-4 py-1 rounded-md">
        OLE777 Official
      </div>
    </div>
  );
}
