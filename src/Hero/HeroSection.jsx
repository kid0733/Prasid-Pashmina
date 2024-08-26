

const HeroSection = () => {
    return (
        <section
            className="relative flex items-center justify-center h-[100vh] bg-cover bg-center"
            style={{ 
                backgroundImage: "url('img/2.png')", 
                zIndex: 0,
            }}
        >
            <div className="relative text-left text-violet-300 min-w-[90vw]" style={{ zIndex: 10 }}>
                <h1 className="text-[10vw] mt-[10vh] font-semi-bold leading-tight">
                    Prasid<br />
                    <span className="text-[9vw] mb-[10vh] text-violet-100 font-light">Pashmina <br /></span>
                </h1>
                <h2>
                    <span className="text-[3vw] mt-[5vh] text-violet-100 font-light">100% Organic <br /></span>
                    <span className="text-[3vw] text-violet-300 font-light">Chyangra Pashmina</span>
                </h2>
            </div>
        </section>
    );
};

export default HeroSection;
