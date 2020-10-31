<template>
    <Shape :shape="shape">
        <svg :height="shape.parameters.radius * 2" :width="shape.parameters.radius * 2">
            <circle :cx="shape.parameters.radius" :cy="shape.parameters.radius" :r="shape.parameters.radius" :fill="shape.color"/>
        </svg> 
    </Shape>
</template>

<script>
import Shape from '@/components/shapes/Shape.vue';

export default {
    name: 'circle-shape',
    props: {
        shape: {
            type: Object,
            required: true,
        }
    },
    components: {
        Shape,
    },
}
</script>