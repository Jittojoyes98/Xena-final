import Link from 'next/link'
import Image from 'next/image'
import source from '../images/xena.PNG'
const Nav = function(){
     return (
         <div className="fixed top-0 w-full flex bg-primary z-20">
             <div className='basis-3/12 p-6 '>
                <Image src={source} />
             </div>
             <div className='basis-6/12 flex justify-center items-center '>
                <ul className='flex justify-center items-center font-sans text-base font-normal'>
                    <li className='text-2xl mx-2 text-white'>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className='text-2xl mx-2 text-white'>
                        <Link href='/services'>
                            Services
                        </Link>
                    </li>
                    <li className='text-2xl mx-2 text-white'>
                        <Link href='/product'>
                            Product
                        </Link>
                    </li>
                    <li className='text-2xl mx-2 text-white'>
                        <Link href='/resources'>
                            Resources
                        </Link>
                    </li>
                    <li  className='text-2xl mx-2 text-white'>
                        <Link href='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
             </div>
             <div className='basis-3/12 flex justify-center items-center'>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-sans py-4 px-6 rounded-3xl text-base ">Join Xena</button>
             </div>
         </div>
     )
}
export default Nav;