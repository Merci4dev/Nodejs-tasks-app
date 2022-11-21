// Setting the connection to mongodb

import {connect} from "mongoose";
import MONGODB_URI from "../config"


(async() =>{
    try {
         const db = await connect('mongodb+srv://mercitest0:Mercir4test007@mercitest0.vmlftn5.mongodb.net/test');
        // const db = await connect(MONGODB_URI,  { useNewUrlParser: true, useCreateIndex: true });

        console.log("DB is connected to:", db.connection.name);

    } catch (error) {
        
        console.error("Error With the connection:", error)
    }
})();