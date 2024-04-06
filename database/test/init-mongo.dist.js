db.createUser({
  user: "testadminuser",
  pwd: "testadminpass",
  roles: [
    {
      role: "readWrite",
      db: "tests",
    },
  ],
});
