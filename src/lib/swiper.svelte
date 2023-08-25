<script>
// import Swiper from 'swiper';


import { projects } from '/Users/xavierconnelly/miji/src/routes/projects/projects.js';

import { register } from 'swiper/element/bundle';
register();

// import Swiper styles
// import 'swiper/css';

const spaceBetween = 0;
const direction = 'horizontal';
const perView = 'auto';
// const mousewheel = 'true';
const freeMode = 'true';
// const loop = 'true';
</script>
  

<swiper-container
    slides-per-view= {perView}
    space-between= {spaceBetween}
    freeMode= {freeMode}
    direction= {direction}
    loop= {true}
    mousewheel={{
        forceToAxis: false,
        sensitivity: 10,
      }}
> 


        {#each projects as { slug, title, colour, content }}
            <swiper-slide id="{title}" class="{colour}">

                <a class="images" href="../projects/{slug}">        
                    <img class="blur" src="../src/lib/images/{slug}/01_800_blur.webp" width="auto" height="auto" alt="{title} project">
                    <img class="clear" src="../src/lib/images/{slug}/01_800.webp" width="auto" height="auto" alt="{title} project">
                    <img class="plan" src="../src/lib/images/{slug}/Plan_01_800.svg" width="auto" height="auto" alt="{title} project">
                </a>

                <caption>
                    {title} {content}
                </caption>

            </swiper-slide>
        {/each}
    ...
</swiper-container>
<!-- <div id="outer">
    <div class="swiper">
        <div class="swiper-wrapper">
            {#each projects as { slug, title, colour, content}}

                <div class="swiper-slide {colour}">
                    <a class="images" href="../projects/{slug}">        
                        <img class="blur" src="../src/lib/images/{slug}/01_800_blur.webp" width="auto" height="auto" alt="{title} project">
                        <img class="clear" src="../src/lib/images/{slug}/01_800.webp" width="auto" height="auto" alt="{title} project">
                        <img class="plan" src="../src/lib/images/{slug}/Plan_01_800.svg" width="auto" height="auto" alt="{title} project">
                    </a>
                    <caption>
                        {title} {content}
                    </caption>
                </div>
    
            {/each}
        </div>
    </div>
</div> -->


    <!-- <swiper-container
        direction= "horizontal" 
        loop= "true"
        freeMode= "true"
        mousewheel= "true"
        slides-per-view={auto}
        space-between={spaceBetween}>  -->
        <!-- <swiper-wrapper> -->

            <!-- {#each projects as { slug, title, colour, content }}
            <swiper-slide id="{title}" class="{colour}">

                <a class="images" href="../projects/{slug}">        
                    <img class="blur" src="../src/lib/images/{slug}/01_800_blur.webp" width="auto" height="auto" alt="{title} project">
                    <img class="clear" src="../src/lib/images/{slug}/01_800.webp" width="auto" height="auto" alt="{title} project">
                    <img class="plan" src="../src/lib/images/{slug}/Plan_01_800.svg" width="auto" height="auto" alt="{title} project">
                </a>

                <caption>
                    {title} {content}
                </caption>

            </swiper-slide>
        {/each} -->
   
   <!-- </swiper-wrapper> -->

<style>    
#outer {
    position: fixed;
    top: 24px;
    width: 100dvw;
    height: calc(100dvh - 100px);
}

swiper-container {
    /* float: left; */
    width: 100%;
    /* overflow: hidden; */
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}

swiper-slide {
    width: 400px;
    flex-shrink: 0;
    height: fit-content;
    /* transition-property: all; */
}

/* 
swiper-slide *:hover {
        cursor: url(../src/lib/view.svg), crosshair;
} 
*/

.swiper {
  width: 600px;
  height: 300px;
}

.green img:hover {
    cursor: url(../src/lib/view/green.svg), crosshair;
}
.yellow img:hover {
    cursor: url(../src/lib/view/yellow.svg), crosshair;
}
.pink img:hover {
    cursor: url(../src/lib/view/pink.svg), crosshair;
}
.red img:hover {
    cursor: url(../src/lib/view/red.svg), crosshair;
}
.grey img:hover {
    cursor: url(../src/lib/view/grey.svg), crosshair;
}
.pistachio img:hover {
    cursor: url(../src/lib/view/pistachio.svg), crosshair;
}

.images {
  /* width: 100%; */
  position: relative;
  top: 6px;
}

/* not sure aboout this*/
swiper-slide  img {
    width: 100%;
    display: block;
}
/* 
.blur {
    position: absolute;
} */

.clear {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0; 
    /* transition: 2s; */
}

/* `````````````````````````````` PLANS */
.plan {
    display: none
}

/* .Plans .plan,
.Images .photo {
    display: block
} */

/* `````````````````````````````` WORDS */
caption {
    display: none;
    position: relative;
    top: 3px;
    text-align: left;
}

swiper-slide:hover caption {
    display: block;
}

swiper-slide:hover .blur {
    opacity: 1;
    /* transition: 0s; */
}

swiper-slide:hover .clear {
    opacity: 1;
    /* transition: 0s; */
}
</style>