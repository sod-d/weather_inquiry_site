<template>
	<div>
		<div class="tab-wrap">
			<button>어제</button>
			<button>현재</button>
			<button>예보</button>
		</div>

		<div class="cate-wrap">
			<button>기온</button>
			<button>강수</button>
		</div>

		<kakao-map class="map-cont"></kakao-map>
		<div>
			<p class="curr-time">{{ currentWeatherTm }} 갱신</p>
		</div>
	</div>
</template>

<script>
import Header from "../../components/layout/Header.vue";
import KakaoMap from "./KakaoMap.vue";

export default {
	name: "Temperature",
	components: {
		KakaoMap,
	},
	props: {
	},
	data() {
		return {
			weatherDataList : [],
			currentWeatherTm : "",
		};
	},
	created() {
		// 헤더 타이틀 변경

		// 전국-현재 날씨 강수 바람 API 호출
		this.getCurrentWeather();
	},	
	methods: {
		async getCurrentWeather(){
			let rst = await this.$MNetSend({
				// url: `pushwidgetapi/wnuri-fct2021/api/weather/local/current-frame.do?ele=${this.ele}&wsUnit=${this.wsUnit}`,
				url: `pushwidgetapi/wnuri-fct2021/api/weather/local/current-frame.do?ele=0&wsUnit=m%2Fs`,
			});

			console.log(rst);

			this.weatherDataList = rst.currentWeather;
			this.currentWeatherTm = rst.currentWeatherTm;

			console.log(this.weatherDataList);
		},
	},
	watch: {
		
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
</style>