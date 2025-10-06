import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const ProductList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [userId, setUserId] = useState("o978yctgvj")

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        setIsLoading(true)
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }




    return (
        <div>
            <h2>All products</h2>

            <input type="search" name="" id="" />
            <section>
                {
                    isLoading ? (
                        <p>Loading....</p>
                    ) : (
                        <section>
                            {
                                products.length > 0 ? (
                                    <section style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                        {
                                            products.map((ele, index) => (
                                                <div key={index}>
                                                    <img src={ele.image} alt="" width={200} />
                                                    <h2>{ele.title}</h2>
                                                    <p>${ele.price}</p>
                                                    <p>{ele.category}</p>
                                                    <Link to={`/products/${ele.id}`}>View Products</Link>
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
                        </section>
                    )
                }
            </section>
        </div>
    )
}

export default ProductList