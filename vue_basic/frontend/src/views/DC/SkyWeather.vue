<template>
	<div class="content">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<!-- 기상 특보 탭 -->
			<el-tab-pane label="기상특보" name="first">
				<img :src="`https://www.weather.go.kr/w/repositary/image/wrn/img/${apiData.warning.metImg}`">

				<div class="contentDiv">
					<h3>특보 발효현황</h3>
					<ul id="CS">
							<li><strong>발표시각 : </strong><span v-html="apiData.metTmFc"></span></li>
							<li><strong>발효시각 : </strong><span v-html="apiData.metTmEf"></span> 이 후</li>
					</ul>
				</div>
				
				<div class="contentDiv">
					<h3>특보 내용</h3>
					<p v-html="apiData.warning.metStrHtml" class="contentp"></p>
				</div>
				
				<div class="contentDiv">
					<h3>참고사항</h3>
					<p v-html="apiData.warning.metOtherHtml" class="contentp"></p>
				</div>

				<!-- 상세 테이블 영역-->
				<el-table :data="tableData" style="width: 100%" height="400" v-show="tableData.length == 0 ? false : true">
					<el-table-column prop="type" label="특보" width="70"></el-table-column>
					<el-table-column prop="level" label="수준" width="80"></el-table-column>
					<el-table-column prop="areasText" label="해당지역" width="150"></el-table-column>
					<el-table-column prop="tmFc" label="발표시각" width="150"></el-table-column>
					<el-table-column prop="tmEf" label="발효시각" width="150"></el-table-column>
					<el-table-column prop="tmEd" label="해제예고" width="120"></el-table-column>
				</el-table>

			</el-tab-pane>

			<!-- 예비 특보 탭 -->
			<el-tab-pane label="예비특보" name="second">

				<img :src="`https://www.weather.go.kr/w/repositary/image/wrn/img/${apiData.warning.pwnImg}`">

				<div class="contentDiv">
					<h3>특보 발효현황</h3>
					<ul id="CS">
							<li><strong>발표시각 : </strong><span v-html="apiData.pwnTmFc"></span></li>
					</ul>
				</div>
				
				<div class="contentDiv">
					<h3>특보 내용</h3>
					<p v-html="apiData.warning.pwnStrHtml" class="contentp"></p>
				</div>
				
				<div class="contentDiv">
					<h3>참고사항</h3>
					<p v-html="apiData.warning.pwnRemHtml" class="contentp"></p>
				</div>

				<!-- 상세 테이블 영역-->
				<el-table :data="tableData" style="width: 100%" height="400" v-show="tableData.length == 0 ? false : true">
					<el-table-column prop="type" label="특보" width="70"></el-table-column>
					<el-table-column prop="level" label="수준" width="80"></el-table-column>
					<el-table-column prop="areasText" label="해당지역" width="150"></el-table-column>
					<el-table-column prop="tmFc" label="발표시각" width="150"></el-table-column>
					<el-table-column prop="tmEf" label="발효시각" width="150"></el-table-column>
					<el-table-column prop="tmEd" label="해제예고" width="120"></el-table-column>
				</el-table>

			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import moment from "moment";

export default {
	name : 'skyWeather',
	data(){
		return {
			apiData: {
				warning : '',
			},

			activeName: 'first',

			tableData: [],
		}
	},
	created(){
		this.getWeatherData();
	},
	mounted(){
		console.log(moment().format('YYYYMMDD'));
	},
	methods: {
		formatter(row, column) {
			return row.address;
		},
		handleClick(tab, event) {
			console.log(tab, event);
		},
		async getWeatherData(){
			let rst = await this.$MNetSend({
				url: 'pushwidgetapi/wnuri-fct2021/api/main/warning.do',
			});

			console.log(rst);

			this.apiData = rst;
			this.tableData = rst.warningNow.items;

			console.log(this.tableData);
		},
	}
}
</script>

<style>
img{
	display: block;
	margin: auto;
	padding: .8rem;
}

.el-tabs__nav{
	width: 100%;
	padding-top: 0.5rem;
}

.el-tabs__item{
	width: 50%;
	text-align: center;
	padding : 0;
}

.contentDiv{
	padding-top: 1rem;
}

.contentDiv h3{
	padding-left: 1rem;
}

#CS>li>span{
	font-size: 0.9rem;
}

.contentp{
	margin: 1rem;
	padding-left: 1rem;
	line-height: 1.5rem;
}

.el-table tr{
	border-radius: 0.5rem;
}

.el-table th.el-table__cell{
	background-color: #f7f7f7;
}


</style>