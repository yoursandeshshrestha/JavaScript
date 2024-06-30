async function getData() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log("Cat fact:", data.fact);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

getData();