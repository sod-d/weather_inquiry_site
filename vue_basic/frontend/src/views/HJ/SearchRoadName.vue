<template>
  <div>
    <!-- 도로명 검색 -->
    <div class="content scroll" data-cont-id="main03">
        <div class="txt-add">관심지역 등록은 첫 화면 동네명 옆의 별표(노란색)를 눌러 저장</div>
        <div class="num-road">
            <div class="title">
                <span>시/도</span>
                <span>구/군</span>
                <span>도로명</span>
            </div>
            <div class="road-choice" v-show="listType != 'ROAD'">
                <div class="relation-bhox">
                    <div class="relation-radio" v-show="listType !== 'WIDE'">
                        <button type="button" class="btn-upper" @click="clickUpBtn()"><em>상위</em></button>
                    </div>
                    <div class="relation-radio" v-for="item in btnList" :key="item.code">
                        <label class="radio3"><input type="radio" name="opinion" v-model="pickButton" :value="item.code"><em>{{item.name}}</em></label>
                    </div>
                </div>
            </div>

            <div class="road-choice" v-show="listType == 'ROAD'">
                <!-- <div class="list-hd">
                    <div class="ipt-search-wrap pdauto">
                        <div class="ipt-search-box">
                            <input type="search" placeholder="검색어를 입력하세요." title="검색어를 입력하세요." maxlength="15"/>
                            <button type="button" class="btn-ipt-search type-gray">찾기</button>
                        </div>
                    </div>
                </div> -->
                <div class="last-choice">
                    <div class="ganadara-choice">
                        <div class="relation-bhox">                        
                            <div class="relation-radio">
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" checked value=""><em>모두</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="가,나"><em>가</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="나,다"><em>나</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="다,라"><em>다</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="라,마"><em>라</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="마,바"><em>마</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="바,사"><em>바</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="사,아"><em>사</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="아,자"><em>아</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="자,차"><em>자</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="차,카"><em>차</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="카,타"><em>카</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="타,파"><em>타</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="파,하"><em>파</em></label>
                                <label class="radio3 orange"><input type="radio" name="opinion5" v-model="krButton" value="하"><em>하</em></label>
                                <button type="button" class="btn-upper" @click="clickUpBtn()"><em>상위</em></button>
                            </div>                            
                        </div>
                    </div>
                    <div class="road-choice pt20 f12">
                        <div class="relation-radio"  v-for="item in roadList" :key="item.code">
                            <label class="radio3"><input type="radio" name="opinion4" v-model="selectRoadBtn" :value="item.code"><em>{{item.name}}</em></label>
                        </div>
                    </div>
                </div>   
            </div>


        </div>
    </div>
    <!-- 도로명 검색 -->
    <footer class="footer">
        <div class="btn-wrap pd40">
            <div><button type="button" class="btn-btm-txt red" @click="clickSelectBtn">지역 선택 </button></div>
        </div>
    </footer>
  </div>
   
</template>

<script>

export default {
  name: "SearchRoadName",
  data() {
    return {
        listType : 'WIDE',
        btnList : [],
        pickButton : '',
        siCode : '',
        guCode : '',
        krButton : '',
        roadList : [],
        selectRoadBtn : ''
    };
  },
  
  computed: {
   
  },
  watch:{
    pickButton() {
        console.log("watch:",this.pickButton);
        if(this.listType == 'WIDE') {
            this.siCode = this.pickButton;
            this.getGu();
        } else if(this.listType == "CITY") {
            this.guCode = this.pickButton;
            this.listType = 'ROAD';
        }
    },
    krButton() {
        if(this.krButton !== "") {
            this.searchLoadName();
        }
    }
  },
  methods: {
    async getSido(){
        this.listType = 'WIDE';
;		let rst = await this.$MNetSend({
			url: 'zone/dong.do?type='+this.listType
		});
        this.btnList = rst;
    },
    async getGu() {
        this.listType = 'CITY';
        let rst = await this.$MNetSend({
            url: 'zone/dong.do?type='+ this.listType +'&wideCode='+this.siCode+'&cityCode='
        })
        console.log(rst);
        this.btnList = rst;
    },
    clickUpBtn() {
        if(this.listType == "ROAD") {
            this.getGu();
        } else {
            this.getSido()
        }
    },
    async searchLoadName() {
        this.listType = 'ROAD';
        let _start = this.krButton.split(",")[0];
        let _end = this.krButton.split(",")[1] || "";

        console.log(_start, _end);
        let rst = await this.$MNetSend({
            url: 'zone/load.do?type=DONG&wideCode='+this.siCode+'&cityCode='+this.guCode+'&keyword=&keywordStart='+_start+'&keywordEnd='+_end
            
        })
        this.roadList = rst;
    },
    clickSelectBtn() {
        if(this.listType != "ROAD") {
            this.$popAlert("도로명까지 선택해 주세요.");
        } else {
            let pickItem = this.roadList.find(v => v.code === this.selectRoadBtn);
            console.log(pickItem);
            // TODO main으로 가기
            this.$router.push('/weather');
        }
    }
  },
  mounted() {
    this.getSido()
  },
};
</script>

<style scoped>
.ganadara-choice .relation-bhox > div {text-align: center;}
.ganadara-choice .relation-bhox > div label {display: inline-block;margin-bottom: .5rem;}
.road-choice .ganadara-choice .relation-bhox > div:nth-child(2), .road-choice .ganadara-choice .relation-bhox > div:nth-child(3) {padding: 0 .25rem;}
.ganadara-choice .relation-bhox > div {width: auto;display: inline-block;padding: .5rem;}
.ganadara-choice .relation-bhox > div + div {padding: 0 .25rem;}
.ganadara-choice .relation-bhox > div label.radio3 input[type="radio"] + em {padding: .9rem 1rem;line-height: 1;}
.f12 label.radio3 input[type="radio"] + em {font-size: 1.2rem;}
label.radio3.orange input[type="radio"]:checked + em {color: #fff;border: solid 1px #eb9f4c;background-color: #ffab50;}
</style>
