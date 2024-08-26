import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ imageOne, imageTwo, title, description, link }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="product-card w-full bg-white rounded-lg overflow-hidden shadow-md"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative w-full h-[40vh]">
                <img 
                    src={imageOne} 
                    alt={title} 
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-0' : 'opacity-100'}`}
                />
                <img 
                    src={imageTwo} 
                    alt={title} 
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <a href={link} className="text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors">
                    Learn More &gt;
                </a>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    imageOne: PropTypes.string.isRequired,     // imageOne is required and must be a string
    imageTwo: PropTypes.string.isRequired,     // imageTwo is required and must be a string
    title: PropTypes.string.isRequired,        // title is required and must be a string
    description: PropTypes.string.isRequired,  // description is required and must be a string
    link: PropTypes.string.isRequired,         // link is required and must be a string (URL)
};

export default ProductCard;
