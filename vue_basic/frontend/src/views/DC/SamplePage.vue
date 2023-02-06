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
    },

    async callPopup(){
      await this.$popAlert("메세지는 열린다.");

      console.log('대기');
    },

    async callPopup2(){
      let isOK = this.$confirm("confirm Popup");

      console.log(isOK);
    }

  },
  mounted() {
    console.log("A");
  },
};
</script>

<style>
 
</style>
