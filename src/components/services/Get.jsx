import axios from "axios";

const BASE_PATH ="https://bf40-2404-c0-7050-00-b30e-6bc.ap.ngrok.io";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/profilbaca`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}