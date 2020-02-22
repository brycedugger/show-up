import axios from "axios";

export default {

    // post route that sends user login information to the server
    login: (loginObj) => {
        return axios.post("/login", loginObj);
    },

    // post route that sends user sign up info to the server
    signup: (signupObj) => {
        return axios.post("/signup", signupObj);
    },

    // get route that sends our token to the server to get all information from 
    //db.users as a response.

    getUser: (token) => {
        return axios.get("/api/user/", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    },

    updateUser: (obj) => {
        return axios.put("/api/eUser/" + obj._id, obj);
    },

    createdEvent: (obj) => {
        return axios.put("/api/user/" + obj._id, obj);
    },

    deleteUser: (obj) => {
        return axios.delete("/api/user/" + obj._id);
    },

    // Bookmarking event to save event of interest to the user page
    bookmarkEvent: (req) => {
        return axios.put("/api/bookmark", req);
    }
};
