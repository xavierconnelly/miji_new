<script>
  	import * as config from '$lib/config'
</script>

<style>
header {
    height: 30px;
    width: 100%;
    padding: 1px 10px; 
    background: white;
    position: fixed;
    z-index: 100;
    line-height: 30px;
}
  
header img {
    float: right;
    height: 100%;
    padding: 5px;
}
/* h1 {
  display: none;
} */
@media only screen and (max-width: 800px) {
 a {
  display: none;
 } 
 /* h1 {
  display: contents;
} */
}
</style>

    <header>
      <!-- make this h1 -->
          <a href="/" data-sveltekit-noscroll>
            {config.description}
          </a>
          <!-- <h1>
            {config.description}
          </h1> -->
          <img src="/miji.svg" alt="Mi-Ji logo">
    </header>