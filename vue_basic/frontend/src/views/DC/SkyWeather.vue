<template>
	<div>기상특보</div>
</template>

<script>
export default {
	name: "weather report",
  data() {
    return {

    };
  },
	mounted(){
		console.log('기상특보');
		this.getWeatherInfo();
	},
	computed:{
		
	},
	methods:{
		async getWeatherInfo(){
			let rst = await this.$MNetSend({
				url: 'pushwidgetapi/wnuri-fct2021/api/main/warning.do',
			});

			console.log(rst);
    },
	}

}
</script>

<style>

</style>