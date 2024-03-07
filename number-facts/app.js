const URL = 'http://numbersapi.com/'
const favouriteNumber = '7'

// function part1(){
//     axios.get(`${URL}${favouriteNumber}?json`)
//     .then(res => {
//         console.log(res.data.text)
//     })
//     .catch(err => {
//         console.log('NO DATA')
//     })
// }

// part1()

async function part11(){
    try {
    let res = await axios.get(`${URL}${favouriteNumber}?json`)
    let fact = res.data.text
    console.log(`${fact}`)
    } catch (e) {
        console.log('NO DATA')
    }
    
}

// function part2(){
//     let number = []
//     for(let i=1; i<5; i++){
//         number.push(
//             axios.get(`${URL}${i}?json`)
//         )
//     }
//     Promise.all(number)
//     .then(numberArr => {
//     for (res of numberArr) {
//         console.log(res.data.text)
//     }
//     })
//     .catch(err => console.log(err))
// }

// part2()

async function part22() {
    let randomNumber = Math.floor(Math.random() * 101);
    let randomNumber2 = Math.floor(Math.random() * 101);
    let randomNumber3 = Math.floor(Math.random() * 101);
    let randomNumber4 = Math.floor(Math.random() * 101);
    try {
        let responses = await Promise.all([
            axios.get(`${URL}${randomNumber}?json`),
            axios.get(`${URL}${randomNumber2}?json`),
            axios.get(`${URL}${randomNumber3}?json`),
            axios.get(`${URL}${randomNumber4}?json`)
        ]);

        responses.forEach((res, index) => {
            console.log(`Response ${index + 1}:`, res.data.text);
        });
    } catch (error) {
        console.log('Error:', error);
    }
}

part22();

// function part3(){
//     let number = []
//     for (let i = 0; i < 4; i++){
//         number.push(
//             axios.get(`${URL}${7}?json`)
//         )
//     }
//     Promise.all(number)
//     .then(numberArr => {
//     for (res of numberArr) {
//         console.log(res.data.text)
//     }
//     })
//     .catch(err => console.log(err))
// }


// part3()

async function part33(){
    let number = [];
    for (let i = 0; i < 4; i++){
        number.push(
            axios.get(`${URL}${favouriteNumber}?json`)
        );
    }
    try {
        let numberArr = await Promise.all(number);
        for (let res of numberArr) {
            console.log(res.data.text);
        }
    } catch (error) {
        console.log('Error:', error);
    }
}