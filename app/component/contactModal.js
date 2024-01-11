import { useState } from 'react';
import Input from './input';
import axios from 'axios';

export default function ContactModal({ setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage([]);
      setLoading(true);
      const formData = new FormData();
      for (let key in input) {
        if (input[key]) {
          formData.append(`${key}`, input[key]);
        }
      }
      const response = await axios.post(
        'https://super7tech.com/web_developer_exam_sr/api/sendMessage',
        formData
      );
      setIsSuccess('yes');
    } catch (error) {
      console.log('Error Submit Form', error);
      setIsSuccess('no');
      const errorArr = [];
      for (let key in error.response.data.errors.field) {
        errorArr.push(error.response.data.errors.field[key]);
      }
      setErrorMessage(errorArr);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[30]"></div>
      <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center px-3">
        <form
          onSubmit={handleSubmitForm}
          className="w-[450px] bg-white relative p-5 flex flex-col gap-5 rounded-xl"
        >
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
            placeholder="Message"
            className="block w-full outline-none resize-none border border-black p-2 rounded-md text-black"
          />
          <div className="flex gap-2 items-center">
            <button className="bg-blue w-fit px-4 py-2 rounded-md text-white font-semibold">
              Submit
            </button>
            {loading && (
              <div className="flex items-center">
                <img src="./spinner.svg" className="h-[40px]" />
                <p className="text-black text-sm">Submit process</p>
              </div>
            )}
            {isSuccess === 'yes' && !loading ? (
              <div className="flex items-center gap-1">
                <img src="./success.png" className="h-[30px]" />
                <p className="text-black text-sm">{response.data.message}</p>
              </div>
            ) : isSuccess === 'no' && !loading ? (
              <div className="flex items-center gap-1">
                <img src="./fail.png" className="h-[30px]" />
                <p className="text-black text-sm">Submit Fail</p>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="text-red-500">
            {errorMessage.map((el) => (
              <>
                <div>{el}</div>
              </>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}
