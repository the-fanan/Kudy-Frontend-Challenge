<template>
    <Shape :shape="shape">
        <svg :height="shape.parameters.yRadius * 2" :width="shape.parameters.xRadius * 2">
            <ellipse :cx="shape.parameters.xRadius" :cy="shape.parameters.yRadius" :rx="shape.parameters.xRadius" :ry="shape.parameters.yRadius" :fill="shape.color"/>
        </svg> 
    </Shape>
</template>

<script>
import Shape from '@/components/shapes/Shape.vue';

export default {
    name: 'elipse-shape',
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