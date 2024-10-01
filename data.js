import * as sqlite  from 'sqlite';
import sqlite3 from 'sqlite3';

console.log(sqlite3);

async function Connection(){
  const db = await sqlite.open({
    filename : './sql/database.db',
    driver : sqlite3.Database
  })
//   const createtable = 'CREATE TABLE Mayank (id INTEGER PRIMARY KEY AUTOINCREMENT , Name TEXT NOT NULL , Email TEXT NOT NULL , Phone INTEGER NOT NULL , Password TEXT NOT NULL ) '
//   db.exec(createtable);
  return db;
}
export const insert = async(fn,em,pn,ps)=>{
    try {
        console.log("zconnection DONe");
        const db =  await Connection()
        console.log(db);
        
        const inserttable = 'INSERT INTO Mayank (Name,Email,Phone,Password) VALUES(?,?,?,?)'
        const data = await db.run(inserttable,[fn,em,pn,ps])
        console.log("Inserted ...");
       await db.close();
    } catch (error) {
        console.log("Error", error.message);

    }
}




// data().catch((db) => db.close())