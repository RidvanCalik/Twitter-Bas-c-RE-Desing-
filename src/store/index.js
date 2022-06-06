import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const state = {
    count: 0,
    errMessage: [
        "kullanıcı adı veya Şifre hatalı",
        "Sunucuya Bağlanamadı",
        "Kullanıcı girişi hatası lütfen tekrar giriş yapın"
    ],
    user: {}
}




const getters = {
    getUser: state => state.user.hasOwnProperty("userID") ? state.user : false,
    _itsAuthenticated: state => state.user !== null,
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
const mutations = {
    setUser(state, user) {
        delete user?.userPass;
        state.user = user;
    }
}

export default createStore({
    state,
    getters,
    mutations,
    plugins: [createPersistedState()],
})