<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Project/>
      </v-flex>

      <v-flex xs8 class="pl-4" v-if="currentProject">
        <Task/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Project from '@/components/Project.vue'
import Task from '@/components/Task.vue'
import { mapGetters, mapState } from 'vuex';
import router from '../router'

export default {
  name: 'projects',
  components: {
    Project,
    Task
  },
  mounted() {
    if ( !this.isLoggedIn ) {
      return router.push('/login')
    }
  },
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn'
    ]),
    ...mapState('projects', [
      'currentProject'
    ])
  },
}
</script>
