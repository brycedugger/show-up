import axios from "axios";

export default { // Gets the user info
    getUser: () => {
        return axios.get("/api/user");
    },

    getBookmarked: (userId) => {
        return axios.get("/api/user/bookmarked/" + userId);
    },

    getCreated: (userId) => {
        return axios.get("/api/user/created/" + userId);
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
