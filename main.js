// here write a sort function
// function sortList(arr){

//}

const vaxTrail = (datas) => {
    A = []
    B = []
    C = []
    D = []

    //call the sort function. pass datas as parameter and get the sorted list of datas
    // datas = sortList(datas)

    for (entity of datas) {
        if (entity.temperature < 100.0) {
            if (entity.age >= 20 & entity.age <= 30) {
                A.push(entity)
            }
            if (entity.age >= 31 & entity.age <= 40) {
                B.push(entity)
            }
            if (entity.age >= 41 & entity.age <= 50) {
                C.push(entity)
            }
        }
        else {
            D.push(entity)
        }

    }
    return { A, B, C, D }


}


datas = [
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Kabir', age: 36, temperature: 99 },

    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51, temperature: 101 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 }
]

const booth = vaxTrail(datas)
console.log("List of A: ", booth.A)
console.log("List of B: ", booth.B)
console.log("List of C: ", booth.C)
console.log("List of D: ", booth.D)