import { useState, useEffect} from "react";
import { ToastContainer,toast} from "react-toastify";
import { useRouter } from "next/router";

export default function InternetConnectionStatus() {
    const [status,setStatus] = useState('')
    const router = useRouter();
    useEffect(() => {
        if(typeof window !== 'undefined') {
            window.addEventListener('online', () => setStatus('online'));
            window.addEventListener('offline', () => setStatus('offline'));

            if(status === 'offline') {
                toast.error(`No internet connection found. Check your connection!`, {
                    toastId: 12,
                    position: "top-center",
                    autoClose: 25000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
    },[status, router])
    return <ToastContainer/>
}