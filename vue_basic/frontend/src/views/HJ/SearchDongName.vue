<template>
  <div>
    <!-- 읍면동 검색 -->
    <div class="content scroll" data-cont-id="main02">
        <div class="txt-add">관심지역 등록은 첫 화면 동네명 옆의 별표(노란색)를 눌러 저장</div>
        <div class="num-road">
            <div class="title">
                <span>시/도</span>
                <span>구/군</span>
                <span>읍/면/동</span>
            </div>
            <div class="road-choice">
                <div class="relation-bhox">
                    <div class="relation-radio" v-show="listType !== 'WIDE'">
                        <button type="button" class="btn-upper" @click="clickUpBtn()"><em>상위</em></button>
                    </div>
                    <div class="relation-radio" v-for="item in btnList" :key="item.code">
                        <label class="radio3"><input type="radio" name="opinion" v-model="pickButton" :value="item.code"><em>{{item.name}}</em></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 읍면동 검색 -->
    <div class="btn-wrap pd40 footer">
        <div><button type="button" class="btn-btm-txt red" @click="clickSelectBtn()">지역 선택 </button></div>
    </div>
  </div>
   
</template>

<script>

export default {
  name: "SearchDongName",
  data() {
    return {
        listType : 'WIDE',
        btnList : [],
        pickButton : '',
        siCode : '',
        guCode : '',
        dongCode : ''
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
            this.getDong();
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
    async getDong() {
        this.listType = 'DONG';
        let rst = await this.$MNetSend({
            url: 'zone/dong.do?type='+ this.listType +'&wideCode='+this.siCode+'&cityCode='+this.guCode
        })
        console.log(rst);
        this.btnList = rst;
    },
    clickUpBtn() {
        if(this.listType == "DONG") {
            this.getGu();
        } else {
            this.getSido()
        }
    },
    clickSelectBtn() {
        if(this.listType != "DONG") {
            this.$popAlert("읍/면/동까지 선택해 주세요.");
        } else {
            let pickItem = this.btnList.find(v => v.code === this.pickButton);
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

<style>
.num-road {padding: 2rem;}
.num-road .title {padding-bottom: .8rem; border-bottom: 1px solid #f0f0f0;}
.num-road span {position: relative;display: inline-block; padding-right: 1.5rem; color: #000;font-size: 1.5rem;font-weight: 400; text-align: left;line-height: 1;}
.num-road span::after {
  content: '';display: inline-block;position: absolute;right:0;top: 0; padding: .8rem .5rem; font-size: 0;
  background: url('img/btn-list-next.png') 50% 50% no-repeat;background-size: .7rem;
}
.num-road span:last-of-type:after {content: none;}
.road-choice {padding-top: 2rem;}
.road-choice .relation-bhox {padding-bottom: 1rem; font-size: 0;}
.road-choice .relation-bhox > div:nth-child(1) {padding-right: .25rem;}
.road-choice .relation-bhox > div:nth-child(2) {padding: 0 .15rem;}
.road-choice .relation-bhox > div:nth-child(3) {padding-left: .25rem;}
.ipt-search-wrap.pdauto {padding: 0 0 2rem;}

.relation-bhox > div {
    width: 32%;
    display: inline-block;
}
label.radio3 input[type="radio"] {
    display: none;
}
label.radio3 input[type="radio"] {display: none;}
label.radio3 input[type="radio"] + em {
    display: block;padding: 1rem .2rem;margin: auto;color: #000;font-size: 1.4rem;box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    line-height: 1.3;text-align: center;border: solid 1px #ddd;background-color: #fff;border-radius: .5rem;-webkit-transition: all .5s;transition: all .5s;
}
label.radio3 input[type="radio"]:checked + em {
    position: relative; color: #6aadeb;border: solid 1px #6aadeb;background-color: #ebf5fe;font-weight: 400;
}
.f12 label.radio3 input[type="radio"] + em {font-size: 1.2rem;}
.btn-wrap > div {
    width: 90%;
}
.btn-btm-txt.red {
    border-color: #eb9f4c;
    background-color: #ffab50;
}
.btn-upper {
  display: block;width: 100%; padding: 1rem .2rem;margin: auto;color: #000;font-size: 1.4rem;box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  line-height: 1.3;text-align: center;border: solid 1px #ddd;border-radius: .5rem;background: #fff;
}
.btn-upper em {
  padding-left: 1.2rem; color: #000;font-size: 1.4rem;line-height: 1.3;text-align: left;
  display: inline-block;background: url('img/ico_arr_u.png') left 50% no-repeat;background-size: .8rem;
}

</style>
