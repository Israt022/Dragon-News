import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";


const Header = () => {
    return (
        <div className='mx-auto space-y-2 py-8 text-center'>
            <Image src={logo} width={300} height={200} alt='Logo'/>
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE,MMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;