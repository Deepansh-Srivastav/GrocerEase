let array = [1, 2, 4, 5, 7, 14, 5, 88]

let evenArray = [2, 4, 14, 88]


let oddArray = array?.filter((arr) => {
    return !(evenArray?.some((evenArr) => {
        return evenArr === arr;
    }))
})

console.log("The odd array is = ", oddArray);






let isElementEven = array?.some((item) => {
    return item === 2;
})

let filteredArray = array?.filter((item) => {
    return item !== 1
})
