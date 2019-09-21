<template>
    <div>
        <Panel title="Proyectos">
            <div class="mb-2" v-for="(project) in projects" :key="project.id">
                <EditProject
                    :isEditMode='!project.isEditMode'
                    :title="project.title"
                    :record='project'
                    @onInput="setProjectTitle({
                        project,
                        title: $event
                    })"
                    @onClick="projectClicked(project)"
                    @onEdit='setEditMode(project)'
                    @onSave='saveProject(project)'
                    @onDel='delProject(project)' />
            </div>
            <CreateProject 
            placeholder='Crear Proyectos'
            @onInput='setProjectName'
            :value='newProjectName'
            @create='createProject'
            />
        </Panel>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    import CreateProject from '@/components/CreateProject.vue'
    import EditProject from '@/components/EditProject.vue'

    export default {
        components: {
            CreateProject,
            EditProject
        },
        computed: {
            ...mapState('projects', [
                'newProjectName',
                'projects',
                'isEditMode'
            ])
        },
        methods: {
            ...mapMutations('projects', [
                'setProjectName',
                'setEditMode',
                'setProjectTitle',
                'setCurrentProject'
            ]),
            ...mapActions('projects', [
                'createProject',
                'fetchProject',
                'saveProject',
                'delProject'
            ]),
            ...mapActions('tasks', [
                'fetchTaskForCurrentProject'
            ]),
            projectClicked ( project ) {
                this.setCurrentProject(project)
                this.fetchTaskForCurrentProject(project)
            }
        },
        mounted() {
            this.fetchProject()
        },
    }
</script>

<style lang="css" scoped>

</style>