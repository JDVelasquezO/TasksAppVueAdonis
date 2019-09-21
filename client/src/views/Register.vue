<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Registro</h1>
        <v-text-field
          label='Email'
          placeholder='john@mail.com'
          autofocus
          type='email'
          :value='registerEmail'
          @input="setRegisterEmail"
        ></v-text-field>
        
        <v-text-field
          label='Contraseña'
          placeholder='password'
          type='password'
          autocomplete='new-password'
          :value='registerPass'
          @input="setRegisterPass"
        ></v-text-field>

        <!--<v-alert
          type= 'error'
          :value='registerError'
        >
        {{ registerError }}
        </v-alert>-->

        <v-btn color='blue' dark @click="register">
          <v-icon>account_circle</v-icon>
          Registrar
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
      'registerEmail', 'registerPass', 'registerError'
    ])
  },
  methods: {
    ...mapMutations('auth', [
      'setRegisterEmail', 'setRegisterPass'
    ]),
    ...mapActions('auth', [
      'register'
    ]),
  },
}
</script>
