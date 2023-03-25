"use client";

import { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";

import { NavigationMenu } from "components/NavigationMenu";
import { ThemeSwitch } from "components/ThemeSwitch";

import { IconButton } from "./IconButton";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="block lg:hidden">
        <IconButton onClick={openModal} label="Site Navigation">
          <FaBars className="text-3xl text-cs-pink" />
        </IconButton>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto w-screen h-screen">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-screen h-screen transform overflow-hidden surface text-left align-middle shadow-xl transition-all">
                  <section className="w-full text-right">
                    <button
                      onClick={closeModal}
                      className="text-3xl text-cs-pink rounded-full p-2 hover:bg-gray-500/10 focus:bg-gray-500/10 m-2 ring-0 outline-0"
                    >
                      <FaTimes />
                    </button>
                  </section>

                  <div className="text-center mb-8">
                    <ThemeSwitch />
                  </div>

                  <NavigationMenu orientation="col" />

                  <section className="w-full text-center mt-8">
                    <button
                      onClick={closeModal}
                      className="m-4 p-2 border-2 border-color font-medium rounded-lg w-44"
                    >
                      Close
                    </button>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
