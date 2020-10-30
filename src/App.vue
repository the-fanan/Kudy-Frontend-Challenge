<template>
  <div class="main default">
    <div class="sidebar">
      <div class="side-form">
        <div class="form-group">
          <label for="shape">Select Shape</label>
            <select v-model="currentShape" class="form-control">
              <option v-for="(shape, index) in availableShapes" :key="index" :value="shape">{{ shape.name | capitalize}}</option>
            </select>
        </div>

        <component v-bind:is="currentShape.form" v-if="currentShape != null"></component>
      </div>
    </div>

    <div class="content">
      <b-container fluid>
        <router-view/>
      </b-container>
    </div>
    <SnackAlert />
  </div>
</template>

<script>
import SnackAlert from '@/components/alerts/SnackAlert.vue';
import availableShapes from '@/data/shapes.js';
import CircleForm from '@/components/shapes/circle/Form.vue';
import SquareForm from '@/components/shapes/square/Form.vue';
import ElipseForm from '@/components/shapes/elipse/Form.vue';
import RectangleForm from '@/components/shapes/rectangle/Form.vue';
import TriangleForm from '@/components/shapes/triangle/Form.vue';
import PolygonForm from '@/components/shapes/polygon/Form.vue';

export default {
  data()
  {
    return {
      availableShapes: availableShapes,
      currentShape: null,
    }
  },
  components: {
    SnackAlert,
    CircleForm,
    SquareForm,
    ElipseForm,
    RectangleForm,
    TriangleForm,
    PolygonForm
  }
}
</script>
