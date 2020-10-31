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
      <div class="delete-shapes">
        <button class="btn btn-danger btn-block" @click="deleteAllShapes">Delete All Shapes</button>
      </div>
    </div>

    <div class="content">
      <b-container fluid>
        <router-view/>
      </b-container>
    </div>
    <ConfirmationModal 
      title="Delete All Shapes" 
      message="Are you sure you want to delete all shapes?" 
      :show="showConfirmationModal"
      v-on:decline="handleDeleteConfirmation"
      v-on:approve="handleDeleteConfirmation"
    />
    <SnackAlert />
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import SnackAlert from '@/components/alerts/SnackAlert.vue';
import ConfirmationModal from '@/components/modals/ConfirmationModal.vue';
import availableShapes from '@/utils/shapes.js';
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
      showConfirmationModal: false,
    }
  },
  methods: {
    ...mapMutations({resetShapes: 'shapes/resetState'}),
    handleDeleteConfirmation(truthy)
    {
      if (truthy === true) {
        this.resetShapes()
      }
      this.showConfirmationModal = false; 
    },
    deleteAllShapes()
    {
      this.showConfirmationModal = true;
    }
  },
  components: {
    SnackAlert,
    ConfirmationModal,
    CircleForm,
    SquareForm,
    ElipseForm,
    RectangleForm,
    TriangleForm,
    PolygonForm
  }
}
</script>
