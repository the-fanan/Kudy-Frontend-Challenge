<template>
    <movable class="draggable polygon shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted" v-b-tooltip.hover title="Double-click to delete">
        <svg :width="shape.parameters.width * 2" :height="shape.parameters.width * 2" @dblclick="deleteShape(shape.key)" style="border: 1px solid red">
            <polygon :points="path" :fill="shape.color"/>
        </svg> 
    </movable>
</template>

<script>
import {mapMutations} from "vuex";

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
            let boxWidth = this.shape.parameters.width * 2;
            let sia = (this.shape.parameters.sides - 2) * 180;//sum of interior angles
            let eia = 180 - (sia / this.shape.parameters.sides);//each interior angle
            eia = eia * (Math.PI/180)
            let x = this.shape.parameters.width - (this.shape.parameters.width / 2);
            let y = boxWidth;
            let x2 = x + this.shape.parameters.width;
            let y2 = y;
            //note that the y is inverted 500 - y during calculation
            let path = x + "," + y + " " + x2 + "," + y2 + " ";
            for (let i = 2; i < this.shape.parameters.sides; i++) {
                let ly = boxWidth - y2;
                let lx2 = x2 + (this.shape.parameters.width * Math.cos(eia))
                let ly2 = ly + (this.shape.parameters.width * Math.sin(eia))
                x2 = lx2;
                y2 = boxWidth - ly2;
                path += x2 + "," + y2 + " ";

            }
            return path
        },
    },
    methods: {
        ...mapMutations({updatePosition: 'shapes/updateShapePosition', deleteShape: 'shapes/deleteShape'}),
        moveCompleted(e)
        {
            this.updatePosition({
                key: this.shape.key,
                top: e.css.top,
                left: e.css.left
            })
        },
    }
}
</script>