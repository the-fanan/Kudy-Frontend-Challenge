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
            <button class="btn btn-primary">Create Circle</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'circle-form',
    data()
    {
        return {
            radius: 10,
            color: "#276db8",
        }
    },
}
</script>