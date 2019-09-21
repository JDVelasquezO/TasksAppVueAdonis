<template>
    <div>
        <v-toolbar color='blue' dark fixed>
            <v-toolbar-title class="mr-4">
                Vue Adonis
            </v-toolbar-title>
            <v-btn to="/" flat><v-icon>home</v-icon></v-btn>
            <v-toolbar-items>
                <v-btn flat>
                <v-icon>playlist_add_check</v-icon>
                Proyectos
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/register" flat class="pr-2" v-if="!isLoggedIn">
                    <v-icon class="mr-2">account_box</v-icon>
                    Registro
                </v-btn>
                <v-btn to="/login" flat class="pr-2" v-if="!isLoggedIn">
                    <v-icon class="mr-2">fingerprint</v-icon>
                    Login
                </v-btn>
                <v-btn flat class="pr-2" v-if="isLoggedIn" @click="logout()">
                    <v-icon class="mr-2">exit_to_app</v-icon>
                    Logout
                </v-btn>
                <v-btn flat class="pr-2">
                    <v-icon class="mr-2">ondemand_video</v-icon>
                    Making of
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters('auth', [
                'isLoggedIn'
            ])
        },
        methods: {
            ...mapActions('auth', [
                'logout'
            ])
        },
    }
</script>

<style lang="scss" scoped>

</style>