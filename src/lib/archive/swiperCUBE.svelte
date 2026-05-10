<svelte:window bind:scrollY={y}/>
<script>

import { projects } from '/Users/xavierconnelly/miji/src/routes/projects/projects.js';

let y;

</script>

<div class="scene">
    <div class="cube" style="transform: translateZ(-400px) rotateY({y}deg)">

        {#each projects as { slug, title, colour, content }}
            <div class="{colour} {slug} face one">
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
        <!-- <div style="   transform: rotateY(90deg) ">
            {#each projects as { slug, title, colour, content }}
            <div class="{colour} {slug} face one">
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
        </div> -->
        <div class="pink ABHouse face one" style="transform: rotateY(115.7142857143deg) translateZ(1775px)">
            <a class="images" href="../projects/ABHouse">        
                <img class="blur" src="../src/lib/images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="clear" src="../src/lib/images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../src/lib/images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>

            <caption>
                ABHouse
            </caption>
        </div>
    </div>
</div>

<div id="filler"></div>

<style>    

#filler{
	height: 1000vh;
	user-select: none;
}


.ABHouse {
    transform: rotateY(12.8571428571deg) translateZ(1775px);
}

.APavilion {
    transform: rotateY(25.7142857143deg) translateZ(1775px);
}

.ARenovationForThree {
    transform: rotateY(38.5714285714deg) translateZ(1775px);
}

.ACertainKindofLife {
    transform: rotateY(51.4285714286deg) translateZ(1775px);
}

.AHouseForOne {
    transform: rotateY(64.2857142857deg) translateZ(1775px);
}

.TokyoTina {
    transform: rotateY(77.1428571429deg) translateZ(1775px);
}

.FourVisitsTo52Posts {
    transform: rotateY(90deg) translateZ(1775px);
}






.scene {
  width: 400%;
  height: 400px;
	width: 100%;
	height: 100dvh;
  perspective: 8000px;
  /* perspective: none; */
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
		user-select: none;
}


.scene {
    width: 400px;
    height: 400px;
    /* perspective: 8000px; */
    perspective: none;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    user-select: none;
}
.cube {
    /* width: 100%;
    height: 100%; */
    position: relative;
    transform-style: preserve-3d;
    user-select: none;
}

.face {
    width: 100%;
    width: 400px;
    /* height: 100%; */
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    min-width: 400px;
}


/* #outer {
    position: fixed;
    top: 24px;
    width: 100dvw;
    height: calc(100dvh - 100px);
} */

.face img {
	width: 100%;
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
img {
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

.face:hover caption {
    display: block;
}

.face:hover .blur {
    opacity: 1;
    /* transition: 0s; */
}

.face:hover .clear {
    opacity: 1;
    /* transition: 0s; */
}
</style>