<template>
	<div>
		<div>
			<div>{{crurentWeatherList.airDataTime}}</div>
			<div class="center-txt">{{crurentWeatherList.address}}</div>
			<div class="center-txt odamTmp-txt-size">{{crurentWeatherList.odamTmp}}℃</div>
		</div>
	</div>	
	
</template>

<script>
// import Vue from 'vue'
// import VueGeolocation from 'vue-geolocation-api';

export default {
	data() {
		return {
            latitude: '',
            longitude: '',
            textContent: '',
			dongCode : '',
			crurentWeatherList : '',
        }
	},
	mounted() {
		if(!("geolocation" in navigator)) {
			this.textContent = '현재 위치를 확인 할 수 없습니다.';
			return;
		}
			this.textContent = '현재 위치 확인 중'
		
		// get position
		navigator.geolocation.getCurrentPosition(pos => {
			this.latitude = pos.coords.latitude;
			this.longitude = pos.coords.longitude;
			this.textContent = 'Your location data is ' + this.latitude + ', ' + this.longitude
			this.getfindDong(this.latitude,this.longitude);
		}, err => {
			this.textContent = err.message;
		})
	},
	
	
	methods : {
		async getfindDong(latitude, longitude){
			let rst = await this.$MNetSend({
				url: `weathergokr/w/rest/zone/find/dong.do?x=1&y=1&lat=${latitude}&lon=${longitude}`,
			
		});
		console.log(rst);
		// rst.code = this.dongCode;
		this.getCurrentWeatherPost(); //TODO : 오류 해결되면 파라미터 추가 
    	},
		async getCurrentWeatherPost(){
			let rst = await this.$MNetSend({
				url: 'pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=4121063300&unit=m/s',
				// url: `pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=${dongCode}&unit=m/s`,
			
		});
		console.log(rst);
		this.crurentWeatherList = rst[4121063300];
    	},
	}
}
</script>

<style>
  .center-txt {
	width: 100%;
	text-align: center;
  }
  .odamTmp-txt-size {
	font-size: 5rem;
  }
</style>