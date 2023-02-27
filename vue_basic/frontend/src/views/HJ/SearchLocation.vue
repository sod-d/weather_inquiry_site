<template>
  <div>
    <div class="content-wrap">
		<div class="hdfix-wrap">
			<div class="tab-wrap item03">
				<div><button type="button" class="btn-tab" :class="{ on:comp  === 'SearchName' }" @click="changeComponent('SearchName')">주요지명검색 </button></div>
				<div><button type="button" class="btn-tab" :class="{ on:comp  === 'SearchDongName' }" @click="changeComponent('SearchDongName')">읍면동 검색</button></div>
				<div><button type="button" class="btn-tab" :class="{ on:comp  === 'SearchRoadName' }" @click="changeComponent('SearchRoadName')">도로명 검색</button></div>
			</div>
		</div>
        <component v-bind:is="comp"></component>
	</div>
	
  </div>
   
</template>

<script>
import SearchName from '../HJ/SearchName.vue';
import SearchDongName from '../HJ/SearchDongName.vue';
import SearchRoadName from '../HJ/SearchRoadName.vue';

export default {
  components: { SearchName, SearchDongName, SearchRoadName },
  name: "SearchLocation",
  data() {
    return {
        comp : "SearchName"
    };
  },
  
  computed: {
   
  },
  watch:{

  },
  methods: {
    changeComponent(clickComp) {
        
        this.comp = clickComp;
    }
  },
  mounted() {
    
  },
};
</script>

<style scoped>
@import "location.css";
.tab-wrap{display:block;width:100%;height:5rem;font-size:0;padding: 0 2rem;background: #f6f8fb;border-bottom: solid 1px #eceef1;}
.tab-wrap.tab-scroll {white-space: nowrap;overflow-x: auto;}
.tab-wrap > *{display:inline-block;text-align:left;}
.tab-wrap.item03 > *{width:33.33%;}	/* 탭 3개 */
.tab-wrap > div:first-of-type {padding-left: 0;}
.tab-wrap .btn-tab{display:inline-block;position:relative;height:4.9rem;padding-top: .5rem; border-bottom:0.2rem solid transparent;color:#666;font-size:1.6rem;white-space: nowrap;line-height: 1;}
/* .tab-wrap .btn-tab:before{content:'';position:absolute;left:0;bottom:-0.4rem;width:100%;height:1px;background:#ddd;} */
.tab-wrap .btn-tab.on{border-color:#6aadeb;color:#6aadeb;font-weight:500;}
.tab-wrap  .btn-tab.on:before{display:none;}
.tab-s-wrap{position:relative;display:block;width:100%;height:4.1rem;font-size:0;}
.tab-s-wrap > *{display:inline-block;text-align:center;}
.tab-s-wrap.item02 > *{display:inline-block;width:50%;}
.tab-s-wrap.item03 > *{display:inline-block;width:33.3%;}
.tab-s-wrap.item04 > *{display:inline-block;width:25%;}
.tab-s-wrap .btn-tab{display:inline-block;position:relative;width:100%;height:4.5rem;background-color:#f5f5f5;color:#666;font-size:1.5rem;font-weight:400;}
.tab-s-wrap .btn-tab:before{content:'';position:absolute;top:50%;left:0;width:1px;height:2.8rem;margin-top:-1.4rem;background-color:#f6f8fb;}
.tab-s-wrap .btn-tab:first-cild:before{display:none;}
.tab-s-wrap .btn-tab.on{background-color:#6aadeb;color:#fff;font-weight:400;}
.tab-s-wrap .btn-tab.on:before{display:none;}

.tab-s-wrap {padding: 0 1.5rem 1.5rem;height: auto;}
.tab-s-wrap > div {padding: 0 .5rem;}
.tab-s-wrap .btn-tab {
    height: auto;padding: .9rem 1rem;font-size: 1.5rem;color: #000;font-weight: 400;line-height: 1;border-radius: 1.8rem;background: #fff;border: solid 1px #cccdcf;
}
.tab-s-wrap.clamp2 .btn-tab {height: auto;padding: .2rem 2rem;font-size: 1.5rem;color: #000;font-weight: 400;line-height: 1.2;border-radius: 2.1rem;}
.tab-s-wrap .btn-tab:before {content: none;}
.tab-s-wrap .btn-tab.on {color: #fff;background: #6aadeb;border: solid 1px #5da1e1;font-weight: 500;}

.tab-wrap.free > div {width: auto;padding: 0 2rem;}
.tab-wrap.free > div:first-child {padding-left: 0;}
.tab-s-wrap.new-tab {padding: 0;}
.tab-s-wrap.new-tab > div {padding: 0;}
.tab-s-wrap.new-tab > div button {padding: 1.4rem 1rem;}
.tab-s-wrap.new-tab > div:first-of-type button {border-radius: 0; border-bottom-left-radius: 1rem;border-top-left-radius: 1rem;}
.tab-s-wrap.new-tab > div:last-of-type button {border-radius: 0;border-bottom-right-radius: 1rem;border-top-right-radius: 1rem;}


.tab-s-box{}
.tab-s-box .ttl{display:block;margin-top:1.1rem;font-size:1.5rem;font-weight:700;line-height:2.4rem;text-align:center;}

</style>
