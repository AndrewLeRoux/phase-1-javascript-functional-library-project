function converttoArray(collection) {
    if (Array.isArray(collection)){
        return collection.slice()
    }
    else {
        return Object.values(collection)
    }

}


function myEach(collection, callback) {
    const collection2 = converttoArray(collection)

    for (const element of collection2) {
    callback(element)
}
    return collection
}


function myMap(collection, callback) {
    const collection2 = converttoArray(collection)
    for (let i = 0; i < collection2.length; i++) {
        collection2[i] = callback(collection2[i])
    }

    return collection2
}

function myReduce(collection, callback, acc){
    let collection2 = converttoArray(collection)
    if (!acc){
        acc = collection2[0]
        collection2 = collection2.slice(1)
        for (const element of collection2){
            acc = callback(acc, element, collection2)
        }
    }

    else if (acc){
    for (const element of collection2){
            acc = callback(acc, element, collection2)
        }
    }
    return acc
}


function myFind(collection, predicate){
    let collection2 = converttoArray(collection)
    for (const element of collection2){
        if (predicate(element)){
            return element
        }
    }
}

function myFilter(collection, predicate){
    let collection2 = converttoArray(collection)
    let returnArray = []
    for (let i = 0; i < collection2.length; i++){
        if (predicate(collection2[i])){
            returnArray.push(collection2[i])
        }
    }

    return returnArray
}

function mySize(collection){
    let collection2 = converttoArray(collection)
    return collection2.length
}

function myFirst(array, n){
    let collection = [array[0]]
    
    if (!n){
        return collection[0]
    }
    else if(n){
    for (let i = 1; i < n; i++){
        collection.push(array[i])
    }
    return collection
    }
}

function myLast(array, n){
    let collection = [array[array.length - 1]]
   
    if (!n) {
        return collection[0]
    }
    else if (n){
    for (let i = array.length - 2; i > array.length - 1 - n; i--){
        collection.unshift(array[i])
    }
    return collection
    }
}

function myKeys(object){
    let newArray = []
    for (const element in object){
        newArray.push(element)
    }
    return newArray
}

function myValues(object){
    let newArray = []
    for (const element in object){
        newArray.push(object[element])
    }
    return newArray
}
