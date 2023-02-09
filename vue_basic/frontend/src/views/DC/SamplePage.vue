<template>
  <div>
		<h1>Sample Page</h1>
    <button @click="apiTest()">API 통신 테스트</button><br/><br/>
    <button @click="callAlert()">Alert 팝업 호출</button><br/><br/>
    <button @click="callConfirm()">Confirm 팝업 호출</button>
  </div>
   
</template>

<script>

export default {
  name: "Example",
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
    },

    async callAlert(){
      await this.$popAlert("alert 팝업");

      console.log('대기');
    },

    async callConfirm(){
      let isOK = this.$popConfirm("confirm 팝업");

      console.log(isOK);
    }

  },

  mounted() {

  },
};
</script>

<style>
 
</style>
