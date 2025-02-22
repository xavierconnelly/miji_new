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

<!-- // Start of loop
        The image 'two' and 'three' will approx be in the middle // -->

<!-- first quarter -->

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

        <div class="red ALightAddition face two">
            <a class="images" data-sveltekit-noscroll  href="../projects/ALightAddition">        
                <img class="blur {$store}" src="../images/ALightAddition/01_800_blur.webp" width="auto" height="auto" alt="ALightAddition project">
                <img class="clear {$store}" src="../images/ALightAddition/01_800.webp" width="auto" height="auto" alt="ALightAddition project">
                <img class="plan" src="../images/ALightAddition/Plan_01_800.svg" width="auto" height="auto" alt="ALightAddition project">
            </a>
            <caption>
                A Light Addition - Bunurong Country | St Kilda East, Australia 2024
            </caption>
        </div>

        <div class="pink ACourtyardHouse face three">
            <a class="images" data-sveltekit-noscroll href="../projects/ACourtyardHouse">        
                <img class="blur {$store}" src="../images/ACourtyardHouse/01_800_blur.webp" width="auto" height="auto" alt="ACourtyardHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ACourtyardHouse/01_800.webp" width="auto" height="auto" alt="ACourtyardHouse project">
                <img class="plan" src="../images/ACourtyardHouse/Plan_01_800.svg" width="auto" height="auto" alt="ACourtyardHouse project">
            </a>
            <caption>
                A Courtyard House - Bunurong Country | Brighton, Australia 2024
            </caption>
        </div>
        <div class="pistachio ABHouse face four">
            <a class="images" data-sveltekit-noscroll href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face five">
            <a class="images" data-sveltekit-noscroll href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face six">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face seven">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face eight">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face nine">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>


<!-- second quarter -->

        <div class="grey FourVisitsTo52Posts face ten">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>

        <div class="red ALightAddition face eleven">
            <a class="images" data-sveltekit-noscroll  href="../projects/ALightAddition">        
                <img class="blur {$store}" src="../images/ALightAddition/01_800_blur.webp" width="auto" height="auto" alt="ALightAddition project">
                <img class="clear {$store}" src="../images/ALightAddition/01_800.webp" width="auto" height="auto" alt="ALightAddition project">
                <img class="plan" src="../images/ALightAddition/Plan_01_800.svg" width="auto" height="auto" alt="ALightAddition project">
            </a>
            <caption>
                A Light Addition - Bunurong Country | St Kilda East, Australia 2024
            </caption>
        </div>

        <div class="pink ACourtyardHouse face twelve">
            <a class="images" data-sveltekit-noscroll href="../projects/ACourtyardHouse">        
                <img class="blur {$store}" src="../images/ACourtyardHouse/01_800_blur.webp" width="auto" height="auto" alt="ACourtyardHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ACourtyardHouse/01_800.webp" width="auto" height="auto" alt="ACourtyardHouse project">
                <img class="plan" src="../images/ACourtyardHouse/Plan_01_800.svg" width="auto" height="auto" alt="ACourtyardHouse project">
            </a>
            <caption>
                A Courtyard House - Bunurong Country | Brighton, Australia 2024
            </caption>
        </div>
        <div class="pistachio ABHouse face thirteen">
            <a class="images" data-sveltekit-noscroll href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face fourteen">
            <a class="images" data-sveltekit-noscroll href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face fifteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face sixteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face seventeen">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face eighteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/TokyoTina">        
                <img class="blur {$store}" src="../images/TokyoTina/01_800_blur.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="clear {$store}" src="../images/TokyoTina/01_800.webp" width="auto" height="auto" alt="TokyoTina project">
                <img class="plan" src="../images/TokyoTina/Plan_01_800.svg" width="auto" height="auto" alt="TokyoTina project">
            </a>
            <caption>
                Tokyo Tina - Prahran, Australia 2015
            </caption>
        </div>

<!-- third quarter -->

        <div class="grey FourVisitsTo52Posts face nineteen">
            <a class="images" data-sveltekit-noscroll  href="../projects/FourVisitsTo52Posts">        
                <img class="blur {$store}" src="../images/FourVisitsTo52Posts/01_800_blur.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="clear {$store}" src="../images/FourVisitsTo52Posts/01_800.webp" width="auto" height="auto" alt="FourVisitsTo52Posts project">
                <img class="plan" src="../images/FourVisitsTo52Posts/Plan_01_800.svg" width="auto" height="auto" alt="FourVisitsTo52Posts project">
            </a>
            <caption>
                Four Visits to Fifty-Two Posts - Booklet (in collaboration with Ben Hosking) 2023
            </caption>
        </div>

        <div class="red ALightAddition face twenty">
            <a class="images" data-sveltekit-noscroll  href="../projects/ALightAddition">        
                <img class="blur {$store}" src="../images/ALightAddition/01_800_blur.webp" width="auto" height="auto" alt="ALightAddition project">
                <img class="clear {$store}" src="../images/ALightAddition/01_800.webp" width="auto" height="auto" alt="ALightAddition project">
                <img class="plan" src="../images/ALightAddition/Plan_01_800.svg" width="auto" height="auto" alt="ALightAddition project">
            </a>
            <caption>
                A Light Addition - Bunurong Country | St Kilda East, Australia 2024
            </caption>
        </div>

        <div class="pink ACourtyardHouse face twentyOne">
            <a class="images" data-sveltekit-noscroll href="../projects/ACourtyardHouse">        
                <img class="blur {$store}" src="../images/ACourtyardHouse/01_800_blur.webp" width="auto" height="auto" alt="ACourtyardHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ACourtyardHouse/01_800.webp" width="auto" height="auto" alt="ACourtyardHouse project">
                <img class="plan" src="../images/ACourtyardHouse/Plan_01_800.svg" width="auto" height="auto" alt="ACourtyardHouse project">
            </a>
            <caption>
                A Courtyard House - Bunurong Country | Brighton, Australia 2024
            </caption>
        </div>
        <div class="pistachio ABHouse face twentyTwo">
            <a class="images" data-sveltekit-noscroll href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face twentyThree">
            <a class="images" data-sveltekit-noscroll href="../projects/APavilion">        
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

<!-- fourth quarter -->

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

        <div class="red ALightAddition face twentyNine">
            <a class="images" data-sveltekit-noscroll  href="../projects/ALightAddition">        
                <img class="blur {$store}" src="../images/ALightAddition/01_800_blur.webp" width="auto" height="auto" alt="ALightAddition project">
                <img class="clear {$store}" src="../images/ALightAddition/01_800.webp" width="auto" height="auto" alt="ALightAddition project">
                <img class="plan" src="../images/ALightAddition/Plan_01_800.svg" width="auto" height="auto" alt="ALightAddition project">
            </a>
            <caption>
                A Light Addition - Bunurong Country | St Kilda East, Australia 2024
            </caption>
        </div>

        <div class="pink ACourtyardHouse face thirty">
            <a class="images" data-sveltekit-noscroll href="../projects/ACourtyardHouse">        
                <img class="blur {$store}" src="../images/ACourtyardHouse/01_800_blur.webp" width="auto" height="auto" alt="ACourtyardHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ACourtyardHouse/01_800.webp" width="auto" height="auto" alt="ACourtyardHouse project">
                <img class="plan" src="../images/ACourtyardHouse/Plan_01_800.svg" width="auto" height="auto" alt="ACourtyardHouse project">
            </a>
            <caption>
                A Courtyard House - Bunurong Country | Brighton, Australia 2024
            </caption>
        </div>
        <div class="pistachio ABHouse face thirtyOne">
            <a class="images" data-sveltekit-noscroll href="../projects/ABHouse">        
                <img class="blur {$store}" src="../images/ABHouse/01_800_blur.webp" width="auto" height="auto" alt="ABHouse project" on:load|once={onLoad} >
                <img class="clear {$store}" src="../images/ABHouse/01_800.webp" width="auto" height="auto" alt="ABHouse project">
                <img class="plan" src="../images/ABHouse/Plan_01_800.svg" width="auto" height="auto" alt="ABHouse project">
            </a>
            <caption>
                AB House - Wadawurrung Country | Barwon Heads, Australia 2021
            </caption>
        </div>
        <div class="yellow APavilion face thirtyTwo">
            <a class="images" data-sveltekit-noscroll href="../projects/APavilion">        
                <img class="blur {$store}" src="../images/APavilion/01_800_blur.webp" width="auto" height="auto" alt="APavilion project">
                <img class="clear {$store}" src="../images/APavilion/01_800.webp" width="auto" height="auto" alt="APavilion project">
                <img class="plan" src="../images/APavilion/Plan_01_800.svg" width="auto" height="auto" alt="APavilion project">
            </a>
            <caption>
                A Pavilion - Wurundjeri Country | Collingwood, Australia 2021 (in collaboration with client)
            </caption>
        </div>
        <div class="green ARenovationForThree face thirtyThree">
            <a class="images" data-sveltekit-noscroll  href="../projects/ARenovationForThree">        
                <img class="blur {$store}" src="../images/ARenovationForThree/01_800_blur.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="clear {$store}" src="../images/ARenovationForThree/01_800.webp" width="auto" height="auto" alt="ARenovationForThree project">
                <img class="plan" src="../images/ARenovationForThree/Plan_01_800.svg" width="auto" height="auto" alt="ARenovationForThree project">
            </a>
            <caption>
                A Renovation For Three - Dja Dja Wurrung Country | Castlemaine, Australia 2022
            </caption>
        </div>
        <div class="pink ACertainKindofLife face thirtyFour">
            <a class="images" data-sveltekit-noscroll  href="../projects/ACertainKindofLife">        
                <img class="blur {$store}" src="../images/ACertainKindofLife/01_800_blur.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="clear {$store}" src="../images/ACertainKindofLife/01_800.webp" width="auto" height="auto" alt="ACertainKindofLife project">
                <img class="plan" src="../images/ACertainKindofLife/Plan_01_800.svg" width="auto" height="auto" alt="ACertainKindofLife project">
            </a>
            <caption>
                A Certain Kind of Life - Lisbon, Portugal 2019 (Jimmy Carter with Abigail Chang, Francesco Marullo and Agata Siemionow in conjunction with the University of Illinois at Chicago.)
            </caption>
        </div>
        <div class="green AHouseForOne face thirtyFive">
            <a class="images" data-sveltekit-noscroll  href="../projects/AHouseForOne">        
                <img class="blur {$store}" src="../images/AHouseForOne/01_800_blur.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="clear {$store}" src="../images/AHouseForOne/01_800.webp" width="auto" height="auto" alt="AHouseForOne project">
                <img class="plan" src="../images/AHouseForOne/Plan_01_800.svg" width="auto" height="auto" alt="AHouseForOne project">
            </a>
            <caption>
                A House For One - Dja Dja Wurrung Country | Castlemaine, Australia 2016
            </caption>
        </div>
        <div class="red TokyoTina face thirtySix">
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


/* for 9 projects @400px (desktop) */
.one {
  transform: rotateY(0deg) translateZ(2284.5127278471px);
}
.two {
  transform: rotateY(10deg) translateZ(2284.5127278471px);
}
.three {
  transform: rotateY(20deg) translateZ(2284.5127278471px);
}
.four {
  transform: rotateY(30deg) translateZ(2284.5127278471px);
}
.five {
  transform: rotateY(40deg) translateZ(2284.5127278471px);
}
.six {
  transform: rotateY(50deg) translateZ(2284.5127278471px);
}
.seven {
    transform: rotateY(60deg) translateZ(2284.5127278471px);
}
.eight {
    transform: rotateY(70deg) translateZ(2284.5127278471px);
}
.nine {
  transform: rotateY(80deg) translateZ(2284.5127278471px);
}
.ten {
  transform: rotateY(90deg) translateZ(2284.5127278471px);
}
.eleven {
  transform: rotateY(100deg) translateZ(2284.5127278471px);
}
.twelve {
  transform: rotateY(110deg) translateZ(2284.5127278471px);
}
.thirteen {
  transform: rotateY(120deg) translateZ(2284.5127278471px);
}
.fourteen {
  transform: rotateY(130deg) translateZ(2284.5127278471px);
}
.fifteen {
  transform: rotateY(140deg) translateZ(2284.5127278471px);
}
.sixteen {
  transform: rotateY(150deg) translateZ(2284.5127278471px);
}
.seventeen {
  transform: rotateY(160deg) translateZ(2284.5127278471px);
}
.eighteen {
  transform: rotateY(170deg) translateZ(2284.5127278471px);
}
.nineteen {
  transform: rotateY(180deg) translateZ(2284.5127278471px);
}
.twenty {
  transform: rotateY(190deg) translateZ(2284.5127278471px);
}
.twentyOne {
  transform: rotateY(200deg) translateZ(2284.5127278471px);
}
.twentyTwo {
  transform: rotateY(210deg) translateZ(2284.5127278471px);
}
.twentyThree {
  transform: rotateY(220deg) translateZ(2284.5127278471px);
}
.twentyFour {
  transform: rotateY(230deg) translateZ(2284.5127278471px);
}
.twentyFive {
  transform: rotateY(240deg) translateZ(2284.5127278471px);
}
.twentySix {
  transform: rotateY(250deg) translateZ(2284.5127278471px);
}
.twentySeven {
  transform: rotateY(260deg) translateZ(2284.5127278471px);
}
.twentyEight {
  transform: rotateY(270deg) translateZ(2284.5127278471px);
}
.twentyNine {
  transform: rotateY(280deg) translateZ(2284.5127278471px);
}
.thirty {
  transform: rotateY(290deg) translateZ(2284.5127278471px);
}
.thirtyOne {
  transform: rotateY(300deg) translateZ(2284.5127278471px);
}
.thirtyTwo {
  transform: rotateY(310deg) translateZ(2284.5127278471px);
}
.thirtyThree {
  transform: rotateY(320deg) translateZ(2284.5127278471px);
}
.thirtyFour {
  transform: rotateY(330deg) translateZ(2284.5127278471px);
}
.thirtyFive {
  transform: rotateY(340deg) translateZ(2284.5127278471px);
}
.thirtySix {
  transform: rotateY(350deg) translateZ(2284.5127278471px);
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

/* for 9 projects @300px (mobile) */
.one {
  transform: rotateY(0deg) translateZ(1711.38px);
}
.two {
  transform: rotateY(10deg) translateZ(1711.38px);
}
.three {
  transform: rotateY(20deg) translateZ(1711.38px);
}
.four {
  transform: rotateY(30deg) translateZ(1711.38px);
}
.five {
  transform: rotateY(40deg) translateZ(1711.38px);
}
.six {
  transform: rotateY(50deg) translateZ(1711.38px);
}
.seven {
    transform: rotateY(60deg) translateZ(1711.38px);
}
.eight {
    transform: rotateY(70deg) translateZ(1711.38px);
}
.nine {
  transform: rotateY(80deg) translateZ(1711.38px);
}
.ten {
  transform: rotateY(90deg) translateZ(1711.38px);
}
.eleven {
  transform: rotateY(100deg) translateZ(1711.38px);
}
.twelve {
  transform: rotateY(110deg) translateZ(1711.38px);
}
.thirteen {
  transform: rotateY(120deg) translateZ(1711.38px);
}
.fourteen {
  transform: rotateY(130deg) translateZ(1711.38px);
}
.fifteen {
  transform: rotateY(140deg) translateZ(1711.38px);
}
.sixteen {
  transform: rotateY(150deg) translateZ(1711.38px);
}
.seventeen {
  transform: rotateY(160deg) translateZ(1711.38px);
}
.eighteen {
  transform: rotateY(170deg) translateZ(1711.38px);
}
.nineteen {
  transform: rotateY(180deg) translateZ(1711.38px);
}
.twenty {
  transform: rotateY(190deg) translateZ(1711.38px);
}
.twentyOne {
  transform: rotateY(200deg) translateZ(1711.38px);
}
.twentyTwo {
  transform: rotateY(210deg) translateZ(1711.38px);
}
.twentyThree {
  transform: rotateY(220deg) translateZ(1711.38px);
}
.twentyFour {
  transform: rotateY(230deg) translateZ(1711.38px);
}
.twentyFive {
  transform: rotateY(240deg) translateZ(1711.38px);
}
.twentySix {
  transform: rotateY(250deg) translateZ(1711.38px);
}
.twentySeven {
  transform: rotateY(260deg) translateZ(1711.38px);
}
.twentyEight {
  transform: rotateY(270deg) translateZ(1711.38px);
}
.twentyNine {
  transform: rotateY(280deg) translateZ(1711.38px);
}
.thirty {
  transform: rotateY(290deg) translateZ(1711.38px);
}
.thirtyOne {
  transform: rotateY(300deg) translateZ(1711.38px);
}
.thirtyTwo {
  transform: rotateY(310deg) translateZ(1711.38px);
}
.thirtyThree {
  transform: rotateY(320deg) translateZ(1711.38px);
}
.thirtyFour {
  transform: rotateY(330deg) translateZ(1711.38px);
}
.thirtyFive {
  transform: rotateY(340deg) translateZ(1711.38px);
}
.thirtySix {
  transform: rotateY(350deg) translateZ(1711.38px);
}


}

@media only screen and (max-width: 600px) {
    .scene, .face {
        width: 300px;
        min-width: 300px;
    }
}
</style>