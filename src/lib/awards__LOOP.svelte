<script>
	import { awards } from '../awards/awards.js'
</script>

<div id="awards">
	<h6>Awards</h6>
	<div class="acronyms">
		<p>(W) Winner</p>
		<p>(S) Shortlist</p>		
		<p>(C) Commendation</p>
		<p>(N) Nomination</p>
		<p>(F) Finalist</p>
	</div>
	<br>
	<div class="row title">
		<td class="year">Year</td>
		<td class="abrev">Rec.</td>
		<td class="award">Award</td>
		<td class="awarder">Award panel</td>
		<td class="project">Project</td>
	</div>
	{#each awards as { id, link, year, abrev, award, awarder, project }}
		<!-- {#if {id} = 'NOLINK'}
			Nolink
		{:else} -->
			<a href="/projects/{id}" data-sveltekit-noscroll class="{id} year{year} row">
				<td class="year">{year}</td>
				<td class="abrev">{abrev}</td>
				<td class="award">{award}</td>
				<td class="awarder">{awarder}</td>
				<td class="project">{project}</td>
			</a>
			<span class={id}>
				<img src="../images/{id}/01_800.webp" alt="">
				<td>{project}</td>
				<!-- <td>{description}</td> -->
			</span>
		<!-- {/if} -->
	{/each}
</div>

<style>

/* 
* {
	outline: 1px solid;
}
*/



#awards {
	/* padding-bottom: 50px; */
	width: calc(100% - 0px);
	float: right;
}

.acronyms {
	padding-left: 34px;
}

h6 {
	padding-bottom: 1em;
	border-bottom: 1px solid;
	margin-bottom: 1em
}

.title {
	padding-bottom: 1em;
}


.row {
	display: flex;
	width: calc(100%);
	line-height: 130%;
}

a:hover {
	color: var(--green);
}

td {
	border: none;
	padding-right: 30px;
	vertical-align: top;
	text-align: left;
}

span {
	width: 25%;
	position: absolute;
	left: 0px;
	padding: 10px;
	padding-right: 100px;
	margin-right: 50px;
	top: 0px;
	/* display: none; */
	opacity: 0;
	transition: 3s;
	background: white;
	z-index: -99;
	height: 100%;
	/* user-select: none; */
}
.year {
	width: 5%;
}
.abrev {
	width: 5%;
}
.award {
	width: 30%
}
.awarder {
	width: 30%;
}
.project {
	width: 30%
}

a:hover + span {
	/* display: block; */
	transition: 0.5s;
	opacity: 1;
	z-index: 99;
}

a:hover + .NOLINK {
	display: none;
}

/* .NOLINK ~ a {
	color: black
} */

a + span img {
	width: 70%;
	padding-top: 20px;
	margin: 0 auto;
	opacity: 0;
	transition: 2s;

}
a:hover + span img {
	opacity: 1;
	transition: 2s;
}

#awards a::before,
.title::before {
	content: '';
	display: inline-block;
	width: 14px;
	height: 14px;
	position: relative;
	left: 0px;
    top: 1.5px;
    vertical-align: middle;
	-moz-border-radius: px;
	-webkit-border-radius: 12px;
	border-radius: 12px;
	border: 0px white solid;
	margin-right: 20px;

}

#awards a:hover::before {
	background: var(--green);
}
/* 
.ab,
.posts,
.tokyo {
	position: relative;
}

.ab .active::before {
	background-color: green;
}
.posts .active::before {
	background: red;
}

.tokyo .active::before {
	background: rgb(157, 59, 59);
}

.active {
	display: block;
} */



@media only screen and (max-width: 800px) {
	#awards {
		padding-top: 60px;
	}
	#awards a::before,
	.title::before  {
		display: none;
	}
	a:hover + span {
		opacity: 0;
	}
	a:hover + .NOLINK {
		display: none;
	}
	.acronyms {
		padding-left: unset;
	}
	span {
		display: none;
	}
	span img {
		display: none;
	}
	.year {
		width: 10%;
	}
	.abrev {
		width: 10%;
	}
	.award {
		width: 40%
	}
	.awarder {
		display: none;
	}
	.project {
		width: 40%
	}
	.row {
		border-top: 1px solid;
		padding: 10px 0;
	}
}

@media only screen and (max-height: 800px) {
	#awards a::before {
		display: none;
	}
	a:hover + span {
		opacity: 0;
	}
	a:hover + .NOLINK {
		display: none;
	}
	span {
		display: none;
	}
	span img {
		display: none;
	}
}

@media only screen and (max-width: 600px) {
	#awards a::before {
		display: none;
	}
	a:hover + span {
		opacity: 0;
	}
	a:hover + .NOLINK {
		display: none;
	}
	span {
		display: none;
	}
	span img {
		display: none;
	}
}
</style>