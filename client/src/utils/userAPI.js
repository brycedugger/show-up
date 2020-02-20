import axios from "axios";

export default { 

    // post route that sends user login information to the server
    login: (loginObj) => {
        return axios.post("/login", loginObj);
    },
    
    // post route that sends user sign up info to the server
    signup: (signupObj) => {
        return axios.post("/signup",  signupObj);
    },

    // get route that sends our token to the server to get all information from 
    //db.usersas a response.

    getUser: (token) => {
        console.log(token)
        return axios.get("/api/user/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
    },

     // get route that sends our token to the server to update the created array
     // with the event id of the event the user created

    createdEvent: (obj) => {
        const token = obj.token
        return axios.put("/api/user/" + obj._id, { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    },

    deleteUser: (userId) => {
        return axios.delete("/api/user" + userId);
    },

    saveUser: (firstName, lastName, userName) => {
        return axios.post("/api/user", firstName, lastName, userName);
    },

    // Updates user info to the db
    updateUser: (firstName, lastName, userName) => {
        return axios.post(`/api/user`, firstName, lastName, userName);
    }
};
