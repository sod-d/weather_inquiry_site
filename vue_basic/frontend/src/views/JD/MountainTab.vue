<template>
	<el-menu :default-active="`${this.activeIndex}`" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
			activeIndex : 0
		}
	},
	mounted(){
		console.log(this.activeIndex);
	},

	methods : {
		handleSelect(key){
			if(this.activeIndex != key){
				this.activeIndex = key;
				this.$emit('selectTab', key);
			}
			
		}
	}

}
</script>

<style>

</style>