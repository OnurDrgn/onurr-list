import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt='test' width={128} height={77} />
            </div>
            <div className="logo-right">
                <Link href="/" legacyBehavior><a>Home</a></Link>
                <Link href="/about" legacyBehavior><a>About</a></Link>
                <Link href="/onurr" legacyBehavior><a>Onurr</a></Link>
            </div>

        </nav>
    );
}

export default Navbar;
