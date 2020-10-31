<template>
    <div class="rectangle-form">
        <div class="form-group">
            <label>Width</label>
            <input class="form-control" type="number" v-model="width"/>
        </div>

        <div class="form-group">
            <label>Height</label>
            <input class="form-control" type="number" v-model="height"/>
        </div>

        <div class="form-group">
            <label>Color</label>
            <input class="form-control" type="color" v-model="color"/>
        </div>

        <div class="form-group">
            <button class="btn btn-primary" @click="createShape">Create Rectangle</button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex";
import maxDimension from '@/utils/maxDimension.js';

export default {
    name: 'rectangle-form',
    data()
    {
        return {
            width: 80,
            height: 40,
            color: "#276db8",
        }
    },
    methods: {
        ...mapActions({showSnackAlert: 'alert/showSnackAlert', addShape: 'shapes/addShape'}),
        createShape()
        {
          
            let max = maxDimension();
            if (this.width > max || this.height > max) {
                this.showSnackAlert({type: "error", heading: "Invalid Value", messages: ["One of the values entered [width: " + this.width + ", height:" + this.height + "] is too large for your screen size. Use value less than " + max + "."]});
                return;
            }

            let shape = {
                top: 100,
                left: 100,
                color: this.color,
                component: 'rectangle-shape',
                parameters: {
                    width: parseFloat(this.width),
                    height: parseFloat(this.height),
                }
            }
            this.addShape(shape);
            //reset form
            this.width = 80;
            this.height = 40;
            this.color = "#276db8";
            //emit that shape is created so that mobile viewers can see
            this.$emit('shape-created')
        },
    }
}
</script>