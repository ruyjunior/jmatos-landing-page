'use client';

import Link from 'next/link';
import React, { useState, useCallback } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Evita recriação da função a cada render
    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md  bg-transparent md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png"
                            alt="Logo da empresa"
                            width={80}
                            height={80}
                            priority={false}
                            className="rounded-full"
                        />
                        <span 
                            className="text-xl text-white font-semibold text-foreground cursor-pointer"
                            translate='no'
                        >
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link
                                    href={item.url}
                                    className="text-foreground text-white hover:text-foreground-accent transition-colors"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-secundary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            aria-label="Abrir menu de navegação"
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu com transição aprimorada */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-300 transform"
                enterFrom="-translate-y-full opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition ease-in duration-200 transform"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-full opacity-0"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg absolute w-full left-0 top-0 pt-16">
                    <ul className="flex flex-col space-y-4 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link
                                    href={item.url}
                                    className="text-foreground hover:text-primary block"
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
