import { useState } from 'react';
import PropTypes from 'prop-types';

const CraftItem = ({ title, imageOne, imageTwo }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="craft-item w-full md:w-[30vw] min-h-[60vh] relative overflow-hidden rounded-3xl"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img 
                src={imageOne} 
                alt={title} 
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-0' : 'opacity-100'}`}
            />
            <img 
                src={imageTwo} 
                alt={title} 
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-purple-100 bg-opacity-70 p-4 text-center">
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <p className="text-gray-700 text-sm md:text-base">20+ Items</p>
                <button className="mt-2 px-4 py-2 bg-purple-950 text-white rounded-lg hover:bg-stone-950 transition-colors text-sm md:text-base">
                    View More &gt;
                </button>
            </div>
        </div>
    );
};

CraftItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageOne: PropTypes.string.isRequired,
    imageTwo: PropTypes.string.isRequired,
};

export default CraftItem;
