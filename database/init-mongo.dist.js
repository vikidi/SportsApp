db.createUser({
  user: "<admin-username>",
  pwd: "<admin-password>",
  roles: [
    {
      role: "readWrite",
      db: "<database-name>",
    },
  ],
});
