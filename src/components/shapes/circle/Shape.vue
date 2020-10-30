<template>
    <movable class="draggable circle shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted">
        <svg height="100" width="100">
            <circle cx="50" cy="50" :r="shape.parameters.radius" :fill="shape.color"/>
        </svg> 
    </movable>
</template>

<script>
export default {
    name: 'circle-shape',
    data(){
        return {
            initialRadius: 0,
        }
    },
    mounted()
    {
    },
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