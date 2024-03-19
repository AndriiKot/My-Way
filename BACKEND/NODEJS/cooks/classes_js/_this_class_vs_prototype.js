// // Classes
// class User {
//   constructor(id) {
//     this.id = id;
//   }
//   load(){
//     const query = 'SELECT * FROM user WHERE id = ?';
//     sql.query(query, this.id, (err, user) => {
//       this.name = users[0].name;
//     })
//   }
// }

class User {
  constructor(id) {
    this.id = id;
  }
  console_this() {
    console.dir(this);
  }
  x = () => {
    console.dir(this);
  };
}

new User(12).console_this();
new User(11).x();
