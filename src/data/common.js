//assets
import happier_Icon from '@/assets/common/happier_Icon.svg';
import smarter_Icon from '@/assets/common/smarter_Icon.svg';
import healthier_Icon from '@/assets/common/healthier_Icon.svg';
import easier_Icon from '@/assets/common/easier_Icon.svg';
import workStep_shot1 from '@/assets/screenshots/workStep_shot1.png';
import workStep_shot2 from '@/assets/screenshots/workStep_shot2.png';
import workStep_shot3 from '@/assets/screenshots/workStep_shot3.png';

const profitsList = [
    {
        title:"Healthier",
        description:"Ditch the guesswork, embrace better health. Our AI Health Assistant analyzes your data, providing personalized insights to guide you towards a healthier you.",
        pic:healthier_Icon
    },
    {
        title:"Happier",
        description:"Unlock a happier you! Our AI-Powered Health Assistant personalizes your wellness journey, making healthy choices feel effortless and bringing a smile to your day.",
        pic:happier_Icon
    },
    {
        title:"Smarter",
        description:"Take healthcare to the next level with our AI-powered Health Assistant. It's the smarter way to manage your health, providing personalized insights and support, 24/7.",
        pic:smarter_Icon
    },
    {
        title:"Easier",
        description:"Our App is so easy to use, even your grandma could do it! Just sign up, create a profile, and start tracking your health goals. We'll take care of the rest.",
        pic:easier_Icon
    },
        ,
]

const workStepList = [   
    {
        title:"Upload your body photos safely",
        description:"Upload your photos and describe your physical limitations. Feel free to upload photos with faces blurred or without faces at all. Your photos will be deleted from our servers as soon as the posture analysis is complete.",
        pic:workStep_shot1,
    },
    {
        title:"Identify Abnormalities with AI",
        description:"Analyzing and processing the information",
        pic:workStep_shot2,
    },
    {
        title:"Follow personalized corrective exercises",
        description:"Prescribing personalized corrective exercises",
        pic:workStep_shot3,
    },
]

const appDownloadList = [
    // {
    //     title:"Google Play",
    //     link:"/",
    // },
    // {
    //     title:"App Store",
    //     link:"/",
    // },
    {
        title:"Web App",
        link:"/app",
    },
]

const serviceList = [
    {
        title:"",
        description:"",
        pic:"",
    },
    {
        title:"",
        description:"",
        pic:"",
    },
    {
        title:"",
        description:"",
        pic:"",
    },
]
const FaqList = [
    {
        summary:"What is the AI-Powered Posture Corrector?",
        details:"The AI-Powered Posture Corrector tool uses artificial intelligence to analyze your body posture and movements, identifying potential anomalies that could lead to pain or discomfort.",
    },
    {
        summary:"How can this AI tool help me?",
        details:"This tool can help you improve your posture, balance, and address specific issues like uneven shoulders or misaligned hips. By improving your posture, you can reduce pain, boost energy levels, and feel more confident.",
    },
    {
        summary:"Who can benefit from this tool?",
        details:"Anyone who sits for extended periods, experiences aches and pains, or wants to improve their overall posture can benefit from this tool.",
    },
    {
        summary:"How do I use Body Anomaly Detection?",
        details:"The exact process might vary depending on the specific implementation, but generally, you would take a photo of your posture using the tool's app or interface. The AI will then analyze the photo and provide you with a report on your posture and personalized exercise recommendations.",
    },
    {
        summary:"What kind of photos does the tool require?",
        details:"For the best results, the photos should be full-body images taken from the front, back, left and right side",
    },
    {
        summary:"Is the AI analysis accurate?",
        details:"Our AI is trained on a vast dataset of postures and is designed to be highly accurate. However, it is important to consult with a healthcare professional if you have any concerns about your posture or experience significant pain.",
    },
    {
        summary:"What kind of body anomalies can the tool detect?",
        details:"The tool can detect a variety of posture issues, including rounded shoulders, hunching, swayback, and misaligned hips.",
    },
    {
        summary:"What kind of exercises does the tool recommend?",
        details:"The recommended exercises will vary depending on your specific posture analysis. However, they will likely focus on stretches, strengthening exercises, and core engagement to improve your posture and alignment.",
    },
    {
        summary:"Is AI-Powered Posture Corrector free?",
        details:"There is a free tier available for the first 10,000 early adopters! After that, there will be both free and paid subscription options available.",
    },
    {
        summary:"Do you collect any personal data?",
        details:"We collect minimal personal data to create your account and personalize your experience. This may include information like your email address and basic demographics (age, height, etc.) if you choose to provide them.",
    },
    {
        summary:"What happens to the photos I upload for analysis?",
        details:"We do not store your photos by default.  After the AI analyzes your posture, the photo is deleted unless you explicitly choose to save it for your own records.",
    },
    {
        summary:"Is my data secure?",
        details:"We take data security very seriously. We use industry-standard security measures to protect your information.",
    },
    {
        summary:"Can I delete my account and data?",
        details:"Yes, you can delete your account and all associated data at any time.",
    },
    // {
    //     summary:"",
    //     details:"",
    // },
]

export {profitsList, FaqList, workStepList, appDownloadList};