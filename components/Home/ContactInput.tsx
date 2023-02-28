'use client';

export default function ContactInput() {
  return (
    <div className="w-full md:w-[320px] flex flex-col group">
      <div className="relative flex w-full items-center">
        <input
          type="text"
          placeholder="what's your idea..."
          className="dark:border-b-light/20 dark:focus:border-b-light/60 dark:hover:border-b-light/60 dark:focus:placeholder:text-light/40 text-2xl font-medium dark:placeholder:text-light/20 border-b-dark/20 focus:border-b-dark/60 hover:border-b-dark/60 focus:placeholder:text-dark/40 placeholder:text-dark/20 bg-transparent border-b duration-300 ease-out transition-all leading-loose w-full pr-8"
          maxLength={200}
        />
        <button className="absolute right-0 duration-300 ease-out active:-right-[8px]">
          <svg
            height={24}
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="duration-300 ease-out group-hover:stroke-dark/60 stroke-dark/20 group-focus-within:stroke-dark/60 dark:group-hover:stroke-light/60 dark:stroke-light/20 dark:group-focus-within:stroke-light/60"
          >
            <path
              d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <span className="text-dark/20 dark:text-light/20 group-hover:text-dark/60 dark:group-hover:text-light/60 text-xs leading-loose duration-300 ease-out group-focus-within:text-dark/60 dark:group-focus-within:text-light/60">
        0 / 200
      </span>
    </div>
  );
}
