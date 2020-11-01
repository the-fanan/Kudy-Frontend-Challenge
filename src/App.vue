<template>
  <div class="main default">
    <div :class="'sidebar ' + (showSidebar ? 'show' : '')">
      <div class="d-flex justify-content-end cancel">
        <i class="fas fa-times fa-lg" @click="toggleShowSideBar"></i>
      </div>
      <div class="logo-holder d-flex justify-content-center">
        <img :src="require('@/assets/logo.svg')"/>
      </div>

      <div class="side-form">
        <div class="form-group">
          <label for="shape">Select Shape</label>
            <select v-model="currentShape" class="form-control">
              <option v-for="(shape, index) in availableShapes" :key="index" :value="shape">{{ shape.name | capitalize}}</option>
            </select>
        </div>

        <component v-bind:is="currentShape.form" v-if="currentShape != null" v-on:shape-created="handleShapeCreated"></component>
      </div>
      <div class="delete-shapes" v-if="!shapesIsEmpty">
        <button class="btn btn-danger btn-block" @click="deleteAllShapes">Delete All Shapes</button>
      </div>
    </div>

    <div class="content">
      <b-container fluid>
        <div class="d-flex justify-content-right show-sidebar" v-if="!showSidebar">
          <i class="fas fa-bars fa-lg" @click="toggleShowSideBar"></i>
        </div>
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
import {mapMutations, mapState} from 'vuex';
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
      showSidebar: true,
    }
  },
  computed: {
    ...mapState({createdShapes: state => state.shapes.created}),
    shapesIsEmpty: function () {
      return Object.keys(this.createdShapes).length === 0 && this.createdShapes.constructor === Object
    },
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
    },
    handleShapeCreated()
    {
      //if on mobile, hide side bar
      let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      if (width <= 550) {
        this.showSidebar = !this.showSidebar;
      }
    },
    toggleShowSideBar()
    {
      this.showSidebar = !this.showSidebar;
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
