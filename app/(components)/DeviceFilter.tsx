"use client";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export const platforms = [
  { name: "Device Type" },
  { name: "All" },
  { name: "iOS" },
  { name: "Android" },
  { name: "Web" },
];
interface sortProps {
  selectedSort: {
    name: string;
  };
  selectedPlatform: {
    name: string;
  };
  setSelectedSort: Dispatch<
    SetStateAction<{
      name: string;
    }>
  >;
  setSelectedPlatform: Dispatch<
    SetStateAction<{
      name: string;
    }>
  >;
}

export default function DeviceFilter({
  selectedSort,
  setSelectedSort,
  selectedPlatform,
  setSelectedPlatform,
}: sortProps) {
  return (
    <div className="flex items-center z-[10] justify-center space-x-4">
      {/* button*/}
      <Listbox value={selectedPlatform} onChange={setSelectedPlatform}>
        <div className="relative mt-1 z-[100] min-w-[8.8rem] ">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg  text-gray-950 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            style={{
              background: "#FFFFFF",
            }}
          >
            <span className="block truncate">{selectedSort.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-black"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-[1000] top-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {platforms.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-purple-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                  disabled={option.name === "Device Type"}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-900 font-solid">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
