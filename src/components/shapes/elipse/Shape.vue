<template>
    <movable class="draggable elipse shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted" v-b-tooltip.hover title="Double-click to delete">
        <v-touch @tap="handleDoubleTap(shape.key)">
            <svg :height="shape.parameters.yRadius * 2" :width="shape.parameters.xRadius * 2" @dblclick="deleteShape(shape.key)">
                <ellipse :cx="shape.parameters.xRadius" :cy="shape.parameters.yRadius" :rx="shape.parameters.xRadius" :ry="shape.parameters.yRadius" :fill="shape.color"/>
            </svg> 
        </v-touch>
    </movable>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: 'elipse-shape',
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