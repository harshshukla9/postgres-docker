import { Client } from "pg";
import { findConfigFile } from "typescript";

const client = new Client({
    connectionString: "postgresql://postgres:mypassword@localhost/postgres"
    
})


console.log(client)


async function insertData(){

    try{
    await client.connect();
    const insertQuery = "INSERT INTO test (username, email, password) VALUES ('username555653', 'u566@example.com', 'userord');";
        
        
     const result = await client.query(insertQuery);
     console.log("succesful",result)   
    }
    catch(e)
    {
        console.log("unsuccesfull"+ e)
    }
    finally{
        await client.end();
    }
}


insertData();