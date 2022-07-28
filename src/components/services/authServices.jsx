import axios from "axios";

const BASE_PATH ="4321cf8d-b51c-46f6-9667-52048c5d34ec";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/readserver`);
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
export async function postUserPassword(dataUser, setDataUser, setMessage) {
    const payload = {
       
        email: dataUser.email,
        password: dataUser.password,
       

    };

    try {
        const results = await axios.post(`${BASE_PATH}/addserver`, payload);
        if (results.status === 200) {
            setDataUser({email:"",password:""});
            setMessage("New User Added Successfully !!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
};