import ProductCard from './ProductCard';

const ProductGrid = () => {
    const products = [
        {
            imageOne: 'img/P_A_1.png',
            imageTwo: 'img/P_B_1.png',
            title: 'Most Popular Product 1',
            description: 'Luxury on the edges of delicate Cashmere Verily tells a story of Pashmina Art.',
            link: '#'
        },
        {
            imageOne: 'img/P_A_2.png',
            imageTwo: 'img/P_B_2.png',
            title: 'Most Popular Product 2',
            description: 'Luxury on the edges of delicate Cashmere Verily tells a story of Pashmina Art.',
            link: '#'
        },
        {
            imageOne: 'img/P_A_3.png',
            imageTwo: 'img/P_B_3.png',
            title: 'Most Popular Product 3',
            description: 'Luxury on the edges of delicate Cashmere Verily tells a story of Pashmina Art.',
            link: '#'
        },
        {
            imageOne: 'img/P_A_4.png',
            imageTwo: 'img/P_B_4.png',
            title: 'Most Popular Product 4',
            description: 'Luxury on the edges of delicate Cashmere Verily tells a story of Pashmina Art.',
            link: '#'
        },
        {
            imageOne: 'img/P_A_5.png',
            imageTwo: 'img/P_B_5.png',
            title: 'Most Popular Product 5',
            description: 'Luxury on the edges of delicate Cashmere Verily tells a story of Pashmina Art.',
            link: '#'
        },
        {
            imageOne: 'img/P_A_6.png',
            imageTwo: 'img/P_B_6.png',
            title: 'Most Popular Product 6',
            description: 'Luxury on the edges of delicate Cashmere Verily tells a story of Pashmina Art.',
            link: '#'
        }
    ];

    return (
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 max-w-[90vw] mx-auto">
            {products.map((product, index) => (
                <ProductCard 
                    key={index}
                    imageOne={product.imageOne}
                    imageTwo={product.imageTwo}
                    title={product.title}
                    description={product.description}
                    link={product.link}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
