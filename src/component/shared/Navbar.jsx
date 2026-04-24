import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            <ul className='flex gap-3'>
                <li className='text-gray-400'><NavLink href={'/'}>Home</NavLink></li>
                <li className='text-gray-400'><NavLink href={'/about-us'}>About</NavLink></li>
                <li className='text-gray-400'><NavLink href={'/career'}>Career</NavLink></li>
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