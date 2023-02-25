<template>
	<div style="height: 100%;">
		<div :class="`${backgroundClass}`">
			<div class="txt-w padding-05">{{crurentWeatherList.airDataTime}}</div>
			<div class="center-txt txt-w">{{crurentWeatherList.address}}</div>
			<div class="center-txt odamTmp-txt-size txt-w">{{crurentWeatherList.odamTmp}}℃</div>
			<div class="center-txt txt-w padding-45">{{compareTxt}}</div>

			<el-row :gutter="20" >
				  <el-col :span="6">
					<img class="main-icon" :src="require('../../assets/img/ico_tmp.png')"/>
					<div class="center-txt txt-w">체감</div>
					<div class="center-txt txt-w">{{crurentWeatherList.chillTmp}}</div>
				</el-col>
				  <el-col :span="6">
					<img class="main-icon" :src="require('../../assets/img/ico_humidity.png')"/>
					<div class="center-txt txt-w">습도</div>
					<div class="center-txt txt-w">{{crurentWeatherList.odamReh}}</div>
					</el-col>
				  <el-col :span="6">
					<img class="main-icon" :src="require('../../assets/img/ico_rainf.png')"/>
					<div class="center-txt txt-w">{{crurentWeatherList.odamRn1}}</div>
					<div class="center-txt txt-w">1시간강수량</div>
					</el-col>
				  <el-col :span="6">
					<img class="main-icon" :src="require('../../assets/img/ico_wind.png')"/>
					<div class="center-txt txt-w">{{crurentWeatherList.odamWd}} {{crurentWeatherList.odamWs}} {{crurentWeatherList.windUnit}}</div>
					<div class="center-txt txt-w">바람</div>
					</el-col>
			</el-row>
		</div>

		

	</div>	
	
</template>

<script>
import vueMoment from 'moment'

export default {
	data() {
		return {
            latitude: '',
            longitude: '',
            textContent: '',
			dongCode : '',
			crurentWeatherList : '',
			compareTxt : '',
			backgroundClass : '',
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
			this.backgroundClass = 'night'
		}else{
			this.backgroundClass = 'day'	
		}

    	},
	}
}
</script>

<style>
html{
	height: 100%;
}
html body{
	height: 100%;
}
#app {
	height: 100%;
}
 .center-txt {
	width: 100%;
	text-align: center;
  }
  .txt-w {
	color: white;
  }
  .odamTmp-txt-size {
	font-size: 5rem;
  }
  .night {
	background-image: url('../../assets/img/bg-weather-night.gif');
	background-repeat: no-repeat;
    background-size: 100%;
	height: 100%;
  }
  .day {
	background-image: url('../../assets/img/bg-weather-day.gif');
	background-repeat: no-repeat;
    background-size: 100%;
	height: 100%;
  }
  .main-icon {
	width: 20%;
    margin: auto;
    margin-bottom: 0.5rem;
    display: block;
  }
  .padding-45 {
	padding-bottom: 4.5rem;
  }
  .dashboard {
	height: 100%;
  }
  .padding-05{
    padding: 0.5rem;
  }
</style>