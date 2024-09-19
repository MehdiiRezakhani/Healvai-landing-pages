import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast , ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//components
import { donate } from '@/services/communication/donate';
import Input from '@/components/partials/Input';
import SubmitButton from '@/components/partials/SubmitButton';

const SupportPage = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
    const currencyList = [
        {title:'Toman(تومان)', value:'Toman'},
        {title:'Bitcoin', value:'BTC'},
        {title:'Tether', value:'USDT'},
        {title:'TON', value:'TON'},
    ]
    const walletList = [
        {title:'TrustWallet', value:'TW'},
        // {title:'MetaMask', value:'M'},
        {title:'Other Wallet', value:"Others"}
    ]
    const formik = useFormik({
        initialValues : {
            name:'',
            email:'',
            message:'',
            currency:'',
            amount:'',
            wallet:'',
        },
        validationSchema: yup.object({
            name: yup.string(),
            email: yup.string().required("Your Email is required"),
            message: yup.string(),
            currency: yup.string().required('Please Select a currency'),
            amount: yup.number().required('Please Enter an amount'),
            wallet: yup.string(),
        }),
        validateOnMount:true,
        enableReinitialize:true,
        validateOnChange: true,
        validateOnBlur: true,  
        onSubmit: async (val) => {
            toggleSubmitState();
            const response = await donate(val);
            toggleSubmitState();
            if (response.success) {
                if(val.currency == 'Toman') router.push('https://zarinp.al/mehdirezakhani')            
                if(val.currency == 'BTC' && val.wallet == 'TW') router.push(`https://link.trustwallet.com/send?coin=0&address=bc1qenyv0u4888md24n8hne47ewaez38r256fggxhe`)
                if(val.currency == 'USDT' && val.wallet == 'TW') router.push(`https://link.trustwallet.com/send?coin=60&address=0xE85A63e7538984f857319Ba616AdD1A911C934a4&token_id=0xdAC17F958D2ee523a2206206994597C13D831ec7`)
                if(val.currency == 'TON' && val.wallet == 'TW') router.push(`https://link.trustwallet.com/send?coin=607&address=EQDgL6-k6L0NzCJGMqD5gWcnnnzco_RlPDmL5ycXwRCt1R9l`)            
                if(val.currency == 'BTC' && val.wallet == 'Others') router.push(`/support/address?coin=BTC&amount=${val.amount}`)
                if(val.currency == 'USDT' && val.wallet == 'Others') router.push(`/support/address?coin=USDT&amount=${val.amount}`)
                if(val.currency == 'TON' && val.wallet == 'Others') router.push(`/support/address?coin=TON&amount=${val.amount}`)
            } else {
                toast.error(`Error:${response.errors}`, {
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
        }
        
    })
    return (
        <div className='w-full h-full'>
            <ToastContainer/>
            <div className="flex flex-col w-full h-full px-4 lg:px-20 py-[100px] lg:py-[150px]">
                <p className="text-2xl lg:text-4xl text-gray_800 text-center font-extrabold mt-10">
                    <bdi>
                        {("Support us to develop the future of digital health")}
                    </bdi>
                </p>
                <div className='flex flex-col w-full mt-10'>
                    <p className="text-base lg:text-3xl text-gray_600 font-medium mt-5">
                        <bdi>{("We are a team of AI experts and healthcare professionals who are developing a new digital health platform that uses AI to revolutionize the way we diagnose and treat diseases. Our platform is still in the early stages of development, but we believe that it has the potential to make a major impact on the healthcare industry. We are crowdfunding to raise the money we need to complete the development of our platform and bring it to market. Please consider supporting our crowdfunding campaign today. Your donation will help us bring our platform to market and make a difference in the world")}.</bdi>
                    </p>
                </div>
                <form 
                    onSubmit={formik.handleSubmit}
                    className='flex flex-col self-center gap-5 w-full lg:w-1/2 mt-10'
                >   
                    <div className='flex flex-col sm:flex-row gap-5 w-full '>
                        <Input 
                            name='name'
                            id='name'
                            type='text'
                            value={formik.values.name} 
                            onChange={formik.handleChange}
                            formik={formik}
                            onBlur={formik.handleBlur}
                            placeholder='Name'
                        />
                        <Input 
                            name='email'
                            id='email'
                            type='text'
                            
                            value={formik.values.email} 
                            onChange={formik.handleChange}
                            formik={formik}
                            onBlur={formik.handleBlur}
                            placeholder='email'
                            required={true}
                        />
                    </div>
                    <Input
                        name='message'
                        id='message'
                        type='textarea'
                        value={formik.values.message} 
                        onChange={formik.handleChange}
                        formik={formik}
                        onBlur={formik.handleBlur}
                        placeholder='Message'
                        h={48}
                    />
                    <div className='flex flex-col sm:flex-row gap-5 w-full '>
                        <Input
                            name='currency'
                            id='currency'
                            type='select'
                            list={currencyList}
                            value={formik.values.currency} 
                            onChange={formik.handleChange}
                            formik={formik}
                            onBlur={formik.handleBlur}
                            placeholder='Select Currency...'
                            required={true}
                        />
                        <Input
                            name='amount'
                            id='amount'
                            type='number'
                            value={formik.values.amount} 
                            onChange={formik.handleChange}
                            formik={formik}
                            onBlur={formik.handleBlur}
                            placeholder='amount'
                            required={true}
                        />
                    </div>
                    {formik.values.currency == 'BTC' || formik.values.currency == 'USDT' || formik.values.currency == 'TON' ?
                        <Input
                            name='wallet'
                            id='wallet'
                            type='select'
                            list={walletList}
                            value={formik.values.wallet} 
                            onChange={formik.handleChange}
                            formik={formik}
                            onBlur={formik.handleBlur}
                            placeholder='Select Wallet...'
                            required={formik.values.currency == 'BTC' || formik.values.currency == 'USDT' || formik.values.currency == 'TON'}
                        />
                    : null}
                    <SubmitButton
                        type='submit'
                        text="Donate"
                        isSubmitting={isSubmitting}
                    />
                </form>
            </div>
        </div>
    );
};

export default SupportPage;