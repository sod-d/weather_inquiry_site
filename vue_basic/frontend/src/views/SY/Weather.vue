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

						<div class="moreInfo-box">
				<div class="cover-box">
					<!-- 대기질정보 -->
					<div class="air-wrap">
						<h3>대기질정보</h3>
						<div class="air-wrap-list">
							<el-row :gutter="20" >
								<el-col :span="8" style="border-right: 1px solid #eee;">
									<div class="center-txt">초미세먼지<small class="unit01">(PM2.5)</small></div>
									<div class="center-txt">{{AirValueList.pm25Value}}<small class="unit01">㎍/m³</small></div>
									<div v-if="crurentWeatherList.pm25Level" :style="`color:${crurentWeatherList.pm25Level.color}`" class="center-txt">{{crurentWeatherList.pm25Level.text}}</div>
								</el-col>
								<el-col :span="8" style="border-right: 1px solid #eee;">
									<div class="center-txt">미세먼지<small class="unit01">(PM10)</small></div>
									<div class="center-txt">{{AirValueList.pm10Value}}<small class="unit01">㎍/m³</small></div>
									<div v-if="crurentWeatherList.pm10Level" :style="`color:${crurentWeatherList.pm10Level.color}`" class="center-txt">{{crurentWeatherList.pm10Level.text}}</div>
								</el-col>
								<el-col :span="8">
									<div class="center-txt">오존<small class="unit01">(O3)</small></div>
									<div class="center-txt">{{AirValueList.o3Value}}<small class="unit01">ppm</small></div>
									<div v-if="crurentWeatherList.o3Level" :style="`color:${crurentWeatherList.o3Level.color}`" class="center-txt">
										{{crurentWeatherList.o3Level.text}}</div>
								</el-col>
							</el-row>
						</div>
						<p class="right"><span class="rgt-text mt20">제공: 한국환경공단</span></p>
						<div class="content-box">
							<h3>일출/일몰</h3>
							<div class="box_wrap sunr_wrap">
								<el-row :gutter="70" >
								<el-col :span="12" style="border-right: 1px solid #eee;">
									<img class="main-icon2" :src="require('../../assets/img/main/ico_sunrise.png')"/>
									<span class="tit_sunrise">일출</span><strong>{{crurentWeatherList.sunRise}}</strong>
								</el-col>
								<el-col :span="12">
									<img class="main-icon2" :src="require('../../assets/img/main/ico_sunset.png')"/>
									<span class="tit_sunset">일몰</span><strong>{{crurentWeatherList.sunSet}}</strong>
								</el-col>
							</el-row>
								<p>
									
								</p>
								<p>
									
								</p>
							</div>
							<p class="right"><span class="rgt-text">제공: 한국천문연구원</span></p>
							</div>
					</div>
					<!-- //대기질정보 -->
					<!-- 단기예보 -->
					<!-- //단기예보 -->


					<!-- 중기예보 -->
					<div class="container long-term">
						<h3>중기 <span id="midtermDate">(2.28 ~ 3.7)</span></h3>
						<div class="swiper-container swiper4 swiper-container-horizontal swiper-container-free-mode swiper-container-android">
							<div class="short_term_header">
								<ul class="ltit_header">
									<li class="h_tmph">최고기온(℃)</li>
									<li class="h_tmpd">최저기온(℃)</li>
									<li class="h_rain02">강수확률(%)</li>
								</ul>
							</div>

							<div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);"><!-- swiper-wrapper  -->
								<div class="swiper-slide swiper-slide-active">
									<div class="short_term">
										<div class="term_wrap04" id="midTermList"><ul>	<li><span>2월 28일(화)</span></li>	<li>		<div class="wic_wrap">			<span>오전</span>			<span class="wic NB01" title="맑음">맑음</span>		</div>		<div class="wic_wrap">			<span>오후</span>			<span class="wic NB03" title="구름많음">구름많음</span>		</div>	</li>	<li></li>	<li><div class="tchart_01 c10">11°</div></li>	<li></li>	<li><div class="tchart_01 b_c5">8°</div></li>	<li><span class=""></span><span class=""></span></li></ul><ul>	<li><span>3월 1일(수)</span></li>	<li>		<div class="wic_wrap">			<span>오전</span>			<span class="wic NB03" title="구름많음">구름많음</span>		</div>		<div class="wic_wrap">			<span>오후</span>			<span class="wic NB20" title="구름많고 비">구름많고 비</span>		</div>	</li>	<li></li>	<li><div class="tchart_01 c10">8°</div></li>	<li></li>	<li><div class="tchart_01 b_c5">7°</div></li>	<li><span class=""></span><span class=""></span></li></ul><ul>	<li><span>3월 2일(목)</span></li>	<li>		<div class="wic_wrap">			<span>오전</span>			<span class="wic NB01" title="맑음">맑음</span>		</div>		<div class="wic_wrap">			<span>오후</span>			<span class="wic NB03" title="구름많음">구름많음</span>		</div>	</li>	<li></li>	<li><div class="tchart_01 c10">5°</div></li>	<li></li>	<li><div class="tchart_01 b_c5">3°</div></li>	<li><span class=""></span><span class=""></span></li></ul><ul>	<li><span>3월 3일(금)</span></li>	<li>		<div class="wic_wrap">			<span>오전</span>			<span class="wic NB01" title="맑음">맑음</span>		</div>		<div class="wic_wrap">			<span>오후</span>			<span class="wic NB01" title="맑음">맑음</span>		</div>	</li>	<li></li>	<li><div class="tchart_01 c10">10°</div></li>	<li></li>	<li><div class="tchart_01 b_c5">5°</div></li>	<li><span class=""></span><span class=""></span></li></ul><ul>	<li><span>3월 4일(토)</span></li>	<li>		<div class="wic_wrap">			<span>오전</span>			<span class="wic NB01" title="맑음">맑음</span>		</div>		<div class="wic_wrap">			<span>오후</span>			<span class="wic NB01" title="맑음">맑음</span>		</div>	</li>	<li></li>	<li><div class="tchart_01 c10">8°</div></li>	<li></li>	<li><div class="tchart_01 b_c5">6°</div></li>	<li><span class=""></span><span class=""></span></li></ul><ul>	<li><span>3월 5일(일)</span></li>	<li>		<div class="day_wrap">			<span>종일</span>			<span class="wic NB01" title="맑음">맑음</span>		</div>	</li>	<li></li>	<li><div class="tchart_01 c10">9°</div></li>	<li></li>	<li><div class="tchart_01 b_c5">6°</div></li>	<li><span class="full "></span></li></ul><ul>	<li><span>3월 6일(월)</span></li>	<li>		<div class="day_wrap">			<span>종일</span>			<span class="wic NB01" title="맑음">맑음</span>		</div>	</li>	<li></li>	<li><div class="tchart_01 c10">9°</div></li>	<li></li>	<li><div class="tchart_01 b_c5">7°</div></li>	<li><span class="full "></span></li></ul><ul>	<li><span>3월 7일(화)</span></li>	<li>		<div class="day_wrap">			<span>종일</span>			<span class="wic NB01" title="맑음">맑음</span>		</div>	</li>	<li></li>	<li><div class="tchart_01 c10">9°</div></li>	<li></li>	<li><div class="tchart_01 b_c5">7°</div></li>	<li><span class="full "></span></li></ul></div>
									</div>
								</div>
								<div class="swiper-scrollbar" style="opacity: 0; transition-duration: 400ms;"><div class="swiper-scrollbar-drag" style="transform: translate3d(0px, 0px, 0px); width: 0px;"></div></div>
							</div>  <!-- swiper-wrapper  -->
						<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
					</div>
					<!-- 중기예보 -->



					<!-- 영상 -->
					<div class="container mvideo-wrap">
						<h3>영상</h3>
						<div class="right">
							<label class="radio"><input type="radio" name="mvideo" data-video="rain" checked=""><em>강수예측</em></label>
							<label class="radio"><input type="radio" name="mvideo" data-video="sate"><em>위성</em></label>
						</div>
						<div class="st_cont tab_cont">
							<!-- 강수예측  -->
							<div class="cont rain" id="rain">
								<div class="mvideo_img"><img src="https://www.weather.go.kr/w/repositary/image/rdr/img/qpr_202302251640.gif" alt="초단기강수예측"></div>
								<div class="btn_wrap_r"><button class="btn_refresh">새로고침</button></div>
							</div>

							<!-- 위성  -->
							<div class="cont sate" id="sate">
								<div class="mvideo_img"><!--<img src="../img/main/gk2a_ami_le1b_rgb-s-true_ko020lc_202201260104.png" alt="2022년 01월 26일 10:04 (KST) RGB 천연색(AI) 영상" >--></div>
								
							</div>

						</div>
					</div>
					<!-- 영상 -->
				</div>
			</div>

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
			AirValueList : '',
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
		this.AirValueList = rst[dongCode].airValue;
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
  .main-icon2 {
	width: 20%;
    margin: auto;
	vertical-align: middle;
	margin-right: 0.5rem;
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
  .moreInfo-box{
	margin-top : 5rem;
	padding-top: 2rem;
    border-radius: 1.5rem 1.5rem 0 0;
    background: #fff;
  }
  .air-wrap h3{
    color: #0c0c0c;
    font-weight: 600;
	margin-left: 0.5rem;
  }
  .unit01{
	font-weight: 300;
  }
  .right {
	float: right;
    font-size: 0.8rem;
    color: #666;
  }
</style>