import { useEffect, useState } from "react"
import { Product } from "../../Models/entities"

export default function Page() {

    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        const products = [
            { brand:"Dell", name:"Dell XPS 13" },
            { brand:"Dell", name:"Dell XPS 15" },
            { brand:"Levi's", name:"Jeans 501" },
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
        {products && products.map(product => <tr>
            <td>{product.brand}</td>
            <td>{product.name}</td>
        </tr>)}
        </tbody>
    </table>
    </>    
}