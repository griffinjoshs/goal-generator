const bcrypt = require('bcrypt');

class User {
  constructor(id, name, username, email, password, phone) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }

  static async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }
}

const users = [
  {
    id: "1679865982065",
    firstName: "Griffin",
    lastName: "Surett",
    email: "realgriffjoshs@gmail.com",
    username: "griffinjoshs",
    password: "$2b$10$3i2G1//dJtgAyK0bOZfZ..HSIlDv40PjQBukXGINUiG6inmTOnyl2",
    phone: "7329391309",
  },
];

module.exports = {
  User,
  users,
};
