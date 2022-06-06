import axios from "axios";
import CryptoJS from "crypto-js";

var apiConnection = {
    apiUrl: "http://localhost:3001/api",
    chechUser: async function (UserName, Pass) {
        var newURL = this.apiUrl + '/users?UserName=' + UserName + '&Password=' + CryptoJS.SHA256(Pass).toString() + '';
        return axios.post(newURL).then((x) => {

            if (x.data.length > 0) {
                return x.data;
            } {
                return false;
            }

        }).catch((err) => { return err; });
    },
    loginUser: async function (UserName, Pass) {

        var newURL = this.apiUrl + '/users?UserName=' + UserName + '&Password=' + CryptoJS.SHA256(Pass).toString() + '';
        return axios.get(newURL).then((x) => {

            if (x.data.length > 0) {
                return x.data;
            } {
                return false;
            }

        }).catch((err) => { return err; });
    },
    isConnection: async function () {
        return axios.get(this.apiUrl).then((e) => { return e; }).catch((err) => { return (err.code == "ERR_NETWORK") ? false : true; });
    },
    getTrends: async function () {
        return axios.get(this.apiUrl + "/trends").then((x) => { return x; });
    },
    getPosts: async function (trend = false) {
        if (trend) {
            return axios.get(this.apiUrl + "/posts/" + trend).then((x) => { return x; });
        }
        else {
            return axios.get(this.apiUrl + "/posts").then((x) => { return x; });
        }

    },
}



export default apiConnection;