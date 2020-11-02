<template>
    <b-row class="main shapes">
        <component v-for="shape in createdShapes" v-bind:is="shape.component" :shape="shape" :key="shape.key"></component>
    </b-row>
</template>

<script>
import {mapState} from 'vuex';
import CircleShape from '@/components/shapes/circle/Shape.vue';
import ElipseShape from '@/components/shapes/elipse/Shape.vue';
import RectangleShape from '@/components/shapes/rectangle/Shape.vue';
import SquareShape from '@/components/shapes/square/Shape.vue';
import PolygonShape from '@/components/shapes/polygon/Shape.vue';

export default {
    computed: {
        ...mapState({createdShapes: state => state.shapes.created}),
    },
    mounted()
    {
        //display all the shapes in shapes.created
    },
    components: {
        CircleShape,
        ElipseShape,
        RectangleShape,
        SquareShape,
        PolygonShape
    }
}
</script>