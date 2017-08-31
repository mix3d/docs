<template lang="pug">
  div.ad2.ma-0
    div.bsa-cpc
</template>

<script>
  export default {
    watch: {
      '$route' () {
        if (process.env.NODE_ENV === 'development') return

        _bsa.reload()
      }
    },

    mounted () {
      if (process.env.NODE_ENV === 'development') return

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//m.servedby-buysellads.com/monetization.js'

      this.$el.appendChild(script)

      setTimeout(() => {
        if(typeof _bsa !== 'undefined' && _bsa) {
          _bsa.init('default', 'CKYD6KQN', 'placement:vuetifyjscom', {
            target: '.bsa-cpc',
            align: 'horizontal',
            disable_css: 'true'
          })
        }
      }, 1000)
    }
  }
</script>

<style>
  .ad2 {
    width: 100%;
  }
  
  .bsa-cpc #_default_ {
    position: relative;
    padding: 7px 16px 8px;
    background-color: #3a3a3a;
    font-size: 14px;
    line-height: 1.5;
  }

  .bsa-cpc .default-ad {
    display: none;
  }

  .bsa-cpc ._default_ {
    display: inline;
    overflow: hidden;
    line-height: 1;
  }

  .bsa-cpc ._default_> * {
    vertical-align: middle;
  }

  .bsa-cpc a {
    color: #fff;
    text-decoration: none;
  }

  .bsa-cpc a:hover {
    color: #2196f3;
  }

  .bsa-cpc .default-image {
    display: none;
  }

  .bsa-cpc .default-title:after {
    content: " — ";
  }

  .bsa-cpc .default-title,
  .bsa-cpc .default-description {
    display: inline;
  }

  .bsa-cpc .default-title {
    position: relative;
    margin-left: 8px;
  }

  .bsa-cpc .default-title:before {
    position: relative;
    top: -1px;
    left: -8px;
    padding: 3px 5px;
    border-radius: 2px;
    background-color: #1fad1f;
    color: #fff;
    content: "Sponsor";
    text-transform: uppercase;
    font-size: 10px;
    font-family: Verdana, sans-serif;
    line-height: 1;
  }
</style>