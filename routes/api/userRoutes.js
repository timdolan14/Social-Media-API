const router = require('express').Router();
const {
    getUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUsers).post(postUser);

// /api/users/:userid
router
.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId').post(addFriend)
router.route('/api/users/:userId/friends/:friendId').delete(deleteFriend)


module.exports = router;