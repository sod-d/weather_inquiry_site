<template>
	<div class="childMain">
		<div>child component 영역</div><br/>

		<div>전달받은 데이터 : {{sendData}}</div>
		<button @click="$emit('close')">부모로 이벤트 전달</button>
	</div>
</template>

<script>
export default {
	name: 'childComponent',
	data(){
		return {

		}
	},
	props: {
		sendData : Number,
	},
	mounted(){
		console.log(this.sendData);
	}

}
</script>

<style>
.childMain{
	border: 1px solid blue;
}
</style>