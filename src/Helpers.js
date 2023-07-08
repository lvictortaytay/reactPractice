const choice = (items) => {
    let idx = Math.floor(Math.random() * items.length)
    return items[idx]
}

const remove = (items , item) =>{
    if(item){
        for(let ite of items){
            if(item === ite){
                let idx = items.indexOf(ite)
                items.splice(idx , 1)
                return (ite)
            }
        }
    }
    return "not valid item"
}

export { choice , remove };