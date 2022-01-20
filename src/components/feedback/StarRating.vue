<template>
  <div class="star-rating">
    <label
        class="star-rating__star"
      v-for="rating in ratings"
      :key="rating"
      :class="{is_selected: isSelected(rating), is_disabled: isDisabled}"
      :disabled="disabled"
      @click="set(rating)"
      @mouseover="star_over(rating)"
      @mouseout="star_out"
    >
      <input
        class="star-rating star-rating__checkbox"
        type="radio"
        :value="rating"
        :disabled="disabled"
        v-model="value"
      />
      ★
    </label>
  </div>
</template>

<script>
export default {
  props: {
    setValue: null,
  },
  emits: ['updateRating'],
  data() {
    return {
      value: null,
      temp_value: null,
      disabled: false,
      ratings: [1, 2, 3, 4, 5],
    };
  },
  computed: {
      isDisabled(){
          return this.disabled;
      }
  },
  methods: {
    isSelected(rating){
          return this.value != null && this.value >= rating;
    },
    /*
     * Behaviour of the stars on mouseover.
     */
    star_over(index) {
      if (!this.disabled) {
        this.temp_value = this.value;
        return (this.value = index);
      }
    },

    /*
     * Behaviour of the stars on mouseout.
     */
    star_out() {
      if (!this.disabled) {
        this.value = this.temp_value;
      }
    },

    /*
     * Set the rating.
     */
    set(value) {
     if (!this.disabled) {
        this.temp_value = value;
        this.value = value;
        this.$emit('updateRating', this.value)
      }
    },
  },
  mounted() {
      if (this.setValue != null && this.setValue > 0){
          this.value = this.setValue;
          this.disabled = true;
      }
  }
};
</script>

<style scoped>
.star-rating__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.star-rating__star {
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 3em;
  color: #ababab;
  transition: color 0.2s ease-out;
}

.star-rating__star:hover {
  cursor: pointer;
}

.star-rating__star.is_selected {
  color: #ffd700;
}

.star-rating__star.is_disabled:hover {
  cursor: default;
}
</style>

