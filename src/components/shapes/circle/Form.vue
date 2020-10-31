<template>
    <div class="circle-form">
        <div class="form-group">
            <label>Radius (cm)</label>
            <input class="form-control" type="number" v-model="radius"/>
        </div>

        <div class="form-group">
            <label>Color</label>
            <input class="form-control" type="color" v-model="color"/>
        </div>

        <div class="form-group">
            <button class="btn btn-primary" @click="createShape">Create Circle</button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex";
import maxDimension from '@/data/maxDimension.js';

export default {
    name: 'circle-form',
    data()
    {
        return {
            radius: 10,
            color: "#276db8",
        }
    },
    methods: {
        ...mapActions({showSnackAlert: 'alert/showSnackAlert', addShape: 'shapes/addShape'}),
        createShape()
        {
          
            let max = maxDimension();
            if (this.radius > max) {
                this.showSnackAlert({type: "error", heading: "Invalid Value", messages: ["The radius entered [" + this.radius + "] is too large for your screen size. Use radius less than " + max + "."]});
                return;
            }

            let shape = {
                top: 100,
                left: 100,
                color: this.color,
                component: 'circle-shape',
                parameters: {
                    radius: this.radius,
                }
            }
            this.addShape(shape);
            //reset form
            this.radius = 10;
            this.color = "#276db8";
        },
    }
}
</script>