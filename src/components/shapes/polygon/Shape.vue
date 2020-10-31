<template>
    <Shape :shape="shape">
        <svg :width="radius * 2" :height="radius * 2">
            <polygon :points="path" :fill="shape.color"/>
        </svg> 
    </Shape>
</template>

<script>
import Shape from '@/components/shapes/Shape.vue';

export default {
    name: 'polygon-shape',
    props: {
        shape: {
            type: Object,
            required: true,
        }
    },
    computed: {
        path: function ()
        {
            let boxWidth = this.radius * 2;
            let sia = (this.shape.parameters.sides - 2) * 180;//sum of interior angles
            let eia = 180 - (sia / this.shape.parameters.sides);//each interior angle
            eia = eia * (Math.PI/180)
            let seia = eia;
            let x = this.radius - (this.shape.parameters.width / 2);
            let y = boxWidth;
            let x2 = x + this.shape.parameters.width;
            let y2 = y;
            //note that the y is inverted hence use of 500 - y during calculation
            let path = x + "," + y + " " + x2 + "," + y2 + " ";
            for (let i = 2; i < this.shape.parameters.sides; i++) {
                let ly = boxWidth - y2;
                let lx2 = x2 + (this.shape.parameters.width * Math.cos(eia))
                let ly2 = ly + (this.shape.parameters.width * Math.sin(eia))
                x2 = lx2;
                y2 = boxWidth - ly2;
                path += x2 + "," + y2 + " ";
                eia += seia
            }
            return path
        },
        radius: function ()
        {
            let ang = 180 / this.shape.parameters.sides;
            ang = ang * (Math.PI/180);//convert angle to radians
            let radius = this.shape.parameters.width / (2 * Math.sin(ang));
            return radius;
        }
    },
    components: {
        Shape,
    },
}
</script>