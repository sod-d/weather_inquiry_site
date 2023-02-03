<template>
  <div>
		<h1>Sample Page</h1>
    <button @click="apiTest()">API 통신 테스트</button>
  </div>
   
</template>

<script>

export default {
  name: "Login",
  data() {
    return {

    };
  },
  computed: {
   
  },
  watch:{

  },
  methods: {
    async apiTest(){
			let rst = await this.$MNetSend({
				url: 'pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=1168058000,1162069500&unit=m/s',
			});

			console.log(rst);



      //axios.get(
      //  "pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=1168058000,1162069500&unit=m/s"
      //).then((result) => {
      //  console.log(result);
      //}).catch((error) => {
      //  console.log(error);
      //});
    },

  },
  mounted() {
    console.log("A");
  },
};
</script>

<style>
 
</style>
