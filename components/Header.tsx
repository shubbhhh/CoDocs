import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="flex items-center">
        <Image 
          src="/assets/images/logo.png"
          alt="Logo"
          width={40}
          height={32}
          className="hidden md:block"
          />
        <div className="hidden font-bold items-center md:block">
          CoDocs
        </div>
      </Link>
      {children}
    </div>
  )
}


export default Header;