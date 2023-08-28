<svelte:window bind:scrollY={y}/>

<script>
    import { store } from './store.js';

    let y;
</script>
  
<div class="scene">
    <div class="cube" style="transform: translateZ(-400px) rotateY({y / 20}deg)">

        <div class="pistachio ABHouse face one">
            <a class="images" data-sveltekit-noscroll href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face two">
            <a class="images" data-sveltekit-noscroll href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face three">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face four">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face five">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face six">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>
        <div class="grey FourVisitsTo52Posts face seven">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>
        <div class="pistachio ABHouse face eight">
            <a class="images" data-sveltekit-noscroll  href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face nine">
            <a class="images" data-sveltekit-noscroll  href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face ten">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face eleven">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face twelve">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face thirteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>
        <div class="grey FourVisitsTo52Posts face fourteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>
        <div class="pistachio ABHouse face fifteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face sixteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face seventeen">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face eighteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face nineteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face twenty">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>
        <div class="grey FourVisitsTo52Posts face twentyOne">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>
        <div class="pistachio ABHouse face twentyTwo">
            <a class="images" data-sveltekit-noscroll  href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face twentyThree">
            <a class="images" data-sveltekit-noscroll  href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face twentyFour">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face twentyFive">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face twentySix">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face twentySeven">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>
        <div class="grey FourVisitsTo52Posts face twentyEight">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>
    </div>
</div>

<div id="filler"></div>

<style>    

#filler {
	height: 10000vh;
	user-select: none;
}

.scene {
    width: 400%;
    height: 400px;
    width: 100%;
    height: 100dvh;
    perspective: 8000px;
    /* perspective: none; */
    position: fixed;
    top: 24px;
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
    top: 24px;
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
    cursor: url(/view/green.svg), crosshair;
}
.yellow img:hover {
    cursor: url(/view/yellow.svg), crosshair;
}
.pink img:hover {
    cursor: url(/view/pink.svg), crosshair;
}
.red img:hover {
    cursor: url(/view/red.svg), crosshair;
}
.grey img:hover {
    cursor: url(/view/grey.svg), crosshair;
}
.pistachio img:hover {
    cursor: url(/view/pistachio.svg), crosshair;
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
    display: none;
    /* transition: 2s; */
}

.images .pictures {
	display: block;
}

.blueprints {
	display: none;
}

.blueprints ~ .blur{
	display: none;
}

.pictures + img {
	display: none;
}

.blueprints + .plan {
	display: block;
    background: white;
}

/* `````````````````````````````` PLANS */
/* .plan {
    display: none
} */

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

.one {
  transform: rotateY(0deg) translateZ(1775px);
}
.two {
  transform: rotateY(12.8571428571deg) translateZ(1775px);
}
.three {
  transform: rotateY(25.7142857143deg) translateZ(1775px);
}
.four {
  transform: rotateY(38.5714285714deg) translateZ(1775px);
}
.five {
  transform: rotateY(51.4285714286deg) translateZ(1775px);
}
.six {
  transform: rotateY(64.2857142857deg) translateZ(1775px);
}
.seven {
    transform: rotateY(77.1428571429deg) translateZ(1775px);
}
.eight {
    transform: rotateY(90deg) translateZ(1775px);
}
.nine {
  transform: rotateY(102.8571428571deg) translateZ(1775px);
}
.ten {
  transform: rotateY(115.7142857143deg) translateZ(1775px);
}
.eleven {
  transform: rotateY(128.5714285714deg) translateZ(1775px);
}
.twelve {
  transform: rotateY(141.4285714286deg) translateZ(1775px);
}
.thirteen {
  transform: rotateY(154.2857142857deg) translateZ(1775px);
}
.fourteen {
  transform: rotateY(167.1428571429deg) translateZ(1775px);
}
.fifteen {
  transform: rotateY(180deg) translateZ(1775px);
}
.sixteen {
  transform: rotateY(192.8571428571deg) translateZ(1775px);
}
.seventeen {
  transform: rotateY(205.7142857143deg) translateZ(1775px);
}
.eighteen {
  transform: rotateY(218.5714285714deg) translateZ(1775px);
}
.nineteen {
  transform: rotateY(231.4285714286deg) translateZ(1775px);
}
.twenty {
  transform: rotateY(244.2857142857deg) translateZ(1775px);
}
.twentyOne {
  transform: rotateY(257.1428571429deg) translateZ(1775px);
}
.twentyTwo {
  transform: rotateY(270deg) translateZ(1775px);
}
.twentyThree {
  transform: rotateY(282.8571428571deg) translateZ(1775px);
}
.twentyFour {
  transform: rotateY(295.7142857143deg) translateZ(1775px);
}
.twentyFive {
  transform: rotateY(308.5714285714deg) translateZ(1775px);
}
.twentySix {
  transform: rotateY(321.4285714286deg) translateZ(1775px);
}
.twentySeven {
  transform: rotateY(334.2857142857deg) translateZ(1775px);
}
.twentyEight {
  transform: rotateY(347.1428571429deg) translateZ(1775px);
}
</style>