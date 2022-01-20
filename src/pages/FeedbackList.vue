<template>
  <h2>Your Feedback</h2>
  <div v-if="hasFeedback">
    <base-card v-for="feedback in getFeedback" :key="feedback.id">
      <div v-if="feedback.rating > 0"><star-rating :setValue="feedback.rating"></star-rating></div>
      <div v-if="feedback.comment.length > 0">{{ feedback.comment }}</div>
      <div class="datetime">{{ feedback.date }}</div>
    </base-card>
  </div>
  <div v-else>
    <base-card>
      <p>No Feedback List Found</p>
    </base-card>
  </div>
</template>

<script>
import StarRating from '../components/feedback/StarRating.vue';
import BaseCard from "../ui/BaseCard.vue";
export default {
  components: { BaseCard, StarRating },
  computed: {
    getFeedback() {
      return this.$store.getters["feedback/feedbackList"];
    },
    hasFeedback() {
      return this.$store.getters["feedback/hasFeedback"];
    },
  },
  created() {
    this.loadFeedback();
  },
  methods: {
    async loadFeedback() {
      await this.$store.dispatch('feedback/fetchFeedback');
    }
  }
};
</script>

<style scoped>
.datetime {
  font-style: italic;
  text-align: right;
  color: grey;
}

div {
  text-align: center;
  padding: 3px;
}

.card{
  width: 70%;
  border: 3px solid black;
}
</style>