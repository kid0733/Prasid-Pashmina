import { useEffect, useRef } from 'react';

const ScrollCard = () => {
    const cardRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768; // Define mobile threshold

        const handleMouseMove = (e) => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left; // X position within the card
                const y = e.clientY - rect.top; // Y position within the card

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = -(y - centerY) / 30; // Increased sensitivity
                const rotateY = (x - centerX) / 30;

                cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`; // Added scale for a more dynamic effect
            }
        };

        const handleMouseLeave = () => {
            if (cardRef.current) {
                cardRef.current.style.transform = 'rotateX(0) rotateY(0) scale(1)'; // Smooth return to the original position
            }
        };

        if (!isMobile && cardRef.current) { // Only add event listeners if not on mobile
            cardRef.current.addEventListener('mousemove', handleMouseMove);
            cardRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (cardRef.current) {
                cardRef.current.removeEventListener('mousemove', handleMouseMove);
                cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="card mx-auto my-[3vh] w-[90vw] min-h-[80vh] perspective-[1500px]">
            <div
                ref={cardRef}
                className="card__inner w-full h-full transition-transform duration-[800ms] ease-out transform-style-preserve-3d cursor-pointer relative"
            >
                <div className="card__face card__face--front bg-cover bg-center flex items-center justify-center text-white text-2xl"
                    style={{
                        backgroundImage: "url('img/5.png')",
                        borderRadius: '16px',
                        boxShadow: '0px 3px 18px 3px rgba(0, 0, 0, 0.2)',
                        backfaceVisibility: 'hidden',
                        height: '80vh',  // Ensures the card face is always 80vh in height
                    }}>

                </div>
            </div>
        </div>
    );
};

export default ScrollCard;
