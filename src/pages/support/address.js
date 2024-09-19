import { useState } from "react"
import Link from "next/link";
import { useRouter } from "next/router"
import Image from "next/image";

//assets
import { Home } from "@mui/icons-material";
import BTC_QRcode from '@/assets/about/finance/BTC-QRcode.jpg';
import USDT_QRcode from '@/assets/about/finance/USDT-QRCode.jpg';
import TON_QRcode from '@/assets/about/finance/TON-QRcode.jpg';
import { ToastContainer, toast} from "react-toastify";

export default function WalletAddress() {
    const router = useRouter();
    const {
        amount,
        coin,
    } = router.query
    const [finish,setFinish] = useState(false);
    const [address,setAddress] = useState('');
    const coinData = {
        BTC: {title:'Bitcoin', value:'BTC', address:"bc1qenyv0u4888md24n8hne47ewaez38r256fggxhe", QRCode: BTC_QRcode},
        USDT: {title:'Tether', value:'USDT', address:"0xE85A63e7538984f857319Ba616AdD1A911C934a4", QRCode: USDT_QRcode},
        TON: {title:'TON', value:'TON', address:"EQDgL6-k6L0NzCJGMqD5gWcnnnzco_RlPDmL5ycXwRCt1R9l", QRCode: TON_QRcode},
    }
    const hasCoin = ["BTC", "USDT", "TON"]?.map(item => item.toLowerCase())?.includes(coin?.toLocaleLowerCase())
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(coinData?.[coin]?.address);
            toast.success(`Text copied to clipboard!`, {
                toastId: 12,
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (err) {
            toast.success(`Failed to copy text: ${err}`, {
                toastId: 12,
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };
    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-5 py-20 lg:px-20">
            <ToastContainer/>
            {!finish ? 
                <div className="w-full h-full flex flex-col items-center justify-center mt-10">
                    {hasCoin  ? 
                        <div className="flex flex-col items-center text-center">
                            <div className="w-64 h-64 rounded-xl overflow-hidden">   
                                <Image src={coinData?.[coin]?.QRCode} alt={`${coin} QRCode`} className="w-full h-full"/>
                            </div>
                            <div className="flex mt-5 border-[1px] border-dashed border-primary/60 rounded-2xl overflow-hidden">
                                <p className="text-xs sm:text-sm text-center font-medium p-2">{coinData?.[coin]?.address}</p>
                                <button 
                                    onClick={copyToClipboard}
                                    className="text-base text-white font-bold bg-primary px-2 py-1"
                                ><bdi>{("Copy")}</bdi></button>
                            </div>
                            
                            <p className="mt-10 text-center">Please send {amount} {coin} to the address above or scan the QR code.
                            <br/>Once you are done, hit the conirm button</p>
                            <button 
                                onClick={() => setFinish(prev => !prev)}
                                className="text-lg text-white text-center font-bold px-3 py-1.5 mt-5 bg-primary rounded-xl"
                            >{("Confirm")}</button>
                        </div> 
                    : 
                    <Link href='/support'> 
                        <Home className="text-primary text-5xl mt-10"/>
                    </Link>
                    }
                </div>
            :
                <div className="block mt-20 text-center">
                    <p>
                        <bdi>{("Thank You, Your donation will soon be on the way to Healvai")}.</bdi>
                    </p> 
                    <Link 
                        href='/'
                        className='text-white text-2xl text-center font-semibold leading-6 bg-primary block mt-5 px-10 py-3 rounded-3xl shadow-first' 
                    ><bdi>{("Back To Home")}</bdi></Link>
                </div>
            }
        </div>
    )
}