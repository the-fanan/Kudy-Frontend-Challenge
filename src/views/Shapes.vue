<template>
    <b-row class="main shapes">
        <CircleShape :shape="shape" v-for="(shape, index) in allShapes" :key="index"/>
    </b-row>
</template>

<script>
import CircleShape from '@/components/shapes/circle/Shape.vue';

export default {
    data(){
        return {
            allShapes: [
                {
                    top: 100,
                    left: 50,
                    color: '#276db8',
                    component: 'circle-shape',
                    key: 'circ-shape-1',
                    parameters: {
                        radius: 50,
                    }
                },
                {
                    top: 230,
                    left: 50,
                    color: '#276db8',
                    component: 'circle-shape',
                    key: 'circ-shape-2',
                    parameters: {
                        radius: 50,
                    }
                },
                {
                    top: 130,
                    left: 180,
                    color: '#276db8',
                    component: 'circle-shape',
                    key: 'circ-shape-2',
                    parameters: {
                        radius: 50,
                    }
                },
            ],
        }
    },
    mounted()
    {
        //display all the shapes in shapes.created
        let v = this;
        setTimeout(() => {
            v.allShapes.push({
                    top: 430,
                    left: 380,
                    color: 'red',
                    component: 'circle-shape',
                    key: 'circ-shape-2',
                    parameters: {
                        radius: 80,
                    }
                })
        }, 3000);
    },
    components: {
        CircleShape
    }
}
</script>