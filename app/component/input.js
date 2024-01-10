export default function Input({
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div className={`flex flex-col gap-2 w-full `}>
      <div className="relative z-0">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="peer text-md block w-full appearance-none rounded-md border border-black bg-white/0 pb-1 pt-3 px-2 text-md text-black focus:border-blue focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label className="absolute text-black/50 bg-white origin-[0] px-1 top-3 text-md transform duration-300 peer-placeholder-shown:-z-10 z-10 peer-focus:z-10 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:-translate-y-1 -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-x-2 translate-x-2 peer-focus:text-black">
          {placeholder}
        </label>
      </div>
    </div>
  );
}
