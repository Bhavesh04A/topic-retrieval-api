import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/api/topics', async(req, res) => {
    try {
        const searchQuery = req.query.search;
        const sortParam = req.query.sort;

        if (!searchQuery) {
            return res.status(400).json({ error: 'Missing search query parameter' });
        }

        const data = await fs.readFile('./data/topics.json', 'utf-8');
        let topics = JSON.parse(data);

        // Filter by name case-insensitive
        topics = topics.filter(topic =>
            topic.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Optional sort by name
        if (sortParam === 'name') {
            topics.sort((a, b) => a.name.localeCompare(b.name));
        }

        return res.status(200).json(topics);
    } catch (error) {
        console.error('Error reading topics:', error);
        res.status(500).json({ error: 'Server error retrieving topics' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});