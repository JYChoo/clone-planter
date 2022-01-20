<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>

.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 10px;
  margin: 10px auto;
  background-color: white;
  max-height: 70vh;
  overflow: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.card::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.card {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>