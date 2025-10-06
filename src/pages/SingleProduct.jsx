import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams()
    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = async () => {
        console.log("Fetching....")
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            console.log("DONE!")
        }
    }
    return (
        <div>SingleProduct</div>
    )
}

export default SingleProduct