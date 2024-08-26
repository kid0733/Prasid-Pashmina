import PropTypes from 'prop-types';

const HeroText = ({ backgroundText, foregroundText, subText }) => {
    return (
        <div className="relative h-[50vh] h-[30vh] flex items-center justify-center">
            {/* Background Text */}
            <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    color: 'rgba(0, 0, 0, 0.06)', // light gray color for background text
                    fontSize: '15vw', // large font size for background text
                    letterSpacing: '2vw', // large letter spacing
                    textTransform: 'uppercase', // make the background text uppercase
                }}
            >
                {backgroundText}
            </div>

            {/* Foreground Text */}
            <div className="relative text-center mx-auto px-4 ]">
                <h1 className="text-[6vh] md:text-[8vh] lg:text-[10vh] font-regular text-gray-800">{foregroundText}</h1>
                <h2 className="text-lg md:text-2xl lg:text-[5vh] font-extralight text-gray-600 mt-2">{subText}</h2>
            </div>
        </div>
    );
};

HeroText.propTypes = {
    backgroundText: PropTypes.string.isRequired,  // backgroundText is required and must be a string
    foregroundText: PropTypes.string.isRequired,  // foregroundText is required and must be a string
    subText: PropTypes.string,                    // subText is optional but should be a string if provided
};

export default HeroText;
