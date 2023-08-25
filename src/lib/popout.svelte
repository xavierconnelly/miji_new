<script>
	import { projectData } from './projectData.js'
	
	let lastProject = projectData.length - 1;
	
	// Both these need to be reactive
	$: currentIndex = 0;
	let paused = true;
	$: current = currentIndex;
	let projects = projectData[0];
	
	//sidebar
	let view = 'closed';
</script>

<style>

	
	input[type=radio] { display: none }
	
	container {
		position: fixed;
		top: 30px;
	}

	
	img {
		width: 100%;
	}
	
	article {
		position: fixed;
		top: 30px;
		right: 0;
		width: 0px;
		height: calc(100% - 100px);
		transition: 1s;
	}
	
.selected {
		width: 100%;
	border-left: 1px solid;
	}
	
	span {
		position: inline-block;
		height: 100%;
		float: left;
	}
	
	#close {
		width: 25%;
				padding: 10px 10px 10px 10px;

	}

	.clear {
		display: none;
	}
	
	label {
	width: 200px;
		float: left;
		position: inline;
	}
	
	label img {
		width: 100%;
	height: auto;
	}
	
	
	.name {
				position: inline-block;
				width: 25%;
		background: white;
				padding: 10px 10px 10px 10px;

	}
	
	#close p,
	.name p {
		position: absolute;
		bottom: 0;
		width: inherit;
		padding: 10px 10px 10px 10px;

	}
	
.pictures {
			width: 50%;
		overflow: scroll;
	}

</style>

<container> 
		
			{#each projectData as project, i}
				
            <label>
                <input  type=radio
                        bind:group={projects}
                        value={project}
                        on:click="{() => view = 'open'}">
         
                <div class="carousel" >

                    <div class="photo">
                      <picture class="blur">
                        <source type="image/webp" srcset="{project.one}">
                        <source type="image/jpg" srcset="{project.one}">               
                        <img src="{project.one}" width="800" height="1066" alt="A Pavillion project">
                      </picture>
                      <picture class="clear">
                        <source type="image/webp" srcset="{project.one}">
                        <source type="image/jpg" srcset="{project.one}">               
                        <img src="{project.one}" width="800" height="1066" alt="A Pavillion project">
                      </picture>
                    </div>
                    <!-- <div class="plan" data-collapsed="true" style="height: 1px">
                      <picture>
                        <source type="image/svg" srcset="{project.one}"> 
                        <img src="{project.one}" width="800" height="1120" alt="architectural plan of the A Pavillion project">
                      </picture>
                    </div> -->
                  </div>
                  <div class="words-box">
                    <span class="words">{project.info}</span>
                  </div>
              
            </label>
		
			{/each}
		

		<article 
				class:selected="{view === 'open'}">
			<span id="close"
						on:click="{() => view = 'closed'}" 
				on:keydown="{() => view = 'closed'}"
				>
			<p>
				Close
				</p>
			</span>
			<span class="name">
				<p>{projects.info}</p>
			</span>
			<span class="pictures">
				<img src="{projects.one}"
						 alt="">
				<img src="{projects.two}"
						 alt="">
			</span>
		</article>
	</container>