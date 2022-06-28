import axios from "axios";

const BASE_PATH = "https://c18a-114-142-171-59.ap.ngrok.io";

export async function getUser(setListUser) {
    try {
       const results = await axios.get(`${BASE_PATH}/list`);
       setListUser(results.data.data);
    //    console.log(results.data.data); 
    } catch (error) {
        console.log("ERROR GET: ", error);
    }
};