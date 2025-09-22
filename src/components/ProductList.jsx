
const products = [
    { name: "NIke Shoe", price: 300, category: "fashion", image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" },
    { name: "Gucci Shoe", price: 300, category: "fashion", image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" },
    { name: "Adidas Shoe", price: 300, category: "fashion", image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" },
    { name: "Ofwhite Shoe", price: 300, category: "fashion", image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" },
    { name: "Puma Shoe", price: 300, category: "fashion", image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg" },
]

// const products = []

const ProductList = () => {
    return (
        <div>
            <h2>All products</h2>
            {
                products.length > 0 ? (
                    <section style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {
                            products.map((ele, index) => (
                                <div key={index}>
                                    <img src={ele.image} alt="" width={200} />
                                    <h2>{ele.name}</h2>
                                    <p>${ele.price}</p>
                                    <p>{ele.category}</p>
                                </div>
                            ))
                        }
                    </section>
                ) : (
                    <div>
                        <h1>No product found</h1>
                    </div>
                )
            }
        </div>
    )
}

export default ProductList