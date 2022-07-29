import axios from "axios";

const BASE_PATH ="https://c754-118-96-154-102.ap.ngrok.io";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/profilbaca`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}