app.post("/book", async (req, res) => {
    const { trainId } = req.body;

    const train = await Train.findById(trainId);

    if (train.seats > 0) {
        train.seats -= 1;
        await train.save();
        res.json({ message: "Booking Confirmed" });
    } else {
        res.json({ message: "No seats available" });
    }
});
