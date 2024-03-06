const URL = 'http://numbersapi.com/'
const favouriteNumber = '7'

function part1(){
    axios.get(`${URL}${favouriteNumber}?json`)
    .then(res => {
        console.log(res.data.text)
    })
    .catch(err => {
        console.log('NO DATA')
    })
}

part1()

function part2(){
    let number = []
    for(let i=1; i<5; i++){
        number.push(
            axios.get(`${URL}${i}?json`)
        )
    }
    Promise.all(number)
    .then(numberArr => {
    for (res of numberArr) {
        console.log(res.data.text)
    }
    })
    .catch(err => console.log(err))
}

part2()

function part3(){
    let number = []
    for (let i = 0; i < 4; i++){
        number.push(
            axios.get(`${URL}${7}?json`)
        )
    }
    Promise.all(number)
    .then(numberArr => {
    for (res of numberArr) {
        console.log(res.data.text)
    }
    })
    .catch(err => console.log(err))
}


part3()