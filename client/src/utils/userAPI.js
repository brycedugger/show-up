import axios from "axios";

export default { // Gets the user info
    getUser: () => {
        return axios.get("/api/profile");
    },

    deleteUser: (userId) => {
        return axios.delete("/api/profile" + userId);
    },

    saveUser: (firstName, lastName, userName) => {
        return axios.post("/api/proile", firstName, lastName, userName);
    },

    // Updates user info to the db
    updateUser: (firstName, lastName, userName) => {
        return axios.post(`/api/profile`, firstName, lastName, userName);
    }
};
