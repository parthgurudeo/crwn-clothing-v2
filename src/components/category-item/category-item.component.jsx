import './category-items.styles.scss'

const CategoryItem=({category})=>{
return(
    <div key={category.id} className='category-container'>
    <div className='background-image'style={{backgroundImage:`url(${category.imageUrl})`}}>
    
    </div>
 
  <div className='category-body-container'>
    <h2>{category.title}</h2>
    <p>Shop Now</p>
  </div>
</div>
)
}
export default CategoryItem