<template>
  <div class="main default">
    <div class="sidebar">

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
import SnackAlert from '@/components/alerts/SnackAlert.vue'
export default {
  components: {
    SnackAlert,
  }
}
</script>
