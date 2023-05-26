const router = require('express').Router();

const {
    getUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('controllers');

// /api/users
router.route('/').get(getUsers).post(postUser);

// /api/users/:userid
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId


module.exports = router;