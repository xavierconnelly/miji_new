<script>

import { store } from '../lib/store.js';

  export let options;
  export let userSelected = options[0].value;
	
  const slugify = (str = "") =>
    str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>

<div class="group-container">
  {#each options as { value, label }}
    <input  class="sr-only"
            type="radio"
            id={slugify(label)}
            bind:group={$store}
            value={value} />
    <label for={slugify(label)}> {label} </label>
  {/each}
</div>

<style>	

/* *{
        outline: 1px solid
    } */
  .group-container {
    display: flex;
    flex-direction: column;
  }

  label {
    user-select: none;
    line-height: 1em;
		margin-right: 1em
  }

  label:hover {
    color: var(--green);
    cursor: pointer;
  }

  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  input[type="radio"] {
    position: absolute;
  }

  input[type="radio"] + label {
    display: block;
    position: relative;
    text-align: left;
  }

  input[type="radio"] + label::before {
      content: "";
      position: relative;
      display: inline-block;
      margin-right: 0.5em;
      width: 1em;
      height: 1em;
      border: 1px solid white;
      top: 0.2em;
  }

  input[type="radio"] + label::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 1em;
    height: 1em;
    top: 0.2em;
    left: 0em;
    background: var(--green);
    border: 1px solid var(--green);
    border-radius: 50%;
    transform: scale(0);
  }

  input[type="radio"]:checked + label::after {
    opacity: 1;
    transform: scale(1);
  }

  input[type="radio"]:focus + label::before {
    border-radius: 50%;
  }  
	
  /* gravy */
  input[type="radio"] + label::before {
      transition: background 0.3s ease-out;
  }

  input[type="radio"]:checked + label::before {
    transition: background 0.3s ease-in;
  }

  input[type="radio"] + label::after {
    transition: transform 0.2s ease-out;
  }

  input[type="radio"]:checked + label::after {
    transition: transform 0.2s ease-in;
  }

  input[type="radio"]:focus + label::before {
    border-radius: 50%;
  }

</style>
