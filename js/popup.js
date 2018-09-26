let app = new Vue({
  el:"#app",
  data: {
    searchText:"",
    posts:[],
    hasError: false,
    loading: false
  },
  methods:{
    searchPosts:function(event){
      if(this.searchText === '')return;
      this.loading = true;
      axios.get(`https://qiita.com/api/v2/items?page=1&per_page=100&query=body:${this.searchText}`).then(function(response){
          this.posts = response.data;
        }.bind(this))
          .catch(function(error){
              this.hasError = true;
        }.bind(this))
          .finally(function(){
            this.loading = false;
          }.bind(this));
      this.serchText = "";
    },
    createTab:(url)=>{
      chrome.tabs.create({url: url, active: false});
    }
  }
});
