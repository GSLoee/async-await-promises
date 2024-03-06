let deckID = 'le6tfee69aix'

axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    .then(res => {
        let card = res.data.cards[0]
        console.log(`${card.value} of ${card.suit}`)
    })
    .catch(err => {
        console.log('ERROR!!!!')
    })

    function getNewDeckID() {
        return axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then(response => {
                return response.data.deck_id;
            })
            .catch(error => {
                console.log('Error fetching new deck ID:', error);
                throw error; // Propagate the error
            });
    }
    
    function part2() {
        getNewDeckID()
            .then(deckID => {
                return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`);
            })
            .then(response => {
                const firstCard = response.data.cards[0];
                console.log(`${firstCard.value} of ${firstCard.suit}`);
                return response
            })
            .then(response => {
                const secondCard = response.data.cards[1]
                console.log(`${secondCard.value} of ${secondCard.suit}`)
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }
    
    part2();

let $btn = $('button')
let $container = $('.card-container')

$btn.on('click', function(){
    axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`)
    .then(res => {
        let cards = res.data.cards[0]
        let card = res.data.cards[0].image
        let angle = Math.random() * 90 - 45
        let randomY = Math.random() * 40 - 20
        let randomX = Math.random() * 40 - 20
        $container.append(
            $('<img>', {
                src: card,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        )
        console.log(`${card.value} of ${card.suit}`)
    })
    .catch(err => {
        console.log('ERROR!!!!')
    })
})
