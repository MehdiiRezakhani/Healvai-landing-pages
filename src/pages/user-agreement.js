export default function UserAgreementPage() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full h-full px-5 lg:px-20 pt-24 pb-10 lg:pt-32 lg:pb-16">
                <h3 className='text-3xl sm:text-4xl text-center font-bold leading-10 self-center'><bdi>{"User Agreement"}</bdi></h3>
                <div className="mt-5">
                    <p><span className="font-bold"><bdi>{"Welcome to Healvai - AI-Powered Posture Corrector!"}</bdi></span> <bdi>{"This AI-powered tool analyzes your posture in photos and provides personalized exercise suggestions to improve posture, balance, and address potential issues. By using Body Anomaly Detection, you agree to the following terms"}</bdi>:</p>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Data Privacy"}:</bdi></h4>
                    <ul className="list-disc ml-5">
                        <li className="my-2"><strong><bdi>{"Disclaimer"}</bdi></strong>:
                            <bdi>{"Our posture analysis data is validated by a medical research team. However, we cannot be held responsible for its application. We recommend consulting your doctor before starting any new exercise program, especially if you have pre-existing health conditions"}.</bdi>
                        </li>
                        <li className="my-2"><strong><bdi>{"Photo Security"}</bdi></strong>:
                            <bdi>{"Your photos are uploaded solely for posture analysis and will be deleted from our servers immediately after processing"}.</bdi>
                        </li>
                        <li className="my-2"><strong><bdi>{"AI Training (Optional)"}</bdi></strong>:
                            <bdi>{"With your permission, we may use anonymized versions of your photos to train and improve our AI. This data will be used responsibly and will never be linked back to you"}.</bdi>
                        </li>
                        <li className="my-2"><strong><bdi>{"User Control"}</bdi></strong>:
                            <bdi>{"You have the right to delete your account and all associated data at any time"}.</bdi>
                        </li>
                    </ul>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Benefits and Limitations"}:</bdi></h4>
                    <ul className="list-disc ml-5">
                        <li className="my-2">
                            <bdi>{"Body Anomaly Detection can help you identify potential posture issues and recommend corrective exercises. However, it is not a substitute for professional medical advice"}.</bdi>
                        </li>
                        <li className="my-2">
                            <bdi>{"The suggested exercises are for informational purposes only and should be tailored to your individual needs and fitness level"}.</bdi>
                        </li>
                    </ul>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Agreement"}:</bdi></h4>
                    <p className="text-base my-2">
                        <bdi>{"By using Body Anomaly Detection, you acknowledge that you have read and understood these terms and conditions. We reserve the right to update this agreement at any time. We recommend you review it periodically for any changes"}</bdi>
                    </p>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Let's get started on your journey to a healthier posture"}!</bdi></h4>
                </div>
            </div>
        </div>
    );
};