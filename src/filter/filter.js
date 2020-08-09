// 过滤价格
export const filtersPirce=(price)=>{
    return price.toFixed(2)
}
// 过滤时间
export const filtersTime=(time)=>{
    let data=new Date(time)
    // 获取年
    let year=data.getFullYear()
    // 获取月份
    let month=(data.getMonth()+1+"").padStart(2)
    // 获取天数
    let day=(data.getDate()+"").padStart(2)

    // 返回数据
    return `${year}-${month}-${day}`
}