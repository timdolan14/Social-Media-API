const router = require('express').Router();

const {
    getThoughts,
    getThoughtsById,
    postThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('controllers');

// /api/thoughts
router.route('/').get(getThoughts).post(postThoughts);

// /api/thoughts/:id
router.route('/:thoughtsId').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

// /api/thoughts/:thoughtId/reactions

module.exports = router;