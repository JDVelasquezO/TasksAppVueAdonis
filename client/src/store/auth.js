import http from '../http'
import router from '../router'

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPass: null,
        registerError: null,
        loginEmail: null,
        loginPass: null,
        loginError: null,
        token: null
    },
    getters: {
        isLoggedIn ( state ) {
            return !!state.token // Convierte el token a boolenao y lo hace verdadero
        }
    },
    actions: {
        register ({ commit, state }) {
            return http().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPass
            }).then(({ data }) => {
                commit('setToken', data.token)
                router.push('/')
            }).catch(() => {
                commit('setRegisterError', 'Ha ocurrido un error, verifica bien tus datos')
            })
        },
        login ({ commit, state }) {
            return http().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPass
            }).then(({ data }) => {
                commit('setToken', data.token)
                router.push('/')
            }).catch(() => {
                commit('setLoginError', 'Ha ocurrido un error, verifica bien tus datos')
            })
        },
        logout ({ commit }) {
            commit('setToken', null)
            router.push('/login')
        }
    },
    mutations: {
        setToken( state, token ) {
            state.token = token
        },
        setRegisterError ( state, error ) {
            state.registerError = error
        },
        setRegisterEmail ( state, email ) {
            state.registerEmail = email
        },
        setRegisterPass ( state, pass ) {
            state.registerPass = pass
        },
        setLoginError ( state, error ) {
            state.loginError = error
        },
        setLoginEmail ( state, email ) {
            state.loginEmail = email
        },
        setLoginPass ( state, pass ) {
            state.loginPass = pass
        }
    }
}