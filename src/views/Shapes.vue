<template>
    <b-row class="main shapes">
        <CircleShape :shape="circle"/>
    </b-row>
</template>

<script>
import CircleShape from '@/components/shapes/circle/Shape.vue';

export default {
    data(){
        return {
            circle: {
                top: 100,
                left: 50,
                color: '#276db8',
                component: 'circle-shape',
                key: 'circ-shape-1',
                parameters: {
                    radius: 50,
                }
            }
        }
    },
    mounted()
    {
        //display all the shapes in shapes.created
    },
    components: {
        CircleShape
    }
}
</script>