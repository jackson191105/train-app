document.getElementById("searchForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // VERY IMPORTANT (stops page refresh)

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const date = document.getElementById("date").value;

    if (!from || !to || !date) {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ from, to, date })
        });

        const trains = await response.json();
        displayTrains(trains);

    } catch (error) {
        console.error("Error:", error);
        alert("Server not connected");
    }
});
