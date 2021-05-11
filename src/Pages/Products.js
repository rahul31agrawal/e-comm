import {FilterDisplay} from '../components/Filters/filterDisplay'
import {ProductsDisplay} from '../components/allProducts'

export const Products = () => {
    return (
        <div className="grid-cont">
            <div className="prod-grid-item"
            style={{border: "1px solid black"}}
            >
                <FilterDisplay />
            </div>
            <div className="prod-grid-item" >
                <ProductsDisplay />
            </div>
        </div>
    )
}