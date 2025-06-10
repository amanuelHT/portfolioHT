<script setup>
import marsmaniaImg from '../assets/marsmania.jpg'
import youwemovieImg from '../assets/youwemovie.jpg'
import gameoflifeImg from '../assets/gameoflife.jpg' // Add this image too
</script>

<template>
  <section class="projects">
    <h2>Projects</h2>

    <div class="project">
      <div class="text">
        <h3>me Jam 2024 🎮</h3>
        <p class="meta">
          <a href="https://github.com/yourusername/marsmania" target="_blank">GitHub</a> • Unity, C#, Custom Pixel Art
        </p>
        <p>
          Created a rhythm-based game where players hit notes in time and dodge projectiles.
        </p>
        <p>
          Features rhythm gameplay, pixel art, and scoring. Players use W/A/S/D to dodge while syncing to the beat.
        </p>
      </div>
      <div class="image">
        <img :src="marsmaniaImg" alt="Marsmania screenshot" />
      </div>
    </div>

    <div class="project">
      <div class="text">
        <h3>YouWeMovie</h3>
        <p class="meta">
          <a href="https://github.com/yourusername/youwemovie" target="_blank">GitHub</a> • ASP.NET Core, C#, SQLite
        </p>
        <p>
          e at the University of Agder.
        </p>
      </div>
      <div class="image">
        <img :src="youwemovieImg" alt="YouWeMovie screenshot" />
      </div>
    </div>

    <div class="project">
      <div class="text">
        <h3>Game of Life</h3>
        <p class="meta">
          <a href="https://github.com/yourusername/game-of-life" target="_blank">GitHub</a> • C++, SFML
        </p>
        <p>
         L and modern C++. Rules:
        </p>
        <ul>
          <li>A live cell with fewer than 2 live neighbors dies (underpopulation).</li>
          <li>A live cell with 2 or 3 live neighbors survives.</li>
          <li>A live cell with >3 neighbors dies (overpopulation).</li>
          <li>A dead cell with 3 live neighbors becomes a live cell (reproduction).</li>
        </ul>
      </div>
      <div class="image">
        <img :src="gameoflifeImg" alt="Game of Life screenshot" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.projects h2 {
  text-align: center;
  font-size: 2rem;
  font-family: Georgia, serif;
  margin-bottom: 2rem;
}

.project {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.project:last-child {
  margin-bottom: 0;
}

.text {
  flex: 2;
  font-size: 0.95rem;
  text-align: left;
}

.image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image img {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.meta {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #444;
}

.meta a {
  color: #2c3e50;
  font-weight: bold;
  text-decoration: underline;
}

ul {
  margin: 0.5rem 0 0;
  padding-left: 1rem;
  list-style: disc;
  text-align: left; 
}
</style>
