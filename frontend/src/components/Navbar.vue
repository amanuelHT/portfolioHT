<template>
  <header class="navbar">
    <div class="container">
      <h1 class="logo">Your Name</h1>
      <nav>
        <ul>
          <li><a href="#intro">Intro</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: Georgia, serif;
  font-size: 1.5rem;
  margin: 0;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #0077cc;
}
</style>
