import React, { useState } from "react";

interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBox({ setSearchTerm }: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm(inputValue.trim());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length >= 3) {
      setSearchTerm(value.trim());
    } else {
      setSearchTerm("");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
          className="px-3 md:px-8 py-4 border bg-transparent border-cyan-500 forced-colors:border-cyan-500 rounded-2xl mr-4"
        />
        <button
          type="submit"
          className=" px-3 md:px-8 py-4 text-white bg-cyan-500 rounded-2xl"
        >
          Search
        </button>
      </form>
    </div>
  );
}
