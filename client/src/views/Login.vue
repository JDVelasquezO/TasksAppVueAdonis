<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Login</h1>
        <v-text-field
          label='Email'
          placeholder='john@mail.com'
          autofocus
          type='email'
          :value='loginEmail'
          @input="setLoginEmail"
        ></v-text-field>
        
        <v-text-field
          label='Contraseña'
          placeholder='password'
          type='password'
          autocomplete='new-password'
          :value='loginPass'
          @input="setLoginPass"
        ></v-text-field>

        <!--<v-alert
          type= 'error'
          :value='loginError'
        >
        {{ loginError }}
        </v-alert>-->

        <v-btn color='blue' dark @click="login">
          <v-icon>fingerprint</v-icon>
          Entrar
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', [
      'loginEmail', 'loginPass', 'loginError'
    ])
  },
  methods: {
    ...mapMutations('auth', [
      'setLoginEmail', 'setLoginPass'
    ]),
    ...mapActions('auth', [
      'login'
    ]),
  },
}
</script>
