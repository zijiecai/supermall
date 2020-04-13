import {debounce} from './utils';
import BackTop from 'components/content/backTop/BackTop';
import {POP, NEW, SELL} from "./const";

export const itemListenerMixin = {
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,200);

    this.itemImgListener = () => {
      refresh();
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener);
    // console.log('我是混入中的内容');
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop:false,
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0);
    },
    listenShowBackTop(position){
      // 1.判断backTop是否显示
      // console.log(position);
      this.isShowBackTop = (-position.y) > 1000;
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
