export const sort_by_key=(array,key,order)=>{
    if (!Array.isArray(array)){
        return console.log('Type of this object is '+typeof(array))
    }

    let ordering;
    if (order===1||order===-1){
        ordering=order
    } else {
        ordering=1
    }
    let sorted=array.sort((a,b)=>{
        if(a[key]>b[key]){
            return ordering;
        }
        if (a[key]<b[key]){
            return -ordering;
        }
    })
    return sorted;
}
export const get_max_value=(array,key)=>{
    //need to add validations
    let max=array.map(el=>el[key]).reduce((a,b)=>{
        return Math.max(a,b)
    })
    return max
}
export const get_total_count_on_value=(array,key,value)=>{
    //need to add validations
    let total=array.map(el=>el[key]).filter(e=>e===value).length
    return total
}