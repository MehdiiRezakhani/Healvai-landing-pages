import Image from "next/image";
import Link from "next/link";
import { useRouter} from "next/router";

export default function AvatarBox() {
  const {pathname} = useRouter();
  return( 
    <>
        <div className="w-full flex flex-row justify-center items-center mt-10 lg:mt-0">
            <Link 
                href={`/app/auth/login?redirect=${pathname}`}
                className='text-base text-primary font-bold px-2 lg:px-4 py-2 rounded-xl border-[1px] border-primary hover:bg-primary hover:text-white'
            >
              <bdi>{("Login")}</bdi>
            </Link>
            <Link 
                href={`/app/auth/signup?redirect=${pathname}`}
                className='text-base text-white font-bold bg-primary px-2 lg:px-4 py-2 mx-2 rounded-xl'
            >
              <bdi>{("Sign Up")}</bdi>
            </Link>
        </div>
    </>
  )
}
