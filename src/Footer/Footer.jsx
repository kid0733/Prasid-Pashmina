

const Footer = () => {
    return (
        <div className="bg-[#523D53] text-purple-100 py-8 px-4">
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Contact Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p>PRASID PASHMINA INDUSTRY</p>
                    <p>prasidpashminanepal@gmail.com</p>
                    <p>+977-9851024383</p>
                    <p>(Viber, Whats-App)</p>
                </div>
                
                {/* Menu Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Menu</h3>
                    <ul>
                        <li>Menu</li>
                        <li>Woven</li>
                        <li>Accessories</li>
                        <li>Knit</li>
                        <li>FAQ</li>
                        <li>Colour Chart</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                
                {/* Follow Us Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/img/icons/facebook.png" alt="Facebook" className="w-8 h-8"/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/img/icons/instagram.png" alt="Instagram" className="w-8 h-8"/>
                        </a>
                    </div>
                </div>

            </div>

            {/* Map Section */}
            <div className="max-w-screen-lg mx-auto mt-8 rounded-xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.217030992498!2d85.32413301453704!3d27.68467638280207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19771b4cfbb7%3A0x5f1f4de737ce79ff!2sKathmandu%20District%2C%20Bagmati%20Province!5e0!3m2!1sen!2snp!4v1615567840363!5m2!1sen!2snp"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '3vh' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Footer;
