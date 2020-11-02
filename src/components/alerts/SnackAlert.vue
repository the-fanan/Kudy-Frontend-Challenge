<template>
	<transition name="alert-transition"
	enter-active-class="alert-slide-in"
    leave-active-class="alert-slide-out"
	>
		<div class="fec-snack-alert d-flex justify-content-center" v-if="alert.snackAlert.show">
			<div :class="'main shadow-lg ' + alert.snackAlert.type">
				<h6 class="text-center text-white alert-heading">{{ alert.snackAlert.heading }}</h6>
				<ul>
					<li v-for="(message, index) in alert.snackAlert.messages" v-bind:key="index" class="text-white alert-message">
						{{ message }}
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({alert: state => state.alert}),
	},
}
</script>