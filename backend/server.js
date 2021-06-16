require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const connect = () => {
    return mongoose.connect(process.env.MONGODB_ATLAS_LINK, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
};

const hotelSchema = mongoose.Schema({
    topTitle: String,
    city: String,
    state: String,
    country: String,
    latitude: String,
    longitude: String,
    hotImg1: String,
    hotImg2: String,
    hotImg3: String,
    basePrice: Number,
    mapLink: String,
    tagsArr: [String],
    amenitiesArr: [String]
}, {
    versionKey: false,
})

const Hotel = mongoose.model('hotels', hotelSchema);

app.get('/hotels', async (req, res) => {
    const city = req.query.city;
    const sort = req.query.sort;
    if (city === undefined) {
        const hotels = await Hotel.find({}).lean().exec();
        res.status(200).json({ data: hotels });
    } else {
        if (sort === 'asc') {
            const hotels = await Hotel.find({ $or: [{ city: city }, { state: city }] }).sort({ basePrice: 1 }).lean().exec();
            res.status(200).json({ data: hotels });
        } else if (sort === 'desc') {
            const hotels = await Hotel.find({ $or: [{ city: city }, { state: city }] }).sort({ basePrice: -1 }).lean().exec();
            res.status(200).json({ data: hotels });
        }
        else {
            const hotels = await Hotel.find({ $or: [{ city: city }, { state: city }] }).lean().exec();
            res.status(200).json({ data: hotels });
        }
    }
});

app.get('/hotels/:id', async (req, res) => {
    const id = req.params.id;
    const hotell = await Hotel.findById(id).lean().exec();
    res.status(200).json({ data: hotell });
});

app.post('/hotels', async (req, res) => {
    const hotel = await Hotel.create(req.body);
    res.status(201).json({ data: hotel });
});

app.patch('/hotels/:id', async (req, res) => {
    const id = req.params.id;
    const hotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(203).json({ data: hotel });
});

app.delete('/hotels/:id', async (req, res) => {
    const id = req.params.id;
    await Hotel.findByIdAndDelete(id);
    const hotel = await Hotel.find().lean().exec();

    res.status(203).json({ data: hotel });
});

async function start() {
    await connect();
    app.listen(8001, function () {
        console.log(`Listening on port 8001`);
    })
}

start();