export const gridList = array => {
    let response = []
    let row = []
    for (let i = 0; i < array.length; i++) {
        row = [...row,array[i]]
        if(i%2==1 || i==array.length-1){
            response = [...response,row]
            row = []
        }
    }
    return response
}