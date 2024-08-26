import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            title: 'Preparation & Weaving: The Dance of Threads',
            content: 'The creation of each Pashmina masterpiece begins with meticulous loom preparation. Skilled artisans carefully arrange each thread, setting the stage for precision weaving. As the loom comes to life, Pashmina threads are interlaced with rhythmic expertise, resulting in a fabric that captures the softness of Pashmina wool and the rich heritage of Nepalese craftsmanship.',
            image: 'img/A_1.png' // Replace with the actual image path
        },
        {
            title: 'Dyeing: The Palette of Tradition',
            content: 'Once woven, the Pashmina fabric is dyed using natural, eco-friendly dyes. Master dyers enhance the fabric’s beauty without compromising its innate qualities. The vibrant, rich color palette that emerges is a testament to the harmony between tradition and artistry, adding life and vibrancy to the fabric.',
            image: 'img/A_2.png' // Replace with the actual image path
        },
        {
            title: 'Screen Printing: Patterns of Cultural Significance',
            content: 'Artisans apply intricate designs through the art of screen printing. Each pattern tells a story of cultural heritage and artistic expression, making each Pashmina piece a unique work of art. The motifs are not just decorative—they reflect the rich history and individuality woven into every piece.',
            image: 'img/A_3.png' // Replace with the actual image path
        },
        {
            title: 'Quality Assurance & Finishing: Commitment to Perfection',
            content: 'Before a Pashmina piece reaches your hands, it undergoes rigorous quality checks. Any imperfections are mended with skill, and the final touches are applied. This process ensures that every Pashmina is a flawless embodiment of craftsmanship, ready to be cherished.',
            image: 'img/A_4.png' // Replace with the actual image path
        },
        {
            title: 'Final Touches: Labeling & Packaging the Legacy',
            content: 'The final steps include careful ironing to enhance the fabric’s smooth texture and the application of a distinctive label, symbolizing authenticity and heritage. Each Pashmina is then elegantly packaged, ready to be presented as a luxurious gift, a lasting legacy from the heart of Nepal.',
            image: 'img/A_5.png' // Replace with the actual image path
        }
    ];

    return (
        <div className="flex flex-col md:flex-row max-w-[90vw] mx-auto " >
            {/* Accordion List */}
            <div className="md:w-1/3 w-full p-4">
                {items.map((item, index) => (
                    <AccordionItem 
                        key={index} 
                        title={item.title} 
                        content={item.content} 
                        isOpen={activeIndex === index} 
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
            
            {/* Image Display */}
            <div className="md:w-2/3 w-full p-4">
                <img 
                    src={items[activeIndex].image} 
                    alt={items[activeIndex].title} 
                    className="w-full h-[68vh] object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default Accordion;
