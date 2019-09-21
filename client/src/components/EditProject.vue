<template>
    <div>
        <v-layout row wrap>
            <v-flex xs9 class="text-xs-left fonts">
                <slot></slot>
                <span
                    class="mouseProject"
                    @click="$emit('onClick')"
                    v-if="isEditMode">
                {{ title }}
                </span>
                <v-text-field
                    autofocus
                    v-if="!isEditMode"
                    :value='title'
                    @input="$emit('onInput', $event)"
                    @keypress.enter="$emit('onSave')">
                {{ title }}
                </v-text-field>
            </v-flex>
            <v-flex xs3>
                <v-icon v-if="isEditMode" 
                @click="$emit('onEdit')" color='green' 
                class='mouse'>edit</v-icon>
                <v-icon v-if="!isEditMode" 
                @click="$emit('onSave')" color='green' 
                class='mouse'>check</v-icon>
                <v-icon @click="$emit('onDel')" color='red' class="mouse ml-3">clear</v-icon>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        props: [
            'isEditMode',
            'title',
            'record'
        ],
    }
</script>

<style lang="scss" scoped>
.mouse {
    cursor: pointer;
    padding: 3px;
}

.mouse:hover {
    background-color: #EEEEEE;
    border-radius: 50%;
}

.mouseProject {
    cursor: pointer;
    padding: 3px;
}

.mouseProject:hover {
    background-color: #EEEEEE;
    border-radius: 5%;
}

.fonts {
    font-size: 16px;
}
</style>