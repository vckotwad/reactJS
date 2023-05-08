let productCount=0;
let isAvailable="Available"
let badgeClass="badge-margin-left-240 badge "
badgeClass+=(isAvailable=="Available"? "bg-success":"bg-danger")


function formattedproductCount(){
    return ((productCount>0) ? productCount : "zero")
}
function increament(){
    productCount++
    console.log(productCount)
}

function decreament(){
    productCount--
    console.log(productCount)

}

function products(){
    return (<div>
        <button className="btn btn-primary" onClick={decreament()}> - </button>
        <span>{formattedproductCount()}</span>
        <button className="btn btn-primary" onClick={increament()}> + </button>
        <span className={badgeClass}>{isAvailable}</span>

    </div>)
}

export default products