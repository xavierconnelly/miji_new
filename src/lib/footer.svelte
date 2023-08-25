<script>
	import Radio from '/Users/xavierconnelly/miji/src/lib/radio.svelte'
	export let radioValue;
	
    import { store } from '/Users/xavierconnelly/miji/src/lib/store.js';

	// import Button from './button.svelte'
    // let active = true;

	const options = [{
		value: 'blueprints',
		label: 'Plans',
	}, {
		value: 'pictures',
		label: 'Images ',
	}]
</script>

<footer class="desktop">
    <address>
        Office MI—JI<br>
        Suite 01/156 George St <br>
        Fitzroy 3065
    </address>
    <nav>
        <a href="mailto:office@mi-ji.com.au">office@mi-ji.com.au</a><br>
    </nav>
    <span id="images">
        <!-- <a data-sveltekit-noscroll href="/" >Home</a><br> -->
        <a data-sveltekit-noscroll href="/about" >About</a><br>
        <!-- <a data-sveltekit-noscroll href="/projects">Projects</a><br> -->
        <a data-sveltekit-noscroll href="https://instagram.com/office_mi.ji" target="none">Instagram</a><br>
    </span>
    <span id="abrv"> 
        <Radio {options} bind:userSelected={$store}/>
    </span>
</footer>

<style>

    /* *{
        outline: 1px solid
    } */

    a:hover {
        color: var(--green);
    }

footer {
    position: fixed;
    background: white;
    bottom: 0;
    width: 100%;
    z-index: 40;
    -webkit-transition: all 1.5s ease;
    -o-transition: all 1.5s ease;
    -webkit-transition: 1.5s ease;
    -o-transition: 1.5s ease;
    transition: 1.5s ease;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
        flex-flow: row wrap;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: end;
    transition: 2s;
}

footer > *  {
    width: 25%;
    padding: 10px;
    transition: 2s;
}

address {-webkit-box-ordinal-group: 1;-ms-flex-order: 1;order: 1;}
nav     {-webkit-box-ordinal-group: 2;-ms-flex-order: 2;order: 2;}
#images {-webkit-box-ordinal-group: 3;-ms-flex-order: 3;order: 3;}
#abrv   {-webkit-box-ordinal-group: 4;-ms-flex-order: 4;order: 4;}

/* #rego a { text-decoration: underline;}
#rego a:hover { color: rgb(255, 80, 0);} */

.active {
    display: none;
}

@media only screen and (max-width: 1200px) {
    footer {
        width: 50%;
    }
    footer > * {
        width: 40%;
    }
}

@media only screen and (max-width: 1000px) {
    footer {
        width: 50%;
    }
    footer > * {
        width: 100%;
    }
}

@media only screen and (max-width: 800px) {
    footer {
        /* z-index: 50; */
        /* bottom: 70%; */
        /* height: 100%; */
        /* Place content at the top of the flex*/
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        /* MAybe not needed */
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        position: fixed;
        bottom: 0;
        width: 50%;
        height: fit-content;
    }

    footer > * {
        width: 100%;
        /* -webkit-box-flex: 1;
        -ms-flex: 1 50%;
        flex: 1 50% */
    }

    address {-webkit-box-ordinal-group: 1;-ms-flex-order: 1;order: 1}
    #images {-webkit-box-ordinal-group: 2;-ms-flex-order: 2;order: 2}
    nav     {-webkit-box-ordinal-group: 3;-ms-flex-order: 3;order: 3}
    #abrv   {-webkit-box-ordinal-group: 4;-ms-flex-order: 4;order: 4;}
}

@media only screen and (max-height: 800px) {
    footer {
    position: fixed;
    background: white;
    bottom: 0;
    width: 100%;
    z-index: 40;
    -webkit-transition: all 1.5s ease;
    -o-transition: all 1.5s ease;
    -webkit-transition: 1.5s ease;
    -o-transition: 1.5s ease;
    transition: 1.5s ease;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
        flex-flow: row wrap;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: end;
    transition: 2s;
}

    footer > * {
        width: 25%;
        /* -webkit-box-flex: 1;
        -ms-flex: 1 50%;
        flex: 1 50% */
    }

    address {-webkit-box-ordinal-group: 1;-ms-flex-order: 1;order: 1;}
    nav     {-webkit-box-ordinal-group: 2;-ms-flex-order: 2;order: 2;}
    #images {-webkit-box-ordinal-group: 3;-ms-flex-order: 3;order: 3;}
    #abrv   {-webkit-box-ordinal-group: 4;-ms-flex-order: 4;order: 4;}
}

@media only screen and (max-width: 600px) {
    footer {
        /* z-index: 50; */
        /* bottom: 70%; */
        /* height: 100%; */
        /* Place content at the top of the flex*/
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        /* MAybe not needed */
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        position: fixed;
        bottom: 100%;
        height: fit-content;
    }

    footer > * {
        width: 50%;
        /* -webkit-box-flex: 1;
        -ms-flex: 1 50%;
        flex: 1 50% */
    }

    address {-webkit-box-ordinal-group: 1;-ms-flex-order: 1;order: 1}
    #images {-webkit-box-ordinal-group: 2;-ms-flex-order: 2;order: 2}
    nav     {-webkit-box-ordinal-group: 3;-ms-flex-order: 3;order: 3}
    #abrv   {display: none}
}

</style>