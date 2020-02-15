import axios from "axios";

export default { 

    login: (loginObj) => {
        return axios.post("/login", loginObj);
    },
    
    signup: (signupObj) => {
        return axios.post("/signup",  signupObj);
    },

    getUser: (token) => {
        console.log("token" + (JSON.stringify(token)))
        return axios.get("/api/user/", {
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
