import {useFilter} from './Filters/filterContext'
import {ProductCard} from './Cards/producrCard'
import '../App.css'

export const ProductsDisplay = () => {
  const { searchedFilteredData } = useFilter();
  
  return (
    <div style={{textAlign: "center"}} >
      { searchedFilteredData.length === 0 ? 
      <div className="loader-prod" >
      Loading....
    </div>
    :
      (searchedFilteredData.map((product) => {
        return (
          <ProductCard product={product}  />
        );
      })) 
      
      }
    </div>
  );
};


// export const ProductsDisplay = () => {
//   const { filteredData } = useFilter()

//   return (
//     <div style={{textAlign: "center"}} >
//       {filteredData.map((product) => {
//         return (
//           <ProductCard product={product} viewBtn wishBtn />
//         );
//       })}
//     </div>
//   );
// };
