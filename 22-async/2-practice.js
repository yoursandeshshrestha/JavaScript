async function Jokes(){
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        const data = await response.json();
        console.log("Joke:", data.setup);
        console.log("Answer:", data.punchline);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
Jokes();

// Doing Same Things Using THEN AND CATCH METHOD 
fetch("https://official-joke-api.appspot.com/random_joke")
.then((response) => {return response.json()})
.then((response) => {console.log("Joke:", response.setup), console.log("Answer:", response.punchline);})
.catch((error) => {console.log("Error:", error.message);})