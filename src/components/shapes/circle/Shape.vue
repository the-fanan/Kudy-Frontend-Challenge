<template>
    <movable class="draggable circle shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted">
        <svg :height="shape.parameters.radius * 2" :width="shape.parameters.radius * 2">
            <circle :cx="shape.parameters.radius" :cy="shape.parameters.radius" :r="shape.parameters.radius" :fill="shape.color"/>
        </svg> 
    </movable>
</template>

<script>
export default {
    name: 'circle-shape',
    props: {
        shape: {
            type: Object,
            required: true,
        }
    },
    methods: {
        moveCompleted(e)
        {
            //e.css.top
            //e.css.left

        }
    }
}
</script>