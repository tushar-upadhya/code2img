"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        target="_blank"
        href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
      >
        Linkedin &nbsp;&#129109;
      </Link>
      <Link
        target="_blank"
        href="https://tusharupadhyay.vercel.app/"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made by</span>
        <span className="pl-1 font-medium text-slate-200">Tushar Upadhyay</span>
      </Link>
      <Link
        href="https://github.com/tushar-upadhya/code2img"
        target="_blank"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        Source Code Here &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;
