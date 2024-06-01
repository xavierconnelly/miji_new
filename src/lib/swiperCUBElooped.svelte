<svelte:window bind:scrollY={y}/>

<script>
    import { store } from './store.js';

    let y;

    function onLoad() {
        window.scrollTo(0, 50000);
	}
</script>
  
<div class="scene">
    <div class="cube" style="transform: translateZ(-400px) rotateY({y / 20}deg)">

        <div class="grey FourVisitsTo52Posts face one">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>
        <div class="pink ACourtyardHouse face two">
            <a class="images" data-sveltekit-noscroll href="../projects/ACourtyardHouse">        
                <img class="blur {$store}" src="../images/ACourtyardHouse/01_800_blur.webp" width="auto" height="auto" alt="ACourtyardHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ACourtyardHouse/01_800.webp" width="auto" height="auto" alt="ACourtyardHouse project">
                <img class="plan" src="../images/ACourtyardHouse/Plan_01_800.svg" width="auto" height="auto" alt="ACourtyardHouse project">
            </a>
            <caption>
                A Courtyard House - Brighton | Bunurong Country, Australia 2024
            </caption>
        </div>
        <div class="pistachio ABHouse face three">
            <a class="images" data-sveltekit-noscroll href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face four">
            <a class="images" data-sveltekit-noscroll href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face five">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face six">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face seven">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face eight">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>

<!-- // REPEAT // -->

        <div class="grey FourVisitsTo52Posts face nine">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>
        <div class="pink ACourtyardHouse face ten">
            <a class="images" data-sveltekit-noscroll href="../projects/ACourtyardHouse">        
                <img class="blur {$store}" src="../images/ACourtyardHouse/01_800_blur.webp" width="auto" height="auto" alt="ACourtyardHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ACourtyardHouse/01_800.webp" width="auto" height="auto" alt="ACourtyardHouse project">
                <img class="plan" src="../images/ACourtyardHouse/Plan_01_800.svg" width="auto" height="auto" alt="ACourtyardHouse project">
            </a>
            <caption>
                A Courtyard House - Brighton | Bunurong Country, Australia 2024
            </caption>
        </div>
        <div class="pistachio ABHouse face eleven">
            <a class="images" data-sveltekit-noscroll  href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face twelve">
            <a class="images" data-sveltekit-noscroll  href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face thirteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face fourteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face fifteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face sixteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>

<!-- // REPEAT // -->

        <div class="grey FourVisitsTo52Posts face seventeen">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>
         <div class="pink ACourtyardHouse face eighteen">
            <a class="images" data-sveltekit-noscroll href="../projects/ACourtyardHouse">        
                <img class="blur {$store}" src="../images/ACourtyardHouse/01_800_blur.webp" width="auto" height="auto" alt="ACourtyardHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ACourtyardHouse/01_800.webp" width="auto" height="auto" alt="ACourtyardHouse project">
                <img class="plan" src="../images/ACourtyardHouse/Plan_01_800.svg" width="auto" height="auto" alt="ACourtyardHouse project">
            </a>
            <caption>
                A Courtyard House - Brighton | Bunurong Country, Australia 2024
            </caption>
        </div>
        <div class="pistachio ABHouse face nineteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face twenty">
            <a class="images" data-sveltekit-noscroll  href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face twentyOne">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face twentyTwo">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face twentyThree">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face twentyFour">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>


<!-- // REPEAT // -->

        <div class="grey FourVisitsTo52Posts face twentyFive">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>
        <div class="pink ACourtyardHouse face twentySix">
            <a class="images" data-sveltekit-noscroll href="../projects/ACourtyardHouse">        
                <img class="blur {$store}" src="../images/ACourtyardHouse/01_800_blur.webp" width="auto" height="auto" alt="ACourtyardHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ACourtyardHouse/01_800.webp" width="auto" height="auto" alt="ACourtyardHouse project">
                <img class="plan" src="../images/ACourtyardHouse/Plan_01_800.svg" width="auto" height="auto" alt="ACourtyardHouse project">
            </a>
            <caption>
                A Courtyard House - Brighton | Bunurong Country, Australia 2024
            </caption>
        </div>
        <div class="pistachio ABHouse face twentySeven">
            <a class="images" data-sveltekit-noscroll  href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face twentyEight">
            <a class="images" data-sveltekit-noscroll  href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face twentyNine">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face thirty">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face thirtyOne">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face thirtyTwo">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>

    </div>
</div>

<!-- <div id="filler-container">
    <div id="filler"></div>
</div> -->

<div id="filler"></div>
<style>    

/* #filler-container {
    position: fixed;
    top: 0;
    height: 100dvh;
    width: 100dvw;
    
} */
#filler {
	height: 10000vh;
    /* transform: translate(-50%); */
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
  transform: rotateY(0deg) translateZ(2030px);
}
.two {
  transform: rotateY(11.25deg) translateZ(2030px);
}
.three {
  transform: rotateY(22.5deg) translateZ(2030px);
}
.four {
  transform: rotateY(33.75deg) translateZ(2030px);
}
.five {
  transform: rotateY(45deg) translateZ(2030px);
}
.six {
  transform: rotateY(56.25deg) translateZ(2030px);
}
.seven {
    transform: rotateY(67.5deg) translateZ(2030px);
}
.eight {
    transform: rotateY(78.75deg) translateZ(2030px);
}
.nine {
  transform: rotateY(90deg) translateZ(2030px);
}
.ten {
  transform: rotateY(101.25deg) translateZ(2030px);
}
.eleven {
  transform: rotateY(112.5deg) translateZ(2030px);
}
.twelve {
  transform: rotateY(123.75deg) translateZ(2030px);
}
.thirteen {
  transform: rotateY(135deg) translateZ(2030px);
}
.fourteen {
  transform: rotateY(146.25deg) translateZ(2030px);
}
.fifteen {
  transform: rotateY(157.5deg) translateZ(2030px);
}
.sixteen {
  transform: rotateY(168.75deg) translateZ(2030px);
}
.seventeen {
  transform: rotateY(180deg) translateZ(2030px);
}
.eighteen {
  transform: rotateY(191.25deg) translateZ(2030px);
}
.nineteen {
  transform: rotateY(202.5deg) translateZ(2030px);
}
.twenty {
  transform: rotateY(213.75deg) translateZ(2030px);
}
.twentyOne {
  transform: rotateY(225deg) translateZ(2030px);
}
.twentyTwo {
  transform: rotateY(236.25deg) translateZ(2030px);
}
.twentyThree {
  transform: rotateY(247.5deg) translateZ(2030px);
}
.twentyFour {
  transform: rotateY(258.75deg) translateZ(2030px);
}
.twentyFive {
  transform: rotateY(270deg) translateZ(2030px);
}
.twentySix {
  transform: rotateY(281.25deg) translateZ(2030px);
}
.twentySeven {
  transform: rotateY(292.5deg) translateZ(2030px);
}
.twentyEight {
  transform: rotateY(303.75deg) translateZ(2030px);
}
.twentyNine {
  transform: rotateY(315deg) translateZ(2030px);
}
.thirty {
  transform: rotateY(326.25deg) translateZ(2030px);
}
.thirtyOne {
  transform: rotateY(337.5deg) translateZ(2030px);
}
.thirtyTwo {
  transform: rotateY(348.75deg) translateZ(2030px);
}



@media only screen and (max-width: 800px) {
    .scene, .face {
        width: 300px;
        min-width: 300px;
    }
}

@media only screen and (max-height: 800px) {
    .scene, .face {
        width: 300px;
        min-width: 300px;
    }


.one {
  transform: rotateY(0deg) translateZ(1522.5px);
}
.two {
  transform: rotateY(11.25deg) translateZ(1522.5px);
}
.three {
  transform: rotateY(22.5deg) translateZ(1522.5px);
}
.four {
  transform: rotateY(33.75deg) translateZ(1522.5px);
}
.five {
  transform: rotateY(45deg) translateZ(1522.5px);
}
.six {
  transform: rotateY(56.25deg) translateZ(1522.5px);
}
.seven {
    transform: rotateY(67.5deg) translateZ(1522.5px);
}
.eight {
    transform: rotateY(78.75deg) translateZ(1522.5px);
}
.nine {
  transform: rotateY(90deg) translateZ(1522.5px);
}
.ten {
  transform: rotateY(101.25deg) translateZ(1522.5px);
}
.eleven {
  transform: rotateY(112.5deg) translateZ(1522.5px);
}
.twelve {
  transform: rotateY(123.75deg) translateZ(1522.5px);
}
.thirteen {
  transform: rotateY(135deg) translateZ(1522.5px);
}
.fourteen {
  transform: rotateY(146.25deg) translateZ(1522.5px);
}
.fifteen {
  transform: rotateY(157.5deg) translateZ(1522.5px);
}
.sixteen {
  transform: rotateY(168.75deg) translateZ(1522.5px);
}
.seventeen {
  transform: rotateY(180deg) translateZ(1522.5px);
}
.eighteen {
  transform: rotateY(191.25deg) translateZ(1522.5px);
}
.nineteen {
  transform: rotateY(202.5deg) translateZ(1522.5px);
}
.twenty {
  transform: rotateY(213.75deg) translateZ(1522.5px);
}
.twentyOne {
  transform: rotateY(225deg) translateZ(1522.5px);
}
.twentyTwo {
  transform: rotateY(236.25deg) translateZ(1522.5px);
}
.twentyThree {
  transform: rotateY(247.5deg) translateZ(1522.5px);
}
.twentyFour {
  transform: rotateY(258.75deg) translateZ(1522.5px);
}
.twentyFive {
  transform: rotateY(270deg) translateZ(1522.5px);
}
.twentySix {
  transform: rotateY(281.25deg) translateZ(1522.5px);
}
.twentySeven {
  transform: rotateY(292.5deg) translateZ(1522.5px);
}
.twentyEight {
  transform: rotateY(303.75deg) translateZ(1522.5px);
}
.twentyNine {
  transform: rotateY(315deg) translateZ(1522.5px);
}
.thirty {
  transform: rotateY(326.25deg) translateZ(1522.5px);
}
.thirtyOne {
  transform: rotateY(337.5deg) translateZ(1522.5px);
}
.thirtyTwo {
  transform: rotateY(348.75deg) translateZ(1522.5px);
}


}

@media only screen and (max-width: 600px) {
    .scene, .face {
        width: 300px;
        min-width: 300px;
    }
}
</style>
