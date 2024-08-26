import CraftItem from './CraftItem';

const CraftSection = () => {
    return (
        <div className="craft-section bg-purple-100 py-10">
            <h2 className="text-center text-[6vh] font-light mb-6">Our Crafts</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-[90vw] mx-auto">
                <CraftItem 
                    title="Knitted" 
                    imageOne="img/6.webp" 
                    imageTwo="img/7.png" 
                />
                <CraftItem 
                    title="Woven" 
                    imageOne="img/6.webp" 
                    imageTwo="img/7.png" 
                />
                <CraftItem 
                    title="Colors" 
                    imageOne="img/6.webp" 
                    imageTwo="img/7.png"  
                />
            </div>
        </div>
    );
};

export default CraftSection;
