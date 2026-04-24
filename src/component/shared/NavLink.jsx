'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathName = usePathname();
    // console.log(pathName);
    const isActive = href === pathName
    return (
        <Link className={`${isActive ? 'border-b-2 border-purple-500' : ''}`} href={href}>
            {children}
        </Link>
    );
};

export default NavLink;