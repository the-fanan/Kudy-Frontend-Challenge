<template>
    <div class="triangle-form">
        <div class="form-group">
            <label>Width</label>
            <input class="form-control" name="width" type="number" v-model="width"/>
        </div>

        <div class="form-group">
            <label>Color</label>
            <input class="form-control" name="color" type="color" v-model="color"/>
        </div>

        <div class="form-group">
            <button class="btn btn-primary submit-button" @click="createShape">Create Triangle</button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex";
import maxDimension from '@/utils/maxDimension.js';

export default {
    name: 'triangle-form',
    data()
    {
        return {
            width: 80,
            color: "#276db8",
        }
    },
    methods: {
        ...mapActions({showSnackAlert: 'alert/showSnackAlert', addShape: 'shapes/addShape'}),
        createShape()
        {
          
            let max = maxDimension();
            if (this.width > max || this.height > max) {
                this.showSnackAlert({type: "error", heading: "Invalid Value", messages: ["The width [" + this.width + "] is too large for your screen size. Use value less than " + max + "."]});
                return;
            }

            let shape = {
                top: 100,
                left: 100,
                color: this.color,
                component: 'polygon-shape',
                parameters: {
                    width: parseFloat(this.width),
                    sides: 3,
                }
            }
            this.addShape(shape);
            //reset form
            this.width = 80;
            this.color = "#276db8";
            //emit that shape is created so that mobile viewers can see
            this.$emit('shape-created')
        },
    }
}
</script>