<template>
	<div class="content">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<!-- 기상 특보 탭 -->
			<el-tab-pane label="기상특보" name="first">
				<img src="https://www.weather.go.kr/w/repositary/image/wrn/img/KTKO50_202302102200_108_43.png">

				<h3>특보 발효현황</h3>
				<div>
						<ul id="CS">
								<li><strong>발표시각 : </strong><span v-html="apiData.metTmFc"></span></li>
								<li><strong>발효시각 : </strong><span v-html="apiData.metTmEf"></span> 이 후</li>
						</ul>
				</div>

				<h3>특보 내용</h3>
				<p v-html="apiData.warning.metStrHtml"></p>
				<div>
					<p>참고사항</p>
					<p v-html="apiData.warning.metOtherHtml"></p>
				</div>

				<!-- 상세 테이블 영역-->
				<el-table :data="tableData" style="width: 100%" height="400">
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

				<img src="https://www.weather.go.kr/w/repositary/image/wrn/img/KTKO50_202302102200_108_43b.png">
				<el-table :data="tableData" :default-sort = "{prop: 'date', order: 'descending'}" style="width: 100%">
					<el-table-column prop="date" label="특보2" sortable width="100"></el-table-column>
					<el-table-column prop="name" label="수준2" width="80"></el-table-column>
					<el-table-column prop="address" label="해당특보2" :formatter="formatter"></el-table-column>
				</el-table>

			</el-tab-pane>
		</el-tabs>
		
	</div>
</template>

<script>
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
		this.apiTest();
	},
	mounted(){
		
	},
	methods: {
		formatter(row, column) {
			return row.address;
		},
		handleClick(tab, event) {
			console.log(tab, event);
		},
		async apiTest(){
			let rst = await this.$MNetSend({
				url: 'pushwidgetapi/wnuri-fct2021/api/main/warning.do',
			});

			console.log(rst);

			this.apiData = rst;
			this.tableData = rst.warningNow.items;
		},
	}
}
</script>

<style>
img{
	display: block;
	margin: auto;
}

.el-tabs__nav{
	width: 100%;
}

.el-tabs__item{
	width: 50%;
	text-align: center;
	padding : 0;
}

#CS>li>span{
	font-size: 0.9rem;
}


</style>