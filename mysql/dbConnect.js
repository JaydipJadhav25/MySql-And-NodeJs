import mysql from "mysql2/promise";

//1.connect to mysql server
//2.create database
//3 . create a table
//4 then perform CURD opreation

//1.
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "demo",
});

console.log("db connected successfully !");

// await db.execute(`create database demo;`);

console.log(await db.execute("SHOW DATABASES"));

// const [rows, fields] = await db.execute("SHOW DATABASES");

// console.log(rows);

//select database or use database
// await db.execute("USE demo");

console.log(await db.execute("SELECT DATABASE();"));

//create table
// await db.execute(`CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY,
//         username VARCHAR(100) NOT NULL,
//         email VARCHAR(100) NOT NULL
//   )`);

//insert data
//1 . this is not recommenting = inline statement
// await db.execute(`insert into users(username , email) values('jaydip' , 'jay@gmail.com')`);

//2 . use prepar statement

await db.execute("insert into users(username , email) values(? ,?)", [
  "deep",
  "deep@gmail.com",
]);

//show data
// console.log(await db.execute('select * from users'));

const [row] = await db.execute("select * from users");

console.log(row);

//update

try {
  // const [rows] = await db.execute(
  //   'update users set username ="deep2" where email="deep@gmail.com"',
  // );



  // console.log("ALL USers: ", rows);




   const [rows] = await db.execute(
    'update users set username = ? where username=?',["new" , "deep2"]
  );



  console.log("ALL USers: ", rows);


  const [data] = await db.execute("select * from users");

console.log(data);



} catch (error) {
  console.log(error);
}

//delete

const [rows] = await db.execute('delete from users where username="deep"');

console.log(rows);

const [data] = await db.execute("select * from users");

console.log(data);
