<svelte:head>
    <script> src="https://unpkg.com/browse/swiper@7.4.1/swiper-bundle.min.js" </script>
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css">
</svelte:head>

<script>

    import { projects } from '/Users/xavierconnelly/miji/src/routes/projects/projects.js';

    // import Swiper JS
    // import Swiper from 'swiper';
    // import Swiper styles
    // import 'swiper/css';

    const fifteen = new Swiper(".fifteen", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    freeMode: true,
    slidesPerView: "auto",
    loopedSlides: 15,
    mousewheel: true
    });
</script>


<div class="swiper-container fifteen">
    <div class="swiper-wrapper">

    {#each projects as { slug, title, colour, content }}
        <div class="swiper-slide {colour}" id="{title}">
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

<style>

    * {
        box-sizing: border-box;
    }
    
    .swiper {
        display: inline-block;
        float: left;
        width: 100dvw;
        height: calc(100dvh - 100px);
        transition-property: transform;
    }
    
    .swiper-slide {
        height: unset;
        width: 400px;
        transition-property: transform;
    }
    
    .photo {
        position: relative;
    }
    
    .photo,
    .plan {
        overflow: hidden;
        height: auto;
        -webkit-transition: all 1s ease-out;
        -o-transition: all 1s ease-out;
        -webkit-transition: 1s ease-out;
        -o-transition: 1s ease-out;
        transition: 1s ease-out;
    }
    
    /* CHANGE BACK  to below, maybe
    .photo .clear {
        opacity: 1; 
    } */
    
    .photo .clear {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0; 
    }
    
    /* `````````````````````````````` PLANS */
    
    .plan picture img {
        display: none;
    }
    
    
 

    .swiper-slide {
    width: 400px;
    flex-shrink: 0;
    height: fit-content;
    /* transition-property: all; */
}

.images {
  /* width: 100%; */
  position: relative;
  top: 6px;
}

/* not sure aboout this*/
.swiper-slide  img {
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
  display: none;
}

caption {
    display: none;
    position: relative;
    top: 3px;
    text-align: left;
}

.swiper-slide:hover caption {
    display: block;
}

.swiper-slide:hover .blur {
    opacity: 1;
    /* transition: 0s; */
}

.swiper-slide:hover .clear {
    opacity: 1;
    /* transition: 0s; */
}
    </style>