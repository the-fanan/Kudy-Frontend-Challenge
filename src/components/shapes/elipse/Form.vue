<template>
    <div class="elipse-form">
        <div class="form-group">
            <label>X Radius</label>
            <input class="form-control" name="x-radius" type="number" v-model="xRadius"/>
        </div>

        <div class="form-group">
            <label>Y Radius</label>
            <input class="form-control" name="y-radius" type="number" v-model="yRadius"/>
        </div>

        <div class="form-group">
            <label>Color</label>
            <input class="form-control" name="color" type="color" v-model="color"/>
        </div>

        <div class="form-group">
            <button class="btn btn-primary submit-button" @click="createShape">Create Elipse</button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex";
import maxDimension from '@/utils/maxDimension.js';

export default {
    name: 'elipse-form',
     data()
    {
        return {
            xRadius: 20,
            yRadius: 10,
            color: "#276db8",
        }
    },
    methods: {
        ...mapActions({showSnackAlert: 'alert/showSnackAlert', addShape: 'shapes/addShape'}),
        createShape()
        {
          
            let max = maxDimension();
            if (this.xRadius > max || this.yRadius > max) {
                this.showSnackAlert({type: "error", heading: "Invalid Value", messages: ["One of the radi entered [x: " + this.xRadius + ", y:" + this.yRadius + "] is too large for your screen size. Use value less than " + max + "."]});
                return;
            }

            let shape = {
                top: 100,
                left: 100,
                color: this.color,
                component: 'elipse-shape',
                parameters: {
                    xRadius: parseFloat(this.xRadius),
                    yRadius: parseFloat(this.yRadius),
                }
            }
            this.addShape(shape);
            //reset form
            this.xRadius = 20;
            this.yRadius = 10;
            this.color = "#276db8";
            //emit that shape is created so that mobile viewers can see
            this.$emit('shape-created')
        },
    }
}
</script>