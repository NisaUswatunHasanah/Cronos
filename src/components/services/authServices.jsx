import axios from "axios";

const BASE_PATH ="https://ef2c-114-142-170-21.ap.ngrok.io";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/formbaca`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}
export async function postUser(dataUser, setDataUser, setMessage) {
    const payload = {
        organizationname: dataUser.organizationname,
        country: dataUser.country,
        email: dataUser.email,
        username: dataUser.username,
        password: dataUser.password,
        province: dataUser.province,
        city: dataUser.city,
        address: dataUser.address,
        postalcode: dataUser.postalcode,
        currency: dataUser.currency,
        language: dataUser.language,
        date: dataUser.date

    };

    try {
        const results = await axios.post(`${BASE_PATH}/formtambah`, payload);
        if (results.status === 200) {
            setDataUser({organizationname: "", country: "", email: "",
            username: "",password:"",province:"",city:"",address:"",postalcode:"",currency:"",language:"",date:""});
            setMessage("New User Added Successfully !!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
};