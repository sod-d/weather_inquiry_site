<template>
	<div>
		<el-collapse v-model="detailActiveNm" @change="toggleDetailData" v-if="selectDetailData" accordion>
			<el-collapse-item :title="`${dailyItem.dateLabel}(${dailyItem.date})`" :name="`${index}`"  v-for="(dailyItem,index) in selectDetailData.forecast.dailyItems" :key="index">
				<el-button type="text" icon="el-icon-top">최저 : {{ dailyItem.minTemp }}</el-button>
				<el-button type="text" icon="el-icon-bottom">최고 : {{ dailyItem.maxTemp }}</el-button>
				<div v-for="(item, index2) in dailyItem.items" :key="index2" style="padding:5px">
					<el-descriptions :title="`${ item.time }`" border>
						<el-descriptions-item label="온도">{{ item.tempValue }}°C</el-descriptions-item>
						<el-descriptions-item label="체감온도">{{ item.chillTemp }}°C</el-descriptions-item>
						<el-descriptions-item label="날씨"><div class="wic_w"><img :class="`wic ${item.weatherIcon}`" /></div></el-descriptions-item>
						<el-descriptions-item label="바람">{{ item.wdKor }}</el-descriptions-item>
						<el-descriptions-item label="습도">{{ item.reh }}%</el-descriptions-item>
						<el-descriptions-item label="강수확률">{{ item.pop }}%</el-descriptions-item>	
					</el-descriptions>
				</div>
			</el-collapse-item>
			
		</el-collapse>
	</div>
</template>

<script>
export default {
	name: 'MountainWeatherDetail',
	data(){
		return {
			detailActiveNm : '0',
		}
	},
	props: {
		selectDetailData : {
			type : Object,
			deep : true
		}
	},
	mounted(){
		
	},

	methods : {
		toggleDetailData(val){
			console.log(val);
			window.scrollTo(0,0);
		}
	}
}
</script>

<style>
.el-collapse-item__header{
	font-size: 20px !important;
}
.wic_w {width: auto; height: auto;}
.wic_w > img {display: block; margin: auto; width:32px;height: 32px;}
.wic.DB00 { background-color:rgba(0,0,0,0); background-image:none;} /* 값 오류 */
.wic.DB01 {content : url(../../assets/img/mountain/ic-db01.png);} /* 맑음 */
.wic.DB02 {content : url(../../assets/img/mountain/ic-db02.png);} /* 구름조금 */
.wic.DB03 {content : url(../../assets/img/mountain/ic-db03.png);} /* 구름많음 */
.wic.DB04 {content : url(../../assets/img/mountain/ic-db04.png);} /* 흐림 */
.wic.DB05 {content : url(../../assets/img/mountain/ic-db05.png);} /* 비 */
.wic.DB06 {content : url(../../assets/img/mountain/ic-db06.png);} /* 비/눈 */
.wic.DB07 {content : url(../../assets/img/mountain/ic-db07.png);} /* 눈/비 */
.wic.DB08 {content : url(../../assets/img/mountain/ic-db08.png);} /* 눈 */
.wic.DB09 {content : url(../../assets/img/mountain/ic-db09.png);} /* 소나기 */
.wic.DB10 {content : url(../../assets/img/mountain/ic-db10.png);} /* 빗방울 */
.wic.DB11 {content : url(../../assets/img/mountain/ic-db11.png);} /* 빗방울/눈날림 */
.wic.DB12 {content : url(../../assets/img/mountain/ic-db12.png);} /* 눈날림 */
.wic.DB_LGT {content : url(../../assets/img/mountain/ic-db-lgt.png);} /* 낙뢰 */

.wic.DB00_N { background-color:rgba(0,0,0,0); background-image:none;} /* 값없음_밤 */
.wic.DB01_N {content : url(../../assets/img/mountain/ic-db01-n.png);} /* 맑음_밤 */
.wic.DB02_N {content : url(../../assets/img/mountain/ic-db02-n.png);} /* 구름조금_밤 */
.wic.DB03_N {content : url(../../assets/img/mountain/ic-db03-n.png);} /* 구름많음_밤 */
.wic.DB04_N {content : url(../../assets/img/mountain/ic-db04-n.png);} /* 흐림_밤 */

.wic.NB {content : url(../../assets/img/mountain/ic-nb.png);} /* 값없음 */
.wic.NB01 {content : url(../../assets/img/mountain/ic-nb01.png);} /* 맑음 */
.wic.NB02 {content : url(../../assets/img/mountain/ic-nb02.png);} /* 구름조금 */
.wic.NB03 {content : url(../../assets/img/mountain/ic-nb03.png);} /* 구름많음 */
.wic.NB04 {content : url(../../assets/img/mountain/ic-nb04.png);} /* 흐림 */
.wic.NB07 {content : url(../../assets/img/mountain/ic-nb07.png);} /* 소나기 */
.wic.NB08 {content : url(../../assets/img/mountain/ic-nb08.png);} /* 비 */

.wic.NB11 {content : url(../../assets/img/mountain/ic-nb11.png);} /* 눈 */
.wic.NB12 {content : url(../../assets/img/mountain/ic-nb12.png);} /* 비/눈 */
.wic.NB13 {content : url(../../assets/img/mountain/ic-nb13.png);} /* 눈/비 */

.wic.NB14 {content : url(../../assets/img/mountain/ic-nb14.png);} /* 천둥번개 */
.wic.NB15 {content : url(../../assets/img/mountain/ic-nb15.png);} /* 안개 */
.wic.NB16 {content : url(../../assets/img/mountain/ic-nb16.png);} /* 황사 */
.wic.NB17 {content : url(../../assets/img/mountain/ic-nb17.png);} /* 박무-엷은안개 */
.wic.NB18 {content : url(../../assets/img/mountain/ic-nb18.png);} /* 연무 */
.wic.NB20 {content : url(../../assets/img/mountain/ic-nb20.png);} /* 가끔 비,한때 비 */
.wic.NB21 {content : url(../../assets/img/mountain/ic-nb21.png);} /* 가끔 눈,한때 눈 */
.wic.NB22 {content : url(../../assets/img/mountain/ic-nb22.png);} /* 가끔눈 또는 비, 한때눈 또는 비 */
.wic.NB23 {content : url(../../assets/img/mountain/ic-nb23.png);} /* 가끔눈 또는비, 한때 눈 또는 비 */

.wic.NB01_N {content : url(../../assets/img/mountain/ic-nb01-n.png);} /* 맑음_밤 */
.wic.NB02_N {content : url(../../assets/img/mountain/ic-nb02-n.png);} /* 구름조금_밤 */
.wic.NB03_N {content : url(../../assets/img/mountain/ic-nb03-n.png);} /* 구름많음_밤 */
.wic.NB04_N {content : url(../../assets/img/mountain/ic-nb04-n.png);} /* 흐림_밤 */
</style>