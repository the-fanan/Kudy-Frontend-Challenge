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
import {mapMutations} from "vuex";
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
        ...mapMutations({addShape: 'shapes/addShape'}),
        createShape()
        {
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