'use client';
import Link from 'next/link';
import Navbar from './navbar';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ContactModal from './contactModal';

export default function HeroHeader({ global }) {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="bg-navy">
        <div className="mx-auto max-w-[1250px] flex justify-between items-center gap-1 px-4 py-5">
          <img src={global.logo} alt="Logo" className="max-w-[80%]" />
          <div className="lg:flex gap-2 hidden">
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
          {toggle ? (
            <div
              onClick={() => setToggle(!toggle)}
              className="text-white flex justify-center items-center text-3xl w-[40px] rounded-xl aspect-square cursor-pointer hover:bg-white/10 lg:hidden"
            >
              &#10006;
            </div>
          ) : (
            <div
              onClick={() => setToggle(!toggle)}
              className="text-white flex justify-center items-center text-3xl w-[40px] rounded-xl aspect-square cursor-pointer hover:bg-white/10 lg:hidden"
            >
              &#9776;
            </div>
          )}
        </div>
      </div>
      <nav className="bg-blue relative">
        <Navbar />
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mobile-navbar flex flex-col absolute lg:hidden w-full"
          >
            <Link
              href={'/'}
              className={`active:text-yellow hover:text-yellow px-6 py-3 border-b border-gray bg-blue ${
                pathname === '/' ? 'text-yellow' : 'text-white'
              }`}
            >
              Tentang OLE777
            </Link>
            <Link
              href={'/komisi'}
              className={`active:text-yellow hover:text-yellow px-6 py-3 border-b border-gray bg-blue ${
                pathname === '/komisi' ? 'text-yellow' : 'text-white'
              }`}
            >
              Komisi
            </Link>
            <Link
              href={'/peraturan'}
              className={`active:text-yellow hover:text-yellow px-6 py-3 border-b border-gray bg-blue ${
                pathname === '/peraturan' ? 'text-yellow' : 'text-white'
              }`}
            >
              Peraturan
            </Link>
            <Link
              href={'./pertanyaanAndJawaban'}
              className={`active:text-yellow hover:text-yellow px-6 py-3 border-b border-gray bg-blue ${
                pathname === '/pertanyaanAndJawaban'
                  ? 'text-yellow'
                  : 'text-white'
              }`}
            >
              Pertanyaan & Jawaban
            </Link>
            <div
              onClick={() => setIsOpen(true)}
              className={`text-[#FBBB57] hover:text-yellow px-6 py-3 font-semibold border-b border-gray bg-blue shadow-inner cursor-pointer  ${
                pathname === '/pertanyaanAndJawaban'
                  ? 'text-yellow'
                  : 'text-white'
              }`}
            >
              OLE777 Official
            </div>
            <Link
              href={global.link.login}
              className={`active:text-yellow hover:text-yellow px-6 py-3 border-b border-gray bg-blue ${
                pathname === '/pertanyaanAndJawaban'
                  ? 'text-yellow'
                  : 'text-white'
              }`}
            >
              Login
            </Link>
            <Link
              href={global.link.register}
              className={`active:text-yellow hover:text-yellow px-6 py-3 border-b border-gray bg-blue ${
                pathname === '/pertanyaanAndJawaban'
                  ? 'text-yellow'
                  : 'text-white'
              }`}
            >
              Daftar sekarang
            </Link>
          </motion.div>
        )}
        {isOpen && <ContactModal setIsOpen={setIsOpen} />}
      </nav>
    </>
  );
}
