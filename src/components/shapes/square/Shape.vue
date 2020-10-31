<template>
    <movable class="draggable square shape" :posTop="shape.top" :posLeft="shape.left" @complete="moveCompleted" v-b-tooltip.hover title="Double-click to delete">
        <v-touch @tap="handleDoubleTap(shape.key)">
        <svg :width="shape.parameters.width" :height="shape.parameters.width" @dblclick="deleteShape(shape.key)">
            <rect :width="shape.parameters.width" :height="shape.parameters.width" :fill="shape.color"/>
        </svg> 
        </v-touch>
    </movable>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: 'rectangle-shape',
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