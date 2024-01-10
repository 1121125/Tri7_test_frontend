import { useState } from 'react';
import Input from './input';

export default function ContactModal({ setIsOpen }) {
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[30]"></div>
      <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center">
        <div className="w-[450px] bg-white relative p-5 flex flex-col gap-5 rounded-xl">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-3 cursor-pointer text-black text-xl"
          >
            &#10006;
          </div>
          <h3 className="text-2xl text-navy text-center">Contact Form</h3>
          <Input
            name="fullname"
            type="text"
            value={input.fullname}
            onChange={handleChangeInput}
            placeholder="Fullname"
          />
          <Input
            name="email"
            type="text"
            value={input.email}
            onChange={handleChangeInput}
            placeholder="Email"
          />
          <Input
            name="subject"
            type="text"
            value={input.subject}
            onChange={handleChangeInput}
            placeholder="Subject"
          />
          <textarea
            name="message"
            value={input.message}
            onChange={handleChangeInput}
            rows="4"
            placeholder="message"
            className="block w-full outline-none resize-none border border-black p-2 rounded-md text-black"
          />
          <button className="bg-blue w-fit px-4 py-2 rounded-md">Submit</button>
        </div>
      </div>
    </>
  );
}
