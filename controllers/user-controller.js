const { User } = require('../models');

module.exports = {
    async getUser(req, res) {
        try {
            const users = await User.find().select('-__v').populate('friends');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v').populate('friends');
            if (!user) {
                return res.status(404).json({ message: 'No User with that ID!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            if (!user) {
                return res.status(404).json({
                    message: 'Invalid!',
                })
            }
            res.json('User has been created');
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body);
            if (!user) {
                return res.status(404).json({ message: 'No User with that ID!' });
            }
            res.json('User has been Updated');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No User with that ID!' });
            }
            res.json('User has been Deleted');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true });
            if (!user) {
                return res.status(404).json({ message: 'No User with that ID!' });
            }
            res.json('Friend has been added!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true });
            if (!user) {
                return res.status(404).json({ message: 'No User with that ID!' });
            }
            res.json('Friend has been deleted!');
        } catch (err) {
            res.status(500).json(err);
        }
    }
};