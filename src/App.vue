<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin:0;
  padding:0;
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
