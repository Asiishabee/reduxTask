// import { getProductsByCategory } from "../products/[category]";



// const CategoryPage = ({products}) => {
    
    
//     return (
//         <div>
         
//           <div className='flex'>
//             {products.map((product) => (
//             <h1>{product.title}</h1>
//             ))}
//           </div>
//         </div>
//       );
      
    
//   };


//   export default CategoryPage

//   export async function getServerSideProps(ctx) {
//     const category = ctx.query.category;
//     const products = await getProductsByCategory(category);
//     return { props: { products } };
//   }