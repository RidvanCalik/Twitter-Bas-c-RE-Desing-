import axios from "axios";

var apiConnection = {
    apiUrl: "http://localhost:3001/api",
    isConnection: async function () {
        return axios.get(this.apiUrl).then((x) => { return true; }).catch(() => { return false; });
    },
    getTrends: async function () {
        return axios.get(this.apiUrl + "/trends").then((x) => { return x; });
    },
    getWantsToTrend: async function (trend) {
        if (trend) {
            return axios.get(this.apiUrl + "/posts").then((x) => { return x; });
        }
        else {
            return axios.get(this.apiUrl + "/posts").then((x) => { return x; });
        }

    }
}



export default apiConnection;