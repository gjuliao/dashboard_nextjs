import React from 'react'
import Link from 'next/link'
import Logo from './logo_two.jpeg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
        <Image 
          src={Logo}
          alt='Logo image'
          height={75}
          width={75}
          placeholder='blur'
        />
        <h1>Next Dashboard</h1>
        <Link href="/">Home</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
