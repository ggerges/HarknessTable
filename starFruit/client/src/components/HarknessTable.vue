<template>
  <div class="hello">
    <h1>Harkness Table</h1>
    <img src="../assets/starfruit.jpeg">
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'HarknessTable',
  data () {
    return {
      msg: 'Welcome to Your Harkness Table App'
    }
  }

  /* methods: {
    drag () {
      function allowDrop (ev) {
        ev.preventDefault()
      }

      function drag (ev) {
        ev.dataTransfer.setData('text', ev.target.id)
      }

      function drop (ev) {
        ev.preventDefault()
        var data = ev.dataTransfer.getData('text')
        ev.target.appendChild(document.getElementById(data))
      }
    }
  } */
}
</script>

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
