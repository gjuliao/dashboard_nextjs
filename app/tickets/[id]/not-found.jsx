import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3x1'>We hit a break wall!</h2>
        <p>We could not find the page you were looking for.</p>
        <p>Go back to dashboard <Link href='/tickets'>Dashboard</Link></p>
    </main>
  )
}
