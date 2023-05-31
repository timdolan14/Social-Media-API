const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 0,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: function (timestamp) {
                return new Date(timestamp).toLocaleString();
            }
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    });

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: function (timestamp) {
                return new Date(timestamp).toLocaleString();
            }
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    });


thoughtSchema.virtual('reactionNumber').get(function () { 
    return this.reactions.length;
});

const Thought = model("thought", thoughtSchema)

module.exports = Thought;