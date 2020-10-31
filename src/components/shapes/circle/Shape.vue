<template>
    <movable class="draggable circle shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted" v-b-tooltip.hover title="Double-click to delete">
        <svg :height="shape.parameters.radius * 2" :width="shape.parameters.radius * 2" @dblclick="deleteShape(shape.key)">
            <circle :cx="shape.parameters.radius" :cy="shape.parameters.radius" :r="shape.parameters.radius" :fill="shape.color"/>
        </svg> 
    </movable>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: 'circle-shape',
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