document.getElementById("searchForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;

    const response = await fetch("http://localhost:5000/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ from, to, date })
    });

    const data = await response.json();
    console.log(data);
});
