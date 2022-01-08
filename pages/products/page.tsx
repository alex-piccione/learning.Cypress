import { useEffect, useState } from "react"
import { Product } from "../../Models/entities"

export default function Page() {

    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        const products = [
            { id:"001", brand:"Dell", name:"Dell XPS 13" },
            { id:"002", brand:"Dell", name:"Dell XPS 15" },
            { id:"003", brand:"Levi's", name:"Jeans 501" },
        ]
        setProducts(products)
    }, [])

    return <>
    <h1>Products</h1>
      <table>
        <thead>
            <tr>
                <th>Brand</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
        {products && products.map(product => <tr key={product.id}>
            <td>{product.brand}</td>
            <td>{product.name}</td>
        </tr>)}
        </tbody>
    </table>
    </>    
}