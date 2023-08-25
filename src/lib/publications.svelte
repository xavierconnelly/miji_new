<script>
	import { publications } from '../publications/publications.js'
</script>

<div id="publications">
	<h6> Publications</h6>
	<br>
	<div class="row title">
		<td class="year">Year</td>
		<td class="publisher">Publisher</td>
		<td class="issue">Issue</td>
		<td class="project">Project</td>
	</div>
	{#each publications as { slug, year, publisher, issue, project }}
		<a href="/projects/{slug}" data-sveltekit-noscroll class="year{year} row">
			<td class="year">{year}</td>
			<td class="publisher">{publisher}</td>
			<td class="issue">{issue}</td>
			<td class="project">{project}</td>
		</a>
		<span class={slug}>
			<img src="../images/{slug}/01_800.webp" alt="">
			<td>{project}</td>
			<!-- <td>{description}</td> -->
		</span>
	{/each}
</div>

<style>

h6 {
	padding-bottom: 1em; 
	border-bottom: 1px solid;
	margin-bottom: 1em
}	

#publications {
	padding-bottom: 50px;
	width: calc(100% - 0px);
	float: right;
	padding-top: 60px;
}

/* h6 {
	padding-bottom: 1em;
	border-bottom: 1px solid;
} */

.year {
	width: 160px;
}

.title {
	padding-bottom: 1em;
}

.row {
	display: flex;
	width: 100%;
	line-height: 130%;
}

/* .year2023 .year,
.year2022 .year,
.year2021 .year   {
	color: white;
}

.year2023:first-of-type .year,
.year2022:first-of-type .year,
.year2021:first-of-type .year   {
	color: black
} */

td {
	border: none;
	padding-right: 30px;
	vertical-align: top;
	text-align: left;
	width: 30%;
}

a:hover {
	color: var(--green);
}
/* 
a:nth-of-type(3n):hover {
	color: var(--pink);
}

a:nth-of-type(3n + 1):hover {
	color: var(--green);
}

a:nth-of-type(3n - 1):hover {
	color: var(--red);
} */

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

a:hover + span {
	/* display: block; */
	transition: 0.5s;
	opacity: 1;
	z-index: 99;
}

a:hover + .Lorem {
	display: none;
}

/* .NOLINK ~ a {
	color: black
} */

.year {
	width: 10%;
	padding-right: 60px;
}
.issue {
	width: 30%
}
.publisher {
	width: 30%;
}
.project {
	width: 30%
}

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

#publications a::before,
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

#publications a:hover::before {
	background: var(--pink);
}

@media only screen and (max-width: 800px) {

	#publications a::before,
	.title::before  {
		display: none;
	}
	a:hover + span {
		opacity: 0;
	}
	a:hover + .lorem {
		display: none;
	}
	span {
		display: none;
	}
	span img {
		display: none;
	}
	.year {
		width: 20%;
	}
	.issue {
		display: none;
	}
	.publisher {
		width: 40%
	}
	.project {
		width: 40%
	}
	.row {
		border-top: 1px solid;
		padding: 10px 0;
	}
	h6 {
	padding-bottom: unset;
	border-bottom: unset;
	margin-bottom: unset
}	
}
</style>