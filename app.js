const jokes = document.querySelector('#jokes');

// this runs first
const addNewJoke = async () => {
    // needs getDadJoke function here so stops and waits for that reply
    const newJoke = await getDadJoke();
    const newLI = document.createElement('li')
    newLI.append(newJoke);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https:///icanhazdadjoke.com/', config)
        // extract and return joke
        return res.data.joke;
    } catch (e) {
        // if it doesn't work- NO JOKES AVAILABLE! will come up in list
        return 'NO JOKES AVAILABLE!'
    }
}

const button = document.querySelector('button');
button.addEventListener('click', addNewJoke);





