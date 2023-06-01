const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
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
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/reactionsId
router.route('/:thoughtId/reactions/:reactionsId').delete(deleteReaction)

module.exports = router;