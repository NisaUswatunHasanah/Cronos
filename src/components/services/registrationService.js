import axios from "axios";


const BASE_PATH ="https://e8fa-125-160-104-4.ap.ngrok.io";

export async function userRegistration(email, password, navigate) {
    const payload = {
        email:email,
        password:password
    };

    // await axios.post(`${BASE_PATH}/register`, payload)
    // .then((results) => {
    //     appNotification("top","Registration Successfull", "Please check your email for registration confirmation")
    // })
    // .then(() => {
    //     navigate("/kelengkapanData");
    // })
    // .catch((error) => {
    //     console.log("REGISTRATION ERROR", error);
    // })

    try {
        const registrationRersults = await axios.post(`${BASE_PATH}/register`, payload);
        if (registrationRersults.status === 200) {
            
            navigate("/KelengkapanData");
        }
    } catch (error) {
        console.log(error.response.data);
    }
    console.log("USER REGISTRATION", payload);
};