<template>
    <button :class="mode" :disabled="isDisabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        isDisabled: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style scoped>
button{
  padding: 5px 30px;
  font: inherit;
  background-color: green;
  border: 2px solid green;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-right: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  opacity: 1;
}

.outline {
  background-color: transparent;
  color: #808080;
}

button:disabled {
 opacity: 0.7;
}
</style>