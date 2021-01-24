<template>
  <li>
    <div>
      <header>
        <h3>{{ res.title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{  res.description }}</p>
    <nav>
      <a :href="res.link">View Resources</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: {
    res: {
      title: {
        type: String, 
      },
      description: {
        type: String
      },
      link: {
        type: String
      }
    }
  }
}
</script>