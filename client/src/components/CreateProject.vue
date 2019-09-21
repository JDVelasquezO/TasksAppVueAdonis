<template>
    <div>
        <form @submit.prevent="$emit('create')">
            <v-text-field
                :placeholder='placeholder'
                autofocus
                :value="value"
                @input="$emit('onInput', $event)"
            ></v-text-field>
            <v-btn color='blue' class="mt-2" dark>
                <v-icon class="mr-2">add_circle</v-icon>
                Crear
            </v-btn>
        </form>
    </div>
</template>

<script>
    export default {
        props: [
            'placeholder',
            'value'
        ]
    }
</script>

<style lang="scss" scoped>

</style>