<template>
	<div>
		<div class="tab-wrap">
			<button class="btn-tab" v-on:click="clickTab(0)">어제</button>
			<button class="btn-tab on" v-on:click="clickTab(1)">현재</button>
			<button class="btn-tab" v-on:click="clickTab(2)">예보</button>
		</div>

		<div class="cate-wrap">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(category, index) in categories" class="post" :key="category.item">
					<button class="btn-tab" v-bind:class="{on: currentCate === index}" v-on:click="clickCategory(index)" 
						v-html="category"></button>
				</swiper-slide>
			</swiper>
		</div>

		<kakao-map class="map-cont" v-if="weatherDataFlag == true" 
			:weatherData="weatherDataList" :tabIndex="currentTab" :cateIndex="currentCate"></kakao-map>
		<div>
			<p class="curr-time">{{ currentWeatherTm ? currentWeatherTm + "갱신" : "" }} </p>
			<div v-if="currentTab === 2">
				<span class="title05">통보문 다운로드</span>
				<p class="file-txt">※ 원하시는 지역을 선택하여 통보문을 다운받으실 수  있습니다.</p>
				<select name="region" class="sel-full">
					<option value="전국" selected="selected">전국</option>
					<option value="경기">경기</option>
					<option value="경북/대구">경북/대구</option>
				</select>
				<br>
				<button class="btn-btm-txt">다운로드</button>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "../../components/layout/Header.vue";
import KakaoMap from "./KakaoMap.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
	name: "Temperature",
	components: {
		KakaoMap,
		Swiper,
		SwiperSlide,
	},
	props: {
	},
	data() {
		return {
			weatherDataList : [],
			currentWeatherTm : "",
			categories : [],
			currentCate : 0,
			currentTab : 1,
			weatherDataFlag : false,
			swiperOption: {
				slidesPerView: 3, 
				// spaceBetween: 0, 
				loop: false, 
			},
		};
	},
	created() {
		// 헤더 타이틀 변경

		// 전국-현재 날씨 강수 바람 API 호출
		this.getCurrentWeather();

		// 시점 탭에 따른 카테고리 변경 - default : 현재
		this.categories = ["날씨", "강수", "바람"];

	},	
	methods: {
		async getCurrentWeather(){
			let rst = await this.$MNetSend({
				// url: `pushwidgetapi/wnuri-fct2021/api/weather/local/current-frame.do?ele=${this.ele}&wsUnit=${this.wsUnit}`,
				url: `pushwidgetapi/wnuri-fct2021/api/weather/local/current-frame.do?ele=0&wsUnit=m%2Fs`,
			});

			console.log(rst);

			this.weatherDataList = await rst.currentWeather;
			this.currentWeatherTm = await rst.currentWeatherTm;
			this.clickCategory(0);		// category 인덱스 강제로 0

			// console.log("getCurrentWeather 메소드 호출 !!!  ",this.weatherDataList);
			
		},
		async getYesterdayWeather(){
			let rst = await this.$MNetSend({
				// url: `pushwidgetapi/wnuri-fct2021/api/weather/local/current-frame.do?ele=${this.ele}&wsUnit=${this.wsUnit}`,
				url: `pushwidgetapi/wnuri-fct2021/api/weather/local/yesterday-frame.do?ele=0&wsUnit=m%2Fs`,
			});

			console.log(rst);

			this.weatherDataList = await rst.yesterdayWeather;
			this.currentWeatherTm = "";
			this.clickCategory(0);		// category 인덱스 강제로 0

			// console.log("getYesterdayWeather 메소드 호출 !!!  ",this.weatherDataList);
			
		},
		async getForecastWeather(){
			let rst = await this.$MNetSend({
				url: `pushwidgetapi/wnuri-fct2021/api/weather/local/forecast-frame.do?ele=0&wsUnit=m%2Fs`,
			});

			console.log(rst);

			this.weatherDataList = await rst.forecast.forecastItems;
			this.currentWeatherTm = await rst.forecastTm;

			// 카테고리 생성
			await this.weatherDataList.forEach(item => {
				this.categories.push(item.date+ "<br>" + item.ampm );
			});
			await this.clickCategory(0);		// category 인덱스 강제로 0

			// console.log("getForecastWeather 메소드 호출 !!!  ",this.weatherDataList);
		},
		clickTab(idx) {
			this.currentTab = idx;

			this.weatherDataFlag = false;
			
			if(idx == 0){
				this.categories = ["기온", "강수"];
				this.getYesterdayWeather();
			}else if(idx == 1){
				this.categories = ["날씨", "강수", "바람"];
				this.getCurrentWeather();
			}else if(idx == 2){
				this.categories = [];
				this.getForecastWeather();
			}

			const el = document.getElementsByClassName("tab-wrap")[0];
			el.querySelector(".on").classList.remove("on");
			el.childNodes[idx].classList.add("on");
		},
		clickCategory(idx){
			
			this.currentCate = idx;

			const el = document.getElementsByClassName("cate-wrap")[0];
			if(el.querySelector(".on") != null){
				el.querySelector(".on").classList.remove("on");
			}
			el.querySelectorAll(".btn-tab")[idx].classList.add("on");
			
			this.weatherDataFlag = true;
		},
	},
	mounted() {
		
		
	}
};
</script>

<style scoped>
.curr-time{
	font-size: 14px;
    text-align: right;
    padding-right: 10px;
}
.tab-wrap{
	display: block;
    /* width: 100%; */
    height: 3.5rem;
    font-size: 0;
    padding: 0 2rem;
    background: #f6f8fb;
    border-bottom: solid 1px #eceef1;
}
.tab-wrap .btn-tab{
	display: inline-block;
    position: relative;
    padding-top: 0.5rem;
	padding-bottom : 15px;	
    background: #f6f8fb;
    color: #666;
    font-size: 1.4rem;
    white-space: nowrap;
    line-height: 1;
    border: none;
    margin: 10px 20px 0px 0px;
}

.tab-wrap .btn-tab:first-child {
    margin-left: 0 !important;
}
.tab-wrap .btn-tab.on:after {
	content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 110%;
    height: 0.2rem;
    border-bottom: 0.2rem solid #006ecd;
	margin-left:-4px;
}

.cate-wrap {
    padding: 0 1.5rem 1.5rem;
    height: auto;
	position: relative;
    display: block;
    /* width: 100%; */
    height: 4.1rem;
    font-size: 0;
}
.cate-wrap .btn-tab.on {
    color: #fff;
    background: #6aadeb;
    border: solid 1px #5da1e1;
    font-weight: 500;
}
.cate-wrap .btn-tab {
	height: auto;
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    color: #000;
    font-weight: 400;
    line-height: 1;
    border-radius: 1.8rem;
    background: #fff;
    border: solid 1px #cccdcf;
    margin: 20px 10px 0px 0px;
}

.title05 {
    color: #000;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1;
}
.file-txt {
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
}
.btn-btm-txt {
	border-radius: 7px;
    border-color: #5da1e1;
    background-color: #6aadeb;
    font-size: 1rem;
    width: 100%;
	margin-top :15px;
}
.sel-full {
	width: 98%;
    height: 25px;
}
</style>