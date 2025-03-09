const seedUsers = [
  {
    username: "john_doe",
    email: "john_doe@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "jane_doe",
    email: "jane_doe@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "user_name",
    email: "user_name@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "david_freeman",
    email: "david_freeman@example.com",
    thoughts: [],
    friends: [],
  },
];

const seedThoughts = [
  {
    thoughtText: `I'm excited...`,
    username: "jane_doe",
    reactions: [
      {
        reactionBody: `You are?!?`,
        username: "david_freeman",
      },
      {
        reactionBody: `Me too!`,
        username: "john_doe",
      },
      {
        reactionBody: `That's awesome!`,
        username: "user_name",
      },
    ],
  },
  {
    thoughtText: `I'm coding...`,
    username: "david_freeman",
    reactions: [
      {
        reactionBody: `You are?!?`,
        username: "user_name",
      },
      {
        reactionBody: `Me too!`,
        username: "jane_doe",
      },
      {
        reactionBody: `That's awesome!`,
        username: "john_doe",
      },
    ],
  },
  {
    thoughtText: `I'm tired...`,
    username: "user_name",
    reactions: [
      {
        reactionBody: `You are?!?`,
        username: "john_doe",
      },
      {
        reactionBody: `Me too!`,
        username: "david_freeman",
      },
      {
        reactionBody: `That's awesome!`,
        username: "jane_doe",
      },
    ],
  },
  {
    thoughtText: `I'm thinking...`,
    username: "john_doe",
    reactions: [
      {
        reactionBody: `You are?!?`,
        username: "jane_doe",
      },
      {
        reactionBody: `Me too!`,
        username: "user_name",
      },
      {
        reactionBody: `That's awesome!`,
        username: "david_freeman",
      },
    ],
  },
];

module.exports = { seedUsers, seedThoughts };