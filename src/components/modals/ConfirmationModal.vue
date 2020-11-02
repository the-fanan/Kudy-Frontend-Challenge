<template>
    <div class="confirmation-modal d-flex justify-content-center align-items-center" v-if="show">
        <div class="content">
            <b-row>
                <b-col>
                    <h4>{{title}}</h4>
                    <p class="message">{{message}}</p>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <slot></slot>
                </b-col>
            </b-row>

            <b-row>
                <b-col class="d-flex justify-content-end">
                    <button class="btn btn-primary btn-small confirmation-modal-decline" @click="$emit('decline', false)">No, Cancel</button>
                    <button class="btn btn-danger btn-small confirmation-modal-approve" @click="$emit('approve', true)">Yes</button>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props: {
        title: {
            type: String,
            default: function(){
                return "Confirm";
            }
        },
        message: {
            type: String,
            default: function(){
                return "Are you sure you want to continue with this action?"
            }
        },
        show: {
            type: Boolean,
            required: true,
        }
    }
}
</script>