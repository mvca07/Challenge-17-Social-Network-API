const router = require("express").Router();
const Thought = require("../../models/thoughtModel");

//gets all thought data
router.get("/", async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//adds a new thought
router.post("/", async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    res.json(newThought);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//gets a single thoughts data
router.get("/:_id", async (req, res) => {
  try {
    const singleThought = await Thought.findOne({ _id: req.params._id });
    if (!singleThought) {
      return res.status(404).json({ message: "No Thought with this Id" });
    }
    res.json(singleThought);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//updates a single thoughts data
router.put("/:_id", async (req, res) => {
  try {
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedThought);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//deletes a single thoughts data
router.delete("/:_id", async (req, res) => {
  try {
    const deletedThought = await Thought.findOneAndDelete({
      _id: req.params._id,
    });
    res
      .status(200)
      .json({ message: `Deleted ThoughtId: ${deletedThought._id}` });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//adds a reaction to a single thought
router.post("/:_id/reactions", async (req, res) => {
  try {
    const thoughtId = req.params._id;
    const newReaction = {
      reactionBody: req.body.reactionBody,
      username: req.body.username
    }
    const addReaction = await Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $addToSet: { reactions: newReaction } },
      { new: true }
    );
    res.status(200).json(addReaction)
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
//deletes a reaction from a single thought
router.delete("/:_id/reactions", async (req, res) => {
    try {
    const thoughtId = req.params._id;
    const oldReaction = {
      reactionBody: req.body.reactionBody,
      username: req.body.username
    }
    const removeReaction = await Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $pull: { reactions: oldReaction } },
      { new: true }
    );
    res.status(200).json(removeReaction)
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
