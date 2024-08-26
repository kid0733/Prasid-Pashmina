import { useState } from 'react';
import FAQItem from './FAQItem';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: 'WHICH IS BETTER WOOL OR CASHMERE?',
            answer: (
                <>
                    <p><strong>Warmth:</strong> Cashmere is 7-8 times warmer than Merino wool.</p>
                    <p><strong>Softness:</strong> Cashmere is softer due to its higher loft.</p>
                    <p><strong>Durability:</strong> Merino wool is more durable and resists pilling better.</p>
                    <p><strong>Elegance:</strong> Cashmere is a more luxurious fabric with a refined drape, making it ideal for dressier occasions.</p>
                </>
            ),
        },
        {
            question: 'WHICH ANIMAL PRODUCES CASHMERE WOOL?',
            answer: 'Cashmere wool is produced by Cashmere goats, primarily found in the Himalayan region, Mongolia, and parts of Iran and Afghanistan.',
        },
        {
            question: 'WHAT IS CASHMERE WOOL AND WHY IS IT SO EXPENSIVE?',
            answer: 'Cashmere wool is a luxurious natural fiber obtained from the undercoat of Cashmere goats. It is expensive due to the labor-intensive process of collecting and processing the fibers, as well as its superior softness, warmth, and rarity.',
        },
        {
            question: 'HOW CAN YOU TEST REAL CASHMERE?',
            answer: 'Real Cashmere can be tested by touch, burning, or checking the label. Genuine Cashmere feels extremely soft, doesn’t burn easily, and should be labeled as 100% Cashmere.',
        },
        {
            question: 'WHAT IS CASHMERE?',
            answer: 'Cashmere is a fine, soft natural fiber obtained from the undercoat of Cashmere goats. It is highly prized for its softness, warmth, and lightweight properties.',
        },
        {
            question: 'IS EXTRACTING CASHMERE WOOL FROM ANIMAL CRUEL TO THEM?',
            answer: 'Extracting Cashmere wool involves combing the undercoat of the goats during the molting season, which is a natural process and does not harm the goats if done correctly and humanely.',
        },
    ];

    return (
        <div className="w-[90vw] mx-auto p-4">
            <h2 className="text-center text-3xl font-regular mb-8">What You Need To Know</h2>
            {faqItems.map((item, index) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === index}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                />
            ))}
        </div>
    );
};

export default FAQ;
