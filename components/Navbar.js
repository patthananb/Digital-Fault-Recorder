import Link from "next/link"

export default function Navbar() {
    return (
        <nav className = "h-[70px]">
            <div className= "">
                <Link href = "/" className = "text-[24px] font-bold hover:text-orange-500"> Digital Fault Recorder </Link>
            </div>
            <div className = "">
                <Link href="/" className ="mr-5 hover:text-red-600"> 
                        Home
                </Link>

                <Link href ="/history" className ="mr-5 hover:text-red-600">
                        History
                </Link>

                <Link href="/update_firmware" className ="mr-5 hover:text-red-600"> 
                        Update Firmware
                </Link>

                <Link href ="/about" className ="mr-5 hover:text-red-600"> 
                        About Me
                </Link>
            </div>
        </nav>
    )
}