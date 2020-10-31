<template>
    <Shape :shape="shape">
        <svg :width="shape.parameters.width" :height="shape.parameters.width">
            <rect :width="shape.parameters.width" :height="shape.parameters.width" :fill="shape.color"/>
        </svg> 
    </Shape>
</template>

<script>
import Shape from '@/components/shapes/Shape.vue';

export default {
    name: 'rectangle-shape',
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