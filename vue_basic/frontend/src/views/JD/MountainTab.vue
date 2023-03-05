<template>
	<el-menu :default-active="`${activeIndex}`" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<el-menu-item index="0">서울/경기도</el-menu-item>
		<el-menu-item index="1">강원도</el-menu-item>
		<el-menu-item index="2">충청남북도</el-menu-item>
		<el-menu-item index="3">전라남북도</el-menu-item>
		<el-menu-item index="4">경상남북도</el-menu-item>
		<el-menu-item index="5">제주특별자치도</el-menu-item>
	</el-menu>
</template>

<script>
export default {
	name: 'MountainTab',
	data(){
		return {

		}
	},
	props: {
		activeIndex : Number
	},
	mounted(){
		console.log(this.activeIndex);
	},

	methods : {
		handleSelect(key){
			this.$emit('selectTab', key);
		}
	}

}
</script>

<style>

</style>