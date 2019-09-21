<template>
    <div>
        <Panel title="Tareas">
          <div class="mb-2" v-for="(task) in tasks" :key="task.id">
              <EditProject
                :isEditMode='!task.isEditMode'
                :title="task.description"
                :record='task'
                @onInput="setTaskDescription({
                    task,
                    description: $event
                })"
                @onEdit='setEditMode(task)'
                @onSave='saveTask(task)'
                @onDel='delTask(task)'>
                <v-icon
                    @click="checkClicked(task)"
                >
                    {{ task.completed ? 'check_box' : 'check_box_outline_blank' }}
                </v-icon>
                </EditProject>
          </div>
          <CreateProject 
                placeholder='Crear Tareas'
                @onInput='setNewTaskName'
                :value='newTaskName'
                @create='createTask'
            />
        </Panel>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import CreateProject from '@/components/CreateProject.vue'
import EditProject from '@/components/EditProject.vue'

    export default {
        components: {
            CreateProject,
            EditProject
        },
        computed: {
            ...mapState('tasks', [
                'tasks',
                'newTaskName',
                'isEditMode'
            ])
        },
        methods: {
            ...mapActions('tasks', [
                'createTask',
                'delTask',
                'saveTask',
            ]),
            ...mapMutations('tasks', [
                'setNewTaskName',
                'setTaskDescription',
                'setEditMode',
                'toggleCompleted'
            ]),
            checkClicked(task) {
                this.toggleCompleted(task)
                this.saveTask(task)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>