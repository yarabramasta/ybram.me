'use client';

import { useState } from 'react';

export default function ContactInput() {
  const [val, setVal] = useState('');

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    window.location.href = `mailto:bramasta.yb@gmail.com?body=${encodeURIComponent(
      val
    )}`;
  };

  return (
    <div className="w-full md:w-[320px] flex flex-col group">
      <form
        className="relative flex w-full items-center"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          onChange={(evt) => {
            setVal(evt.target.value);
          }}
          type="text"
          placeholder="what's your idea..."
          className="dark:border-b-light/60 dark:focus:border-b-light/80 dark:hover:border-b-light/80 dark:focus:placeholder:text-light/40 text-2xl font-medium dark:placeholder:text-light/60 border-b-dark/60 focus:border-b-dark/80 hover:border-b-dark/80 focus:placeholder:text-dark/40 placeholder:text-dark/60 bg-transparent border-b duration-300 ease-out transition-all leading-loose w-full pr-8"
          maxLength={200}
        />
        <button
          className="absolute right-0 duration-300 ease-out active:-right-[8px]"
          onClick={handleSubmit}
        >
          <svg
            height={24}
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="duration-300 ease-out group-hover:stroke-dark/80 stroke-dark/60 group-focus-within:stroke-dark/80 dark:group-hover:stroke-light/80 dark:stroke-light/60 dark:group-focus-within:stroke-light/60"
          >
            <path
              d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      <span className="text-dark/60 dark:text-light/60 group-hover:text-dark/80 dark:group-hover:text-light/80 text-xs leading-loose duration-300 ease-out group-focus-within:text-dark/80 dark:group-focus-within:text-light/80">
        {`${val.length} / 200`}
      </span>
    </div>
  );
}
