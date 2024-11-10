async  function handle() {
    try {
        const data = await fetch('https://api.example.com/data');

        if (data.ok === true) { // 2xx
            return data.json();
        } else {
            // 4xx
            // FIRST PART WHERE YOU NEED TO HANDLE ERROR
        }
    } catch (error) {
        // 5xx
        // SECOND PART WHERE YOU NEED TO HANDLE ERROR
    }
}
