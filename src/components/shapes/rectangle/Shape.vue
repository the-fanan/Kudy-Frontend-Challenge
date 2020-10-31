<template>
    <movable class="draggable rectangle shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted" v-b-tooltip.hover title="Double-click to delete">
        <svg :width="shape.parameters.width" :height="shape.parameters.height" @dblclick="deleteShape(shape.key)">
            <rect :width="shape.parameters.width" :height="shape.parameters.height" :fill="shape.color"/>
        </svg> 
    </movable>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: 'rectangle-shape',
    props: {
        shape: {
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapMutations({updatePosition: 'shapes/updateShapePosition', deleteShape: 'shapes/deleteShape'}),
        moveCompleted(e)
        {
            this.updatePosition({
                key: this.shape.key,
                top: e.css.top,
                left: e.css.left
            })
        }
    }
}
</script>