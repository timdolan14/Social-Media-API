const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    // deleteFriend
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userid
router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend)
// router.route(':userId/friends/:friendId').delete(deleteFriend)


module.exports = router;