<template>
	<div>날씨조회 테스트</div>
</template>

<script>
import VueGeolocation from 'vue-geolocation-api';

export default {
	created() {
		getCurrentWeather();
	},
	async getCurrentWeatherPost(){
		let rst = await this.$MNetSend({
			url: 'pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=1168058000,1162069500&unit=m/s',
			
		});

		console.log(rst);
    },
	async callPopup(){
      await this.$popAlert("현재 위치정보를 찾을 수 없습니다.");

      console.log('대기');
    },
	methods : {
		getCurrentPosition(){
			if(!navigator.geolocation){
				//현재 위치정보를 찾을 수 없습니다.
				this.$popAlert("현재 위치정보를 찾을 수 없습니다.");
			}else{
				navigator.geolocation.getCurrentPosition(this.getPositionValue, this.geolocationError)
			}
		}
	}
}
</script>

<style>

</style>