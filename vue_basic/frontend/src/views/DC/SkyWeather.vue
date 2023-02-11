<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
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

				<el-table :data="tableData" :default-sort = "{prop: 'date', order: 'descending'}" style="width: 100%">
					<el-table-column prop="date" label="특보" sortable width="100"></el-table-column>
					<el-table-column prop="name" label="수준" width="80"></el-table-column>
					<el-table-column prop="address" label="해당특보" :formatter="formatter"></el-table-column>
				</el-table>
			</el-tab-pane>
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
			apiData: {},

			activeName: 'first',

			tableData: [{
				date: '2016-05-03',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles'
			}, {
				date: '2016-05-02',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles'
			}, {
				date: '2016-05-04',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles'
			}, {
				date: '2016-05-01',
				name: 'Tom',
				address: 'No. 189, Grove St, Los Angeles'
			}]
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