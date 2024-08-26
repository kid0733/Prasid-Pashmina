
const AboutSection = () => {
    return (
        <section className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-500/80 backdrop-blur-lg max-w-[90vw] mx-auto mt-[-10vh]">
            <div className="text-center">
                <h2 className="text-[5vh] font-regular mb-4 text-stone-500">A Legacy of Luxury and Heritage</h2>
                <p className="text-stone-600 leading-relaxed">
                    Based in Kathmandu, Nepal, we have over 22 years of experience as a leading manufacturer and exporter of high-quality Cashmere/Pashmina products, with major exports to Europe, the USA, and Asia. Our offerings include a variety of intricate designs such as Hand Embroidery, Glass Beading, Screen Printing, and Jacquard. We are committed to empowering marginalized families, especially women, through employment and training, while also supporting workers with...
                </p>
            </div>

            <div className="flex justify-around items-center mt-8 space-x-4">
                <div className="text-center">
                    <img src="img/icons/yarn.svg" alt="100% Cashmere" className="mx-auto mb-2 w-12 h-12" />
                    <p className="text-sm text-stone-500">We offer 100% cashmere</p>
                </div>
                <div className="text-center">
                    <img src="img/icons/needle.svg" alt="Handmade in Nepal" className="mx-auto mb-2 w-12 h-12" />
                    <p className="text-sm text-stone-500">Handmade in Nepal</p>
                </div>
                <div className="text-center">
                    <img src="img/icons/scale.svg" alt="Sizes from XS to XXXXL" className="mx-auto mb-2 w-12 h-12" />
                    <p className="text-sm text-stone-500">Sizes from XS to XXXXL</p>
                </div>
                <div className="text-center">
                    <img src="img/icons/delivery.svg" alt="Quick Delivery" className="mx-auto mb-2 w-12 h-12" />
                    <p className="text-sm text-stone-500">Quick delivery</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
