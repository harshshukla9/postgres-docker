//write a fn to create user table

import { Client } from "pg";
import { findConfigFile } from "typescript";

const client = new Client({
    connectionString: "postgresql://postgres:mypassword@localhost/postgres"
    
})




async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE test (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
    await client.end();
}



createUsersTable();
