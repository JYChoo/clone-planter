<template>
    <section id="navbar" class="footer">
        <nav>
            <ul>
                <li><router-link to="/"><i class="fa fa-home" style='font-size:18px'></i> Home</router-link></li>
                <li><router-link to="/"><i class='fas fa-cloud-moon' style='font-size:18px'></i> Weather</router-link></li>
            </ul>
        </nav>
    </section>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';

#navbar {
    width: 100%;
    height: 50px;
    background-color: #F8F4F3;
}

section nav {
  width: 95%;
  margin: 5px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

a {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 10px;
}

.footer {
    position:fixed;
    bottom: 0;
}
</style>>



