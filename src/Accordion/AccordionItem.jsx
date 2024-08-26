import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(isOpen ? 'auto' : '0px');

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
            className={`cursor-pointer p-4 mb-4 rounded-lg shadow-md transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-purple-100'}`}
        >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
            </h3>
            <div 
                ref={contentRef} 
                style={{ maxHeight: height }} 
                className="overflow-hidden transition-max-height duration-300 ease-in-out"
            >
                <p className="text-gray-600 text-sm">
                    {content}
                </p>
            </div>
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,      // title is required and must be a string
    content: PropTypes.string.isRequired,    // content is required and must be a string
    isOpen: PropTypes.bool.isRequired,       // isOpen is required and must be a boolean
    onClick: PropTypes.func.isRequired,      // onClick is required and must be a function
};

export default AccordionItem;
