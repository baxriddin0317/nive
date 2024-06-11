import React from 'react'
import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <footer className='relative mt-16 pt-4'>
      <div className='flex gap-4 items-center justify-center mb-4'>
        <p>Powered by </p>
        <img src={logo} alt='logo' />
      </div>
      <div className='max-w-[1180px] mx-auto w-full h-px bg-secondary mt-3'></div>
      <div className='max-w-[1180px] mx-auto px-4 pt-8 w-full flex flex-col lg:flex-row gap-4 items-center justify-between'>
        <p className='md:text-lg text-center md:text-left'>Copyright © 2023 Concirez | All Rights Reserved </p>
        <nav className='flex items-center gap-4 sm:gap-8 mt-2'>
          {terms.map((link) => (
            <a className='text-sm hover:text-brand-orange transition-all ease-in-out underline' href={link.href} key={link.id}>{link.name}</a>
          ))}
        </nav>
      </div>
      {/* shadow */}
      <div className="absolute bottom-0 translate-y-10 left-1/2 -translate-x-1/2 -z-10 h-40 w-full max-w-[1440px] mx-auto md:h-[185px] rounded-full bg-brand-orange blur-[180px]"></div>
    </footer>
  )
}

export default Footer

const terms = [
  {
    id: 1,
    name: "Privacy Policy",
    href: "#"
  },
  {
    id: 2,
    name: "Terms of Service",
    href: "#"
  },
  {
    id: 3,
    name: "Cookie Policy",
    href: "#"
  },
]