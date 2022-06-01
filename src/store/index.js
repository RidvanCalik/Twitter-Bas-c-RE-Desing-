import { createStore } from 'vuex';


const state = {
    count: 0,
    errMessage: [
        "kullanıcı adı veya Şifre hatalı",
        "Sunucuya Bağlanamadı",
    ],
    user: {}
}




const getters = {
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
    mutations
})