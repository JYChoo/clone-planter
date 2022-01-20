<template>
    <base-card>
        <base-dialog :show="!!dialogMessg" @close="closeDialog">
            <p>{{ dialogMessg }}</p>
        </base-dialog>
        <form @submit.prevent="onSubmit">
            <div><h2>Feedback</h2></div>
            <star-rating @updateRating="getRating"></star-rating>
            <div>
                <p>How did you like our services</p>
            </div>
            <div>
                <textarea rows="5" cols="40" placeholder="Additional queries or comments" v-model="addinput"></textarea>
            </div>
            <div>
                <base-button mode="outline" @click="cancel">Cancel</base-button>
                <base-button :isDisabled="disable">Submit</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
import StarRating from '../components/feedback/StarRating.vue';
import BaseDialog from '../ui/BaseDialog.vue'

export default {
  components: { StarRating, BaseDialog },
    data() {
        return {
            isCancel: false,
            addinput: "",
            rating: null,
            dialogMessg: null,
            submitSuccess: false
        }
    },
    computed: {
        disable() {
            return !(this.addinput.length > 0 || this.rating > 0);
        }
    },
    methods: {
        cancel() {
            this.isCancel = true;
        },
        async onSubmit() {
            // if Cancel button is clicked
            if (this.isCancel){
                this.$router.replace('/');
            }

            //if Submit button is clicked
            const currentdate = new Date().toLocaleString('en-GB', { hour12: true });
            const data = {
                userid: this.$store.getters.userId,
                date: currentdate,
                rating: this.rating,
                comment: this.addinput
            }
            try {
                await this.$store.dispatch('feedback/registerFeedback', data);
                this.dialogMessg = "Feedback Submitted!"
                this.submitSuccess = true;
            }catch(_){
                this.dialogMessg = "There is an error occured, please try again!"
            }
        },
        getRating(value){
            if (value > 0){
                this.rating = value;
            }
        },
        closeDialog(){
            this.dialogMessg = null;
            if (this.submitSuccess){
                this.$router.replace('/');
                this.submitSuccess = false;
            }
        }
    }
}
</script>

<style scoped>

div{
    text-align: center;
    margin: 0 auto;
    padding: 5px;
}

.txt-center {
  text-align: center;
}

textarea {
    border-radius: 5px;
    background-color: #ababab;
    border: none;
    padding: 5px;
}
</style>