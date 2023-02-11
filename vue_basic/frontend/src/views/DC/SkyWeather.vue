<template>
	<div>
		<h2>기상특보</h2>
		<el-table :data="tableData" :default-sort = "{prop: 'date', order: 'descending'}" style="width: 100%">
			<el-table-column prop="date" label="특보" sortable width="100"></el-table-column>
			<el-table-column prop="name" label="수준" width="80"></el-table-column>
			<el-table-column prop="address" label="해당특보" :formatter="formatter"></el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name : 'skyWeather',
	data(){
		return {
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
	mounted(){
		this.apiTest();
	},
	methods: {
		formatter(row, column) {
			return row.address;
		},
		async apiTest(){
			let rst = await this.$MNetSend({
				url: 'pushwidgetapi/wnuri-fct2021/api/main/warning.do',
			});

			console.log(rst);
		},
	}
}
</script>

<style>

</style>