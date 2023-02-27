<template>
  <div>
	<div class="content-wrap">
		<div class="content scroll">
			<div class="list-wrap">
				<div class="list-hd">
					<div class="ipt-search-wrap">
						<div class="ipt-search-box">
							<button type="button" class="btn-ipt-search-addr type-gray">현위치(주소) 찾기</button>
							<input type="search" class="addr-input" placeholder="행정동(읍/면)명 및 도로명 입력" title="행정동(읍/면)명 및 도로명 입력" id="addrKeyword" maxlength="15"/>
							<button type="button" class="btn-ipt-search type-gray" @click="searchLocation()">찾기</button>
						</div>
					</div>
				</div>
				<div class="list-bd scroll">
					<div class="picarea-list type-s" v-if="searchFlag === true">
						<ul class="bt0">
                            <li class="picarea-item" v-for="item in searchData" :key="item.dongCode">
                                <button type="button" class="btn-add" @click="addLocation(item.dongCode)">
									<em class="picarea-ttl">{{item.address}}</em>
								</button>
                            </li>
						</ul>
						<!-- <p class="btn-more-box none"><button type="button" class="btn-more">더보기</button></p> -->
					</div>
					<p class="no-data h80p" v-else><span class="icon">검색된 지역이 없습니다.</span></p>
				</div>
			</div>
		</div>
	</div>
  </div>
   
</template>

<script>

export default {
  name: "AddFavoriteLocation",
  data() {
    return {
        searchFlag : false,
        searchData : []
    };
  },
  
  computed: {
   
  },
  watch:{
    searchFlag (searchFlag) {
        console.log("watch:",searchFlag);
    }
  },
  methods: {
    async searchLocation(){
      	let _searchVal = document.getElementById("addrKeyword").value;
        console.log(_searchVal);
        _searchVal = encodeURI(_searchVal);
    		let rst = await this.$MNetSend({
			    url: 'renew2021/rest/main/place-search.do?query='+_searchVal+'&start=1&src=A1'
		    });
        this.searchFlag = true;
        this.searchData = rst;
    },

    addLocation(dongCode){
        console.log("call addLocation Function:",dongCode);
        console.log(this.searchData.find(v => v.dongCode === dongCode));
        this.$emit("addLocation", this.searchData.find(v => v.dongCode === dongCode));
    }
  },
  mounted() {
    console.log("관심지역추가화면");
  },
};
</script>

<style>
@import "location.css";
</style>
