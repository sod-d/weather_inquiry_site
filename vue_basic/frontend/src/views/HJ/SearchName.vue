<template>
  <div>
    <!-- 주요지명검색 -->
    <div class="content scroll">
        <div class="list-wrap">
            <div class="txt-add">관심지역 등록은 첫 화면 동네명 옆의 별표(노란색)를 눌러 저장</div>
            <div class="list-hd">
                <div class="ipt-search-wrap">
                    <div class="ipt-search-box">
                        <input type="search" placeholder="검색어를 입력하세요." title="검색어를 입력하세요." id="searchInput" maxlength="15" />
                        <button type="button" class="btn-ipt-search type-gray" @click="searchLocation">찾기</button>
                    </div>
                </div>
            </div>
            <div class="list-bd scroll">
                <div class="place-name">
                    <ul>
                        <li v-for="item in searchList" :key="item.dongCode">
                            <button type="button" class="btn-place" @click="goPage">
                                <span class="title">{{item.title}}</span>
                                <span class="address">{{item.address}}</span>
                            </button>
                        </li>
                    </ul>
                    <!-- <p class="btn-more-box"><button type="button" class="btn-more none" id="main01MoreBtn">더보기</button></p> -->
                </div>
            </div>
        </div>
    </div>
    <!-- 주요지명검색 -->
  </div>
   
</template>

<script>

export default {
  name: "SearchName",
  data() {
    return {
        searchList : []
    };
  },
  
  computed: {
   
  },
  watch:{

  },
  methods: {
    async searchLocation(){
      	let _searchVal = document.getElementById("searchInput").value;
        console.log(_searchVal);
        _searchVal = encodeURI(_searchVal);
;		let rst = await this.$MNetSend({
			url: 'w/renew2021/rest/main/place-search.do?query='+_searchVal+'&start=1&src=A4'
		});
        this.searchList = rst;
        
    },
    goPage() {
        // TODO: main화면으로 이동하여 값 전달!!!
    }

  },
  mounted() {
    
  },
};
</script>

<style>
.none {display: none !important;}
ul {list-style: none;}

</style>
