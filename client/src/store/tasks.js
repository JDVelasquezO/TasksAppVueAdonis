import http from '../http'
//import router from '../router'
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        tasks: [],
        newTaskName: null,
        description: null,
        isEditMode: false
    },
    getters: {

    },
    mutations: {
        setTasks ( state, tasks ) {
            state.tasks = tasks
        },
        setNewTaskName ( state, newTaskName ) {
            state.newTaskName = newTaskName
        },
        appendTask (state, task) {
            state.tasks.push(task)
        },
        setTaskDescription ( state, { task, description } ) {
            task.description = description
        },
        setEditMode ( state, task ) {
            Vue.set(task, 'isEditMode', true)
        },
        unsetEditMode ( state, task ) {
            Vue.set(task, 'isEditMode', false)
        },
        removeTask ( state, task) {
            state.tasks.splice(state.tasks.indexOf(task), 1)
        },
        toggleCompleted (state, task) {
            task.completed = !task.completed
        }
    },
    actions: {
        fetchTaskForCurrentProject ({ commit }, project ) {
            return http().get(`/projects/${project.id}/tasks`, project)
                .then(({ data }) => {
                commit('setTasks', data)
            })
        },
        createTask ({ commit, state, rootState }) {
            let idTask = rootState.projects.currentProject.id
            return http().post(`/projects/${idTask}/tasks`, {
                description: state.newTaskName
            }).then(({ data }) => {
                commit('appendTask', data)
                commit('setNewTaskName', null)
            })
        },
        saveTask ({ commit }, task) {
            return http().patch(`/tasks/${task.id}`, task)
                .then(() => {
                commit('unsetEditMode', task)
            })
        },
        delTask ({ commit }, task) {
            return http().delete(`/tasks/${task.id}`, task)
                .then(() => {
                commit('removeTask', task)
            })
        },
    }
}