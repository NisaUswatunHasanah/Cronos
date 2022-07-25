import axios from "axios";

const BASE_PATH ="https://1994-2404-c0-7450-00-b577-91f5.ap.ngrok.io";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/registerbaca`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}