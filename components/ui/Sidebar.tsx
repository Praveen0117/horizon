"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({user}:SiderbarProps) => {
    const pathName = usePathname();
    
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href="/" className="mb-12 cursor-pointer items-center flex gap-2"><Image src="/icons/logo.svg" width={34} height={34} alt='Horizon Logo' className='size-{24px} max-xl:size-16' /> <h1 className='sidebar-logo '>Horizon</h1></Link>
        {sidebarLinks.map((item) => {
            const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
            return (<Link className={cn('sidebar-link', {'bg-bank-gradient':isActive})} href={item.route} key={item.label}> 
            <div className='relative size-6'>
                <Image src={item.imgURL} alt={item.label} fill />
            </div>
            <p className={cn('sidebar-label', {'!text-white': isActive })}>
                {item.label} 
            </p> 
            
            </Link>)
        })}
      </nav>
    </section>
  )
}

export default Sidebar
