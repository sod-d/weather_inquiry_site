<template>
	<div>
    <p>관심지역 설정</p>
    <div v-if="addLocationFlag === false">
        <div class="content-wrap">
		<div class="hdfix-wrap"></div>
		<div class="content scroll">
			<div class="list-wrap">
				<div class="list-bd">
					<div class="interest-list-wrap">
						<div class="picarea-item picarea-now-place" id="currentPlaceArea"><!-- 현재 위치 S -->
							<div class="picarea-ttl" id="currentAddr">서울특별시 관악구 쳥룡동 <em class="picarea-ttl-now">(현위치)</em></div>
						</div>
						<div class="data">
							<div class="plr40">
								<p class="cmt-txt icon mt40">관심지역은 최대10개까지 등록이 가능합니다.</p>
								<p class="cmt-txt icon mt10">관심지역 순서 <em>4번째까지</em> 홈화면에서 확인 하실 수 있습니다.</p>
								<p class="cmt-txt icon mt10">원하는 지역의 순서를 끌어다 놓기로 변경할 수 있습니다.</p>
							</div>
							<div class="all-check pt40">
								<label><input type="checkbox" id="allCheck" /><span>전체선택</span></label>
								<button type="button" class="choice-del" @click="deleteItem">선택 삭제</button>
							</div>
							<div class="picarea-list check-list pt20">
								<ul id="sortable" v-for="item in favoriteLocationList" :key="item.title">
                                    <li class="picarea-item">
										<label>
											<input type="checkbox" v-model="checkbox" :value="item.dongCode"/>
											<em class="picarea-ttl">{{item.address}}</em>
										</label>
										<div class="setitem-box">
											<button type="button" class="btn-setitem btn-bookmark"></button>
										</div>
									</li>
								</ul>
							</div>
							<!--<p class="save-place-info">위젯 위치로 설정된 지역입니다.</p>-->
						</div>
					</div>
					<!-- 데이터가 없을 경우 S -->
					<div class="data-no " v-show="favoriteLocationList.length < 1">
						<!--<p class="save-place-info">위젯 위치로 설정된 지역입니다.</p>-->
						<p class="no-data h12r"><span class="icon">등록된 관심지역이 없습니다.</span></p>

					</div>
					<!-- 데이터가 없을 경우 E -->

				</div>
			</div>
            
		</div>
	</div>
	<footer class="footer">
		<div class="btn-wrap pd40">
			<div><button type="button" class="btn-btm-txt red" @click="showComponent()">관심지역 추가</button></div>
		</div>
	</footer>
    </div>
    
    <add-favorite-location v-else v-on:addLocation="addListItem"></add-favorite-location>
  </div>
  
</template>
<script>
import AddFavoriteLocation from '../HJ/AddFavoriteLocation.vue';

export default {
    data() {
        return {
            addLocationFlag : false,
            favoriteLocationList : [],
            checkbox : []
        };
    },
    components: { AddFavoriteLocation },
    created() {
        this.favoriteLocationList = this.$store.getters["storage/FAVORITE_LOC"];
    },
    computed: {
        
    },
    watch:{
        addLocationFlag (addLocationFlag) {
            console.log("watch:",addLocationFlag);
        }
    },
    methods: {
        showComponent(){
            this.addLocationFlag = true;
        },
        addListItem(value) {
            console.log(value);
            this.addLocationFlag = false;
            if(this.favoriteLocationList.findIndex(v => v.dongCode === value.dongCode) < 0) {
                this.favoriteLocationList.push(value);
                this.$store.commit('storage/FAVORITE_LOC', this.favoriteLocationList);
            } else {
                console.log("리스트에 중복 있음");
            }
        },
        deleteItem() {
            console.log("삭제!!");
            console.log(this.checkbox);
            let _list = this.favoriteLocationList;
            const result = _list.filter(item => {
                return !this.checkbox.some(other => other === item.dongCode)
            });
            console.log(result);
            this.$store.commit('storage/FAVORITE_LOC', result);

        }
    },
    mounted() {
        // 
    },
};
</script>

<style>
@import "location.css";
/* 하단 버튼 */
.btn-wrap{display:block;overflow:hidden;position:relative;font-size:0 !important;}
.btn-wrap > *{display:block;width:100%;font-size:1.5rem;vertical-align:middle;}
.footer{position:relative;width:100%;}
.footer > .btn-wrap{background-color:#fff;}
.footer > .btn-wrap.pd40 {padding: 1rem 2rem !important;}
.btn-btm-txt.red{border-color:#eb9f4c;background-color:#ffab50;}

#sortable{padding-left: 0;}
.none {display: none!important;}
</style>