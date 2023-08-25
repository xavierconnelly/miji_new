<script>
	export let data;
    // import { projects } from './projects.js';

//     function goTop() {
//     document.getElementsByClassName('buttons').scrollIntoView()
// 		;
//   }
  import MediaQuery from '/src/lib/MediaQuery.svelte';

</script>


<!-- <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches> -->
    <MediaQuery query="(min-width: 800px)" let:matches>
        {#if matches}
            <a href="/" class="{data.project.colour} {data.project.slug}"  data-sveltekit-noscroll id="display">
                <!-- Images -->
                {#each data.project.images as  i}
                    <img src="../images/{data.project.slug}/{i}_800.webp" alt="{data.project.title} project">
                {/each}
            
                <!-- Plans -->
                {#each data.project.plans as  i}
                    <img class="plan" src="../images/{data.project.slug}/plan_{i}_800.svg" alt="{data.project.title}">
                {/each}
            </a>
        {:else}
        <span class="{data.project.colour} {data.project.slug}" id="display">
            <!-- Images -->
            {#each data.project.images as  i}
                <img src="../images/{data.project.slug}/{i}_800.webp" alt="{data.project.title} project">
            {/each}
        
            <!-- Plans -->
            {#each data.project.plans as  i}
                <img class="plan" src="../images/{data.project.slug}/plan_{i}_800.svg" alt="{data.project.title}">
            {/each}
        </span>
      {/if}
  </MediaQuery>

<!-- Buttons -->
<div class="buttons ABHouse">
    <a href="/projects/TokyoTina" data-sveltekit-scroll>
        <img id="prev" class="arrow" src="/prev/{data.project.colour}.svg" alt="prev button">
    </a>
    <a href="/projects/APavilion" data-sveltekit-scroll>
        <img id="next" class="arrow" src="/next/{data.project.colour}.svg" alt="prev button">
    </a>
</div>


<!-- Buttons -->
<div  class="buttons APavilion">
        <a href="/projects/ABHouse">
        <img id="prev" class="arrow" src="/prev/{data.project.colour}.svg" alt="prev button">
    </a>
    <a href="/projects/FourVisitsTo52Posts">
        <img id="next" class="arrow" src="/next/{data.project.colour}.svg" alt="prev button">
    </a>
</div>

<!-- Buttons -->
<div  class="buttons FourVisitsTo52Posts">
<a href="/projects/APavilion">
    <img id="prev" class="arrow" src="/prev/{data.project.colour}.svg" alt="prev button">
</a>
<a href="/projects/ARenovationForThree">
    <img id="next" class="arrow" src="/next/{data.project.colour}.svg" alt="prev button">
</a>
</div>

<!-- Buttons -->
<div  class="buttons ARenovationForThree">
<a href="/projects/FourVisitsTo52Posts">
    <img href="" id="prev" class="arrow" src="/prev/{data.project.colour}.svg" alt="prev button">
</a>
<a href="/projects/ACertainKindofLife">
    <img id="next" class="arrow" src="/next/{data.project.colour}.svg" alt="prev button">
</a>
</div>

<!-- Buttons -->
<div  class="buttons ACertainKindofLife">
<a href="/projects/ABHouse">
    <img href="" id="prev" class="arrow" src="/prev/{data.project.colour}.svg" alt="prev button">
</a>
<a href="/projects/AHouseForOne">
    <img id="next" class="arrow" src="/next/{data.project.colour}.svg" alt="prev button">
</a>
</div>

<!-- Buttons -->
<div  class="buttons AHouseForOne">
<a href="/projects/ACertainKindofLife">
    <img href="" id="prev" class="arrow" src="/prev/{data.project.colour}.svg" alt="prev button">
</a>
<a href="/projects/TokyoTina">
    <img id="next" class="arrow" src="/next/{data.project.colour}.svg" alt="prev button">
</a>
</div>

<!-- Buttons -->
<div  class="buttons TokyoTina">
<a href="/projects/AHouseForOne">
    <img href="" id="prev" class="arrow" src="/prev/{data.project.colour}.svg" alt="prev button">
</a>
<a href="/projects/ABHouse">
    <img id="next" class="arrow" src="/next/{data.project.colour}.svg" alt="prev button">
</a>
</div>

<caption class="{data.project.colour} sun">
    <h2>{data.project.title}</h2> &nbsp-&nbsp 
    <p>
     {@html data.project.content} 
    </p> 
    <span>
        
    </span>
</caption>

<a 	data-sveltekit-noscroll 
    class="white" 
    href="/"
	style="	background: white;
            height: calc(100% - 80px);
            width: 100%;
            z-index: -5;
            opacity: 0.8;
            transition: all 2s ease 0s;
            position: fixed;
            top: 30px;
            left: 0;">
</a>


<style>

    #display {
        margin-bottom: 100px;
    }

    /* .pink ~ .sun {
        background: var(--pink);
    }
    .green ~ .sun {
        background: var(--green);
    }
    .red ~ .sun {
        background: var(--red);
    }
    .pistachio ~ .sun {
        background: var(--pistachio);
    }
    .yellow ~ .sun {
        background: var(--yellow);
    }
    .grey {
        background: var(--grey);
    } */

img {
    width: 100%;
    display: block;
    display: flex;
    flex-direction: column;
}
.plan {
    background-color: rgb(255, 255, 255)
}
/* caption {
    padding: 10px;
    /* display: block; */
    /* display: flex;
    text-align: left;
    min-height: 45px;
    width: 100%;
} */ 
/* .moon {
    background: white;
    color: #fff;
    user-select: none;
    position: relative;
} */
/* .sun {
    position: fixed;
    bottom: 0px;
} */

caption {
    padding: 10px;
    /* display: block; */
    /* display: flex; */
    text-align: left;
    min-height: 65px;
    width: 40%;
    position: fixed;
    bottom: 0px;
}

caption span {
    width: 100%;
}

/* caption * {
    display: contents;
} */

caption  * {
    /* float: left; */
    display: contents;
}

*::selection {
    background-color: white;
    color: black;
}

.buttons {display: none;}
.ABHouse ~ .ABHouse {display: block;}
.AHouseForOne ~ .AHouseForOne {display: block;}
.APavilion ~ .APavilion {display: block;}
.ACertainKindofLife ~ .ACertainKindofLife {display: block;}
.FourVisitsTo52Posts ~ .FourVisitsTo52Posts {display: block;}
.TokyoTina ~ .TokyoTina {display: block;}
.ARenovationForThree ~ .ARenovationForThree {display: block;}



/* img:hover {
    cursor: url(../src/lib/close.svg), crosshair;
} */

.green img,
.green ~ .white  {
    cursor: url(/close/green.svg), crosshair;
}
.yellow img,
.yellow ~ .white {
    cursor: url(/close/yellow.svg), crosshair;
}
.pink img,
.pink ~ .white {
    cursor: url(/close/pink.svg), crosshair;
}
.red img,
.red ~ .white  {
    cursor: url(/close/red.svg), crosshair;
}
.grey img,
.grey ~ .white  {
    cursor: url(/close/grey.svg), crosshair;
}
.pistachio img,
.pistachio ~ .white  {
    cursor: url(/close/pistachio.svg), crosshair;
}


.arrow {
    z-index: 60;
    width: 70px;
    padding: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    height: auto;
    cursor: pointer;
    position: fixed;
}

#next {
    right: 0;
}

#prev {
    left: 0;
}


@media only screen and (max-width: 800px) {
    img {
        width: unset;
        height: 100%;
    }
    caption {
        width: 100%
    }
}

@media only screen and (max-height: 800px) {
    /* .sun {
        bottom: 65px;
    } */
    .arrow {
        display: block;
    }
    img {
        width: unset;
        height: 100%;
    }
}

@media only screen and (max-width: 600px) {
    .arrow {
        display: block;
    }
    img {
        width: 100%;
        height: unset;
    }
}
</style>
