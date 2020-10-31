<template>
    <movable class="draggable elipse shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted" v-b-tooltip.hover title="Double-click to delete">
        <svg :height="shape.parameters.yRadius * 2" :width="shape.parameters.xRadius * 2" @dblclick="deleteShape(shape.key)">
            <ellipse :cx="shape.parameters.xRadius" :cy="shape.parameters.yRadius" :rx="shape.parameters.xRadius" :ry="shape.parameters.yRadius" :fill="shape.color"/>
        </svg> 
    </movable>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: 'elipse-shape',
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