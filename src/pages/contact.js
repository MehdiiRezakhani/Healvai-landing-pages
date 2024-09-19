import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast , ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//components
import { contactUs } from '@/services/communication/contact';
import Input from '@/components/partials/Input';
import SubmitButton from '@/components/partials/SubmitButton';

const ContactUsPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
    const formik = useFormik({
        initialValues : {
            name:'',
            email:'',
            message:'',
        },
        validationSchema: yup.object({
            name: yup.string(),
            email: yup.string().required("Your Email is required"),
            message: yup.string().required("Please enter your message"),
        }),
        validateOnMount:true,
        enableReinitialize:true,
        validateOnChange: true,
        validateOnBlur: true,  
        onSubmit: async (val) => {
            toggleSubmitState();
            const response = await contactUs(val);
            toggleSubmitState();
            if (response.success) {
                formik.resetForm()
                toast.success(`Thank You for Reaching Out! We've received your message and will get back to you soon. Thanks for your patience!`, {
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
                        {"Connect with Us - Your Questions & Feedback Matter"}
                    </bdi>
                </p>
                <div className='flex flex-col w-full mt-10'>
                    <p className="text-base lg:text-3xl text-gray_600 font-medium">
                        <bdi>{"Here, we aim to make it as easy as possible for you to get in touch with us. Whether you have questions about our products, need assistance, or wish to share your feedback, we're here to listen and assist you."}.</bdi>
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
                        required={true}
                    />
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

export default ContactUsPage;
