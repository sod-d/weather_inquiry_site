<template>
  <div>
		<h1>Sample Page</h1>
    <button @click="apiTest1()">API 통신 테스트 version1</button><br/><br/>
    <button @click="apiTest2()">API 통신 테스트 version2</button><br/><br/>
    <button @click="callAlert()">Alert 팝업 호출</button><br/><br/>
    <button @click="callConfirm()">Confirm 팝업 호출</button><br/><br/>
    <button @click="storeAddNum()">store 테스트</button> state : <template>{{ this.$store.state.sample.test }}</template><br/><br/>
    <button @click="callCommon()">공통함수 호출</button><br/><br/>
  </div>
   
</template>

<script>

import CommonUtil from '@/common/commonUtil.js';

export default {
  name: "Sample Page",
  data() {
    return {

    };
  },

  computed: {

  },
  watch:{

  },
  methods: {
    //type 1
    async apiTest1(){
			let rst = await this.$MNetSend({
				url: 'pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=1168058000,1162069500&unit=m/s',
			});

			console.log(rst);
    },

    //type2
    async apiTest2(){
			let rst = await this.$MNetSend({
				url: 'w/renew2021/rest/main/place-search.do?query=기상청&start=1&src=A4',
			});

			console.log(rst);
    },

    async callAlert(){
      await this.$popAlert("메세지는 열린다.");

      console.log('대기');
    },

    async callConfirm(){
      let isOK = this.$confirm("confirm Popup");

      console.log(isOK);
    },

    storeAddNum(){
      this.$store.dispatch('sample/addNum');
    },

    callCommon(){
      CommonUtil.CommonFunc();
    }

  },
  mounted() {
    console.log("A");
    
  },
};
</script>

<style>
 
</style>
