'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ContactModal from './contactModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(pathname);
  return (
    <div className="mx-auto max-w-[1250px] flex justify-between items-center px-4 py-2 text-white font-semibold">
      <div className="flex justify-between w-[60%]">
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
          href={'./pertanyaanAndJawaban'}
          className={`active:text-yellow hover:text-yellow ${
            pathname === '/pertanyaanAndJawaban' ? 'text-yellow' : 'text-white'
          }`}
        >
          Pertanyaan & Jawaban
        </Link>
      </div>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer bg-yellow hover:bg-[#f8b44e] text-navy font-bold px-4 py-1 rounded-md"
      >
        OLE777 Official
      </div>
      {isOpen && <ContactModal setIsOpen={setIsOpen} />}
    </div>
  );
}
