<template>
  <div>
    <button type="button" class="btn line small full" @click="alerFullOptionMsg1">기본 text</button>
    <p class="title-h4">Intro</p>
    <button type="button" class="btn line small" @click="MP010202000SP">앱 업데이트 알림</button>
    <button type="button" class="btn line small" @click="MP010204000SP">시스템 작업 안내</button>
    <p class="title-h4">Login</p>
    <button type="button" class="btn line small" @click="MP010302001SP">오류 메시지</button>
    <!-- <button type="button" class="btn line small" @click="MP010302002SP">본사 5회 오류</button> -->
    <button type="button" class="btn line small" @click="MP010302003SP">4회 이하 오류</button>
    <button type="button" class="btn line small" @click="MP010302004SP">매장 3개월 경과</button>
  </div>
</template>
<script>
export default {
  name: 'AlertTest',
  data() {
    return {
      msg1 : `alert 띄움`,
      MP010202000SPmsg : `<p>최신 버전이 있습니다.<br>업데이트 후 사용해주세요.</p>`,
      MP010204000SPmsg : `<p>FnC 시스템 정기 작업으로 <br>FnCⓜPOS 접속이 불가능합니다.</p>
              <p class="sub date">(2022.12.10 09:00 ~ 2022.12.10 11:59)</p>`,
      MP010302001SPmsg : `<p>로그인 <strong class="bold red">5</strong>회 실패하여 <br>계정이 잠겼습니다.</p><p class="sub">비밀번호 초기화 하시기 바랍니다.</p>`,
      // MP010302002SPmsg :'<p>사용자 계정정보 <strong class="bold red">5</strong>회 불일치로 <br>접속이 제한됩니다.</p><p class="sub">비밀번호 초기화를 진행하거나 <br>시스템 관리자에게 문의주세요.</p>',
      MP010302003SPmsg :'<p>ID 또는 비밀번호가 <br>일치하지 않습니다. </p><p>( <strong class="bold red">1</strong> / 5 )</p>',
      MP010302004SPmsg :'<p>비밀번호 사용기간이 만료되었습니다.<br>비밀번호 초기화 하시기 바랍니다.</p>',
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    
  },
  methods : {
    alerMsg1(){
      this.$alert(this.msg1);
    },
    alerNoHeadMsg1(){
      this.$alert({
        text : this.msg1,
        isNoHead : true,
      });
    },
    alerFullOptionMsg1(){
      this.$alert({
        text : this.msg1,
        title : "제목",
        buttonText : "닫기",
      });
    },
    MP010202000SP(){
      this.$alert({
        text : this.MP010202000SPmsg,
        isNoHead : true,
      });
    },
    MP010204000SP(){
      this.$alert({
        text : this.MP010204000SPmsg,
        title : "시스템 작업 안내",
      });
    },
    MP010302001SP(){
      this.$alert({
        text : this.MP010302001SPmsg,
        isNoHead : true,
        buttonText : "비밀번호 초기화",
      });
    },
    // MP010302002SP(){
    //   this.$alert({
    //     text : this.MP010302002SPmsg,
    //     isNoHead : true,
    //   });
    // },
    MP010302003SP(){
      this.$alert({
        text : this.MP010302003SPmsg,
        isNoHead : true,
      });
    },
    MP010302004SP(){
      this.$alert({
        text : this.MP010302004SPmsg,
        isNoHead : true,
        buttonText : "비밀번호 재설정",
      });
    },
  }
};
</script>

<style scoped>
body > div > div{padding:2rem !important;}
button{width:48%;margin:.5rem 1%;}
p{display: block;margin-top:1rem;;}
</style>