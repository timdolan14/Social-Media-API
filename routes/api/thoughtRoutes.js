const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    // addReaction,
    // deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:id
router
.route('/:thoughtsId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// router.route('/api/thoughts/:thoughtId/reactions').post(addReaction)
// router.route('/api/thoughts/:thoughtId/reactions').delete(deleteReaction)

module.exports = router;