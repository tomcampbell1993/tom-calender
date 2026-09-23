import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

let events = [
    {
        "id": "1",
        "title": "tour",
        "time": "1100"
    }
];

app.get("/api/events", (req, res) => {
    res.json(events);
});

app.get("/api/events/:id", (req, res) => {
    const event = events.find(
        event => event.id === Number(req.params.id)
    );

    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
});

app.post("/api/events", (req, res) => {
    const newEvent = {
        id: events.length + 1,
        title: req.body.title,
        time: req.body.time
    };

    events.push(newEvent);

    res.status(201).json(newEvent);
});

app.delete("/api/events/:id", (req, res) => {
    const id = Number(req.params.id);

    events = events.filter(event => event.id !== id);

    res.status(204).send();
});

app.listen(3001, () => {
    console.log("API running on http://localhost:3001");
});