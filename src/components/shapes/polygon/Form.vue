<template>
    <div class="polygon-form">
        <div class="form-group">
            <label>Width</label>
            <input class="form-control" type="number" v-model="width"/>
        </div>

        <div class="form-group">
            <label>Sides</label>
            <input class="form-control" type="number" v-model="sides" min="5" max="30" step="1"/>
        </div>

        <div class="form-group">
            <label>Color</label>
            <input class="form-control" type="color" v-model="color"/>
        </div>

        <div class="form-group">
            <button class="btn btn-primary" @click="createShape">Create Polygon</button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex";
import maxDimension from '@/utils/maxDimension.js';

export default {
    name: 'polygon-form',
    data()
    {
        return {
            width: 80,
            sides: 5,
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

            this.sides = parseInt(this.sides);
            if (this.sides > 30 || this.sides < 5) {
                this.showSnackAlert({type: "error", heading: "Invalid Value", messages: ["The number of sides [" + this.sides + "] is not within the permitted. Max number of sides allowed is 30 and minimum number of sides allowed is 5"]});
                return;
            }

            let shape = {
                top: 100,
                left: 100,
                color: this.color,
                component: 'polygon-shape',
                parameters: {
                    width: parseFloat(this.width),
                    sides: this.sides,
                }
            }
           
            this.addShape(shape);
            //reset form
            this.width = 80;
            this.sides = 5;
            this.color = "#276db8";
            //emit that shape is created so that mobile viewers can see
            this.$emit('shape-created')
        },
    }
}
</script>