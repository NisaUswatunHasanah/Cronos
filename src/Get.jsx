import axios from "axios";

const BASE_PATH = "https://e8fa-125-160-104-4.ap.ngrok.io";

export async function getFeatures(setListFeatures) {
    try {
       const results = await axios.get(`${BASE_PATH}/profilbaca`);
       setListFeatures(results.data.data);
    //    console.log(results.data.data); 
    } catch (error) {
        console.log("ERROR GET: ", error);
    }
};