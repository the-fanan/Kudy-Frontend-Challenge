<template>
    <movable class="draggable polygon shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted" v-b-tooltip.hover title="Double-click to delete">
        <v-touch @tap="handleDoubleTap(shape.key)">
            <svg :width="radius * 2" :height="radius * 2" @dblclick="deleteShape(shape.key)">
                <polygon :points="path" :fill="shape.color"/>
            </svg> 
        </v-touch>
    </movable>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: 'polygon-shape',
    data(){
        return {
            taps: 0,
        }
    },
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
            //note that the y is inverted 500 - y during calculation
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
        handleDoubleTap(key)
        {
            //double tap code gotten from https://stackoverflow.com/a/56046910/7715823
            this.taps++;
            if (this.taps === 1) {          
                var self = this;
                setTimeout(function() {
                    switch(self.taps) { 
                        case 1:
                            //do nothing
                            break;
                        default:
                            self.deleteShape(key);
                    }
                    self.taps = 0;
                }, 200);  
            }
        }
    }
}
</script>