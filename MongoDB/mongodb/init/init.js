db.createUser({
  user: 'pb',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'mydatabase'
    }
  ]
});
