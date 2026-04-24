import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            <ul className='flex gap-3'>
                <li className='text-gray-400'><Link href={'/'}>Home</Link></li>
                <li className='text-gray-400'><Link href={'/about-us'}>About</Link></li>
                <li className='text-gray-400'><Link href={'/career'}>Career</Link></li>
            </ul>
            <div className='flex items-center gap-3'>
                <Image src={userAvatar} width={40} height={40} alt='User Image'/>
                <Link href={'/login'}>
                    <button className='btn bg-gray-900 text-white'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;