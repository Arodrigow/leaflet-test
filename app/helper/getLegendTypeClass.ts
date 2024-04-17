export const getLegentTypeClass = (type:string): string =>{
    if (type == 'line') {
        return "legendLine"
    }
    return "legendSquare"
}