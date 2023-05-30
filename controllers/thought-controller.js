const { Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtsId })
                .select('-__v');
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtsId }, req.body);
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID!' });
            }
            res.json('Thought has been Updated');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtsId });
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID!' });
            }
            res.json('Thought has been Deleted');
        } catch (err) {
            res.status(500).json(err);
        }
    },
};