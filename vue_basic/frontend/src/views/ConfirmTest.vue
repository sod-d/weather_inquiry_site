<template>
  <div>
    <button type="button" class="btn small full" @click="confirmFullOptionMsg1">기본 text</button>
    <p class="title-h4">Login</p>
  </div>
</template>
<script>
export default {
  name: 'ConfirmTest',
  data() {
    return {
      msg1 : `confirm 띄움`,
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    
  },
  methods : {
    async confirmMsg(){
      var isOK = await this.$confirm(this.msg1);
      console.log(isOK);
    },
    async comfirmNoHeadMsg1(){
      var isOK = await this.$confirm({
        text : this.msg1,
        isNoHead : true,
      });
      console.log(isOK);
    },
    async confirmFullOptionMsg1(){
      var isOK = await this.$confirm({
        text : this.msg1,
        title : "제목",
        buttonText : "재시도",
        cancelButtonText : "종료"
      });
      console.log(isOK);
    },
    async MP010302001SP(){
      var isOK = await this.$confirm({
        text : this.MP010302001SPmsg,
        isNoHead : true,
        buttonText : "비밀번호 초기화",
        cancelButtonText : "문의"
      });
      console.log(isOK);
    },
  }
};
</script>

<style scoped>
body > div > div{padding:2rem !important;}
button{width:50%;margin-bottom:.5rem;}
p{display: block;margin-top:1rem;;}
</style>