<template>
    <movable class="draggable rectangle shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted">
        <svg :width="shape.parameters.width" :height="shape.parameters.height">
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
        ...mapMutations({updatePosition: 'shapes/updateShapePosition'}),
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