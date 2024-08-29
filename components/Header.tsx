import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: HeaderProps) => {
    return (
        <div>
            <Link href="/" className="md:flex-1">
                <Image 
                    src="/assets/icons/logo.svg"
                    alt="Logo"
                    width={120}
                    height={32}
                    className="hidden md:block"
                />
            </Link>
        </div>
    )
}


export default Header;