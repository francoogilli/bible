"use client";
import React, { useState } from 'react';

interface Option {
  bookSlug: string;
  chapterNumber: number;
  image: string;
}

interface SelectDropdownProps {
  options: Option[];
  selectedChapter?: number;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ options, selectedChapter }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
    // Redireccionar al hacer clic en la opción seleccionada
    window.location.href = `/books/${option.bookSlug}/${option.chapterNumber}`;
  };

  return (
    <div>
      
      <div className="relative mt-2">
        <button
          type="button"
          className="relative w-full font-medium cursor-default rounded-xl text-white bg-zinc-800 py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-[#2d2d2d]  sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-labelledby="listbox-label"
          onClick={toggleMenu}
        >
          <span className="flex items-center">
            {selectedOption && (
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
            )}
            <span className="ml-3 block text-base truncate">{selectedOption ? `Capitulo ${selectedOption.chapterNumber}` : 'Elige un capitulo'}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg
              className={`size-3.5 mr-1.5 transition-transform transform ${
                isMenuOpen ? 'rotate-180' : ''
              } text-gray-400`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {isMenuOpen && (
          <ul
            className="absolute z-10 mt-1 max-h-72 w-full overflow-auto border border-[#2d2d2d] rounded-xl text-white bg-[#09090B] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`${
                  option.chapterNumber === selectedChapter ? 'bg-zinc-800 rounded-xl text-white' : 'text-white hover:bg-[#1e1e1e] rounded-xl cursor-pointer'
                } relative cursor-default select-none py-2 pl-3 pr-9`}
                id={`listbox-option-${index}`}
                role="option"
                onClick={() => handleOptionSelect(option)}
              >
                <div className="flex items-center">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
                  <span className="font-normal text-base ml-3.5 block truncate">{`Capitulo ${option.chapterNumber}`}</span>
                </div>

                {option.chapterNumber === selectedChapter && (
                  <span className="text-white absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectDropdown;
