import { useEffect, useMemo, useState } from "react"
import './App.css'
function App() {

    const [Time, ~] = useState(new Date().toLocaleTimeString());

    const [products, setProducts] = useState(
        [
            { id: 1, name: 'One Plus Nord CE2', price: 20000 },
            { id: 2, name: 'Oppo F21 S', price: 22000 },
            { id: 3, name: 'Samsung Galaxy  M 33', price: 17000 },
        ]
    )


    const [searchText, updateSearchText] = useState('');

    const filteredProducts = useMemo(

        () => {

            console.log(products)

            return products.filter(
                (p) => {

                    return p.name.toLowerCase().includes(searchText.toLowerCase())

                }
            )

        },
        [products, searchText]

    )


    useEffect(
        () => {
            setInterval(
                () => {
                    setTime(new Date().toLocaleTimeString())

                }, 1000
            )

        }, []
    )

    return (
        <>

            <div>{Time}</div>

            <input type="text" value={searchText} onChange={e => updateSearchText(e.target.value)} />

            <table>
                <tr>
                    <td> S.No</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                {
                    filteredProducts.map(
                        p => (
                            <tr key={p.id}>
                                <td> {p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                            </tr>

                        )
                    )
                }
            </table>
        </>
    )

}

export default App
