
export default function PolicyPage() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full h-full px-5 lg:px-20 pt-24 pb-10 lg:pt-32 lg:pb-16">
                <h3 className='text-3xl sm:text-4xl text-center font-bold leading-10 self-center'>
                    <bdi>{"Privacy Policy"}</bdi>
                </h3>
                <div className="mt-5">
                    <p><span className="font-bold"><bdi>{"Protecting your privacy is important to us"}. </bdi></span> <bdi>{"Healvai is committed to protecting your privacy and the confidentiality of your information. This Privacy Policy explains how we collect, use, and disclose information in connection with our Body Anomaly Detection (BAD) tool"}.</bdi></p>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Information We Collect"}</bdi></h4>
                    <ul className="list-disc ml-5">
                        <li className="my-2"><strong><bdi>{"Photos"}</bdi></strong>:
                            <bdi>{"You may choose to upload photos of yourself for posture analysis. These photos are used solely for AI analysis to identify potential posture issues and suggest corrective exercises"}. </bdi><strong><bdi>{"We delete these photos from our servers as soon as the analysis is complete"}.</bdi></strong>
                        </li>
                        <li className="my-2"><strong><bdi>{"Optional Data"}</bdi></strong>:
                            <bdi>{"With your permission, we may use anonymized versions of your photos to further train and improve our AI model. This will be done responsibly and in a way that protects your privacy"}.</bdi>
                        </li>
                        <li className="my-2"><strong><bdi>{"Account Information"}</bdi></strong>:
                            <bdi>{"We may collect basic account information, such as your username and email address, to manage your account"}.</bdi>
                        </li>
                    </ul>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Data Usage"}</bdi></h4>
                    <p className="text-base my-2"><bdi>{"The information we collect is used for the following purposes"}:</bdi></p>
                    <ul className="list-disc ml-5">
                        <li className="my-2">
                            <bdi>{"To analyze your posture and suggest personalized exercises for improvement"}.</bdi>
                        </li>
                        <li className="my-2">
                            <bdi>{"To improve the accuracy and effectiveness of our AI model (with your permission)"}.</bdi>
                        </li>
                        <li className="my-2">
                            <bdi>{"To manage your account and provide you with customer support"}.</bdi>
                        </li>
                    </ul>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"We will never"}:</bdi></h4>
                    <ul className="list-disc ml-5">
                        <li className="my-2">
                            <bdi>{"Sell or share your personal information to third parties without your consent"}.</bdi>
                        </li>
                        <li className="my-2">
                            <bdi>{"Use your photos for any purpose other than posture analysis or AI model training (with your permission)"}.</bdi>
                        </li>
                        <li className="my-2">
                            <bdi>{"To manage your account and provide you with customer support"}.</bdi>
                        </li>
                    </ul>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Data Security"}</bdi></h4>
                    <p className="text-base my-2">
                        <bdi>{"We take reasonable steps to protect the information you provide from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is completely secure"}.</bdi>
                    </p>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Control Over Your Information"}</bdi></h4>
                    <p className="text-base my-2">
                        <bdi>{"You have the right to access, update, and delete your account information at any time. You can also choose to opt out of having your anonymized photos used for AI training"}.</bdi>
                    </p>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Disclaimer"}</bdi></h4>
                    <p className="text-base my-2">
                        <bdi>{"Our data has been validated by a medical researcher team, but we do not claim any medical expertise. We recommend consulting with a healthcare professional for any posture-related concerns"}.</bdi>
                    </p>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Changes to this Privacy Policy"}</bdi></h4>
                    <p className="text-base my-2">
                        <bdi>{"We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on our website"}.</bdi>
                    </p>
                    <h4 className="text-2xl font-bold my-4"><bdi>{"Contact Us"}</bdi></h4>
                    <p className="text-base my-2">
                        <bdi>{"If you have any questions about this Privacy Policy, please contact us at"}</bdi> <a href="mailto:Healvaitech@gmail.com" target="_blank" className="underline">Healvaitech@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
