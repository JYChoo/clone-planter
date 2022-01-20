<template>
    <h2>Main</h2>
    <base-card>
        <b>Media (0)</b>
    </base-card>
    <base-card>
        <b>Upcoming Events (0)</b>
    </base-card>
    <base-card>
        <router-link to="/feedback">
            <div class="feedback">
                <b>Any Query or Feedback</b>
                <div class="blue">Write To Us ></div>
            </div>
        </router-link>
    </base-card>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.blue{
    color: blue;
}

.feedback{
    display: flex;
    justify-content: space-between;
}
</style>