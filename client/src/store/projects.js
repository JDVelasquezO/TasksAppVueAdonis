import http from '../http'
//import router from '../router'
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        projects: [],
        newProjectName: null,
        currentProject: null,
        isEditMode: false
    },
    getters: {

    },
    mutations: {
        setCurrentProject ( state, project ) {
            state.currentProject = project
        },
        setProjectName ( state, name ) {
            state.newProjectName = name
        },
        appendProject ( state, project ) {
            state.projects.push(project)
        },
        setProject ( state, project ) {
            state.projects = project
        },
        setProjectTitle ( state, { project, title } ) {
            project.title = title
        },
        setEditMode ( state, project ) {
            Vue.set(project, 'isEditMode', true)
        },
        unsetEditMode ( state, project ) {
            Vue.set(project, 'isEditMode', false)
        },
        removeProject (state, project ) {
            state.projects.splice(state.projects.indexOf(project), 1)
        }
    },
    actions: {
        createProject ({ commit, state }) {
            return http().post('/projects', {
                title: state.newProjectName,
            }).then(({ data }) => {
                commit('appendProject', data)
                commit('setProjectName', null)
            })
        },
        fetchProject ({ commit }) {
            return http().get('/projects')
                .then(({ data }) => {
                commit('setProject', data)
            })
        },
        saveProject ({ commit }, project) {
            return http().patch(`/projects/${project.id}`, project)
                .then(() => {
                commit('unsetEditMode', project)
            })
        },
        delProject ({ commit }, project) {
            return http().delete(`/projects/${project.id}`, project)
                .then(() => {
                commit('removeProject', project)
            })
        }
    }
}