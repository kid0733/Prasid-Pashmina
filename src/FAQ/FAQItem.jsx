import  { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    const [height, setHeight] = useState(isOpen ? 'auto' : '0px');
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight('0px');
        }
    }, [isOpen]);

    return (
        <div 
            onClick={onClick} 
            className={`cursor-pointer p-4 mb-4 rounded-lg shadow-md transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-gray-100'}`}
        >
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex justify-between items-center">
                {question}
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ⮟
                </span>
            </h3>
            <div 
                ref={contentRef} 
                style={{ maxHeight: height }} 
                className="overflow-hidden transition-max-height duration-300 ease-in-out"
            >
                <div className="text-gray-600 text-sm">
                    {answer}
                </div>
            </div>
        </div>
    );
};

FAQItem.propTypes = {
    question: PropTypes.string.isRequired, // The question is required and must be a string
    answer: PropTypes.node.isRequired,     // The answer is required and can be any renderable content (string, element, etc.)
    isOpen: PropTypes.bool.isRequired,     // isOpen is required and must be a boolean
    onClick: PropTypes.func.isRequired,    // onClick is required and must be a function
};

export default FAQItem;
