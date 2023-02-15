<template>
	<div>
		<div>
			<!-- <img :src="require(`../assets/img/${backgroundClass}.png`)"/> -->
			<img :src="require(`@/assets/img/${backgroundClass}.png`)"/>
			<div>{{crurentWeatherList.airDataTime}}</div>
			<div class="center-txt">{{crurentWeatherList.address}}</div>
			<div class="center-txt odamTmp-txt-size">{{crurentWeatherList.odamTmp}}℃</div>
			<div class="center-txt">{{compareTxt}}</div>
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
			compareTxt : '',
			backgroundClass : ''
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
				url: `w/rest/zone/find/dong.do?x=1&y=1&lat=${latitude}&lon=${longitude}`,
			
		});
		console.log(rst);
		this.dongCode = rst[0].code;
		this.getCurrentWeatherPost(this.dongCode);
    	},
		async getCurrentWeatherPost(dongCode){
			let rst = await this.$MNetSend({
				// url: 'pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=4121063300&unit=m/s',
				url: `pushwidgetapi/wnuri-fct2021/api/main/current-weather-array.do?code=${dongCode}&unit=m/s`,
			
		});
		console.log(rst);
		this.crurentWeatherList = rst[dongCode];
		if(rst[dongCode].compToYesterdayTmp > -100 && rst[dongCode].compToYesterdayTmp > 0){
			this.compareTxt = "어제보다 " + rst[dongCode].compToYesterdayTmp + "℃ 높아요";
		}else if(rst[dongCode].compToYesterdayTmp > -100 && rst[dongCode].compToYesterdayTmp < 0){
			this.compareTxt = "어제보다 " + (rst[dongCode].compToYesterdayTmp * -1 )+ "℃ 낮아요";  // '-' 출력 제외
		}else if(rst[dongCode].compToYesterdayTmp > -100){
			this.compareTxt = "어제와 기온이 같아요";
		}else{
			this.compareTxt = "-";
		}

		var airDataTime = rst[dongCode].airDataTime.split(" ")[1].split(":")[0];
		if(airDataTime > 17){ // 17시 이후일 경우 저녁
			this.backgroundClass = 'bg-weather-night'
		}else{
			this.backgroundClass = 'bg-weather-day'
		}


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
  .night {
	background-image: url('');
  }
  .day {
	background-image: url('');
  }
  
</style>