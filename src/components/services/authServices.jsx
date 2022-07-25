import axios from "axios";

const BASE_PATH ="https://4f8e-2404-c0-7140-00-abe5-7e57.ap.ngrok.io";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/read/1`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}