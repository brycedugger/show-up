import axios from "axios";

export default { 

    signup: (username, password) => {
        return axios.post('/signup', { username, password });
    },
    
    login: (email, firstName, lastName, username, password) => {
        return axios.post('/login', { email, firstName, lastName, username, password });
    },

    // Gets the user info
    getUser: () => {
        return axios.get("/api/user");
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
