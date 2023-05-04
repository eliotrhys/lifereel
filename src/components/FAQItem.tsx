import { useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = (props: FAQItemProps) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="border-b-2 border-black py-8 w-full">
            <div onClick={toggleAnswer} className="flex items-center justify-between text-xl font-medium cursor-pointer">
                <div className="font-semibold">{props.question}</div>
                <div>
                    {showAnswer === true ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>}
                </div>
            </div>
            {showAnswer && <div className="mt-8">{props.answer}</div>}

        </div>
    )
}

export default FAQItem;