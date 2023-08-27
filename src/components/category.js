
export default function Category({option,updateCategory}){

    return (
        <div className="choices" onClick={()=>updateCategory(option)}>{option}</div>
    )
}