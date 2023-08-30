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
		<div class="year">Year</div>
		<div class="abrev">Rec.</div>
		<div class="award">Award</div>
		<div class="awarder">Award panel</div>
		<div class="project">Project</div>
	</div>
	<div data-sveltekit-noscroll="" class="year2023 row">
		<div class="year">2023</div>
		<div class="abrev">W</div>
		<div class="award">Design Vanguard</div>
		<div class="awarder">Architectural Record</div>
		<div class="project">Office Award</div>
	</div>
	<a href="/projects/ABHouse" data-sveltekit-noscroll="" class="year2023 row ABHouse">
		<div class="year">2023</div>
		<div class="abrev">S</div>
		<div class="award">Colorbond Steel</div>
		<div class="awarder">AIA National Awards</div>
		<div class="project">AB House</div>
	</a>
	<span class="ABHouse">
		<h6>AB House</h6>
		<img src="../images/ABHouse/01_800.webp" alt="">
	</span>				
	<a href="/projects/ABHouse" data-sveltekit-noscroll="" class="year2023 row ABHouse">
		<div class="year">2023</div>
		<div class="abrev">W</div>
		<div class="award">EmAGN</div>
		<div class="awarder">AIA Vic Awards</div>
		<div class="project">AB House</div>
	</a>
	<span class="ABHouse">
		<h6>AB House</h6>
		<img src="../images/ABHouse/01_800.webp" alt="">
	</span>
	<a href="/projects/ABHouse" data-sveltekit-noscroll="" class="year2023 row ABHouse">
		<div class="year">2023</div>
		<div class="abrev">W</div>
		<div class="award">Colorbond Steel</div>
		<div class="awarder">AIA Vic Awards</div>
		<div class="project">AB House</div>
	</a>
	<span class="ABHouse">
		<h6>AB House</h6>
		<img src="../images/ABHouse/01_800.webp" alt="">
	</span>
	<a href="/projects/ABHouse" data-sveltekit-noscroll="" class="year2023 row ABHouse">
		<div class="year">2023</div>
		<div class="abrev">C</div>
		<div class="award">New House</div>
		<div class="awarder">AIA Vic Awards</div>
		<div class="project">AB House</div>
	</a>
	<span class="ABHouse">
		<h6>AB House</h6>
		<img src="../images/ABHouse/01_800.webp" alt="">
	</span>
	<div data-sveltekit-noscroll="" class="year2023 row">
		<div class="year">2023</div>
		<div class="abrev">C</div>
		<div class="award">Emerging Architecture Practice</div>
		<div class="awarder">Houses Awards</div>
		<div class="project">Office Award</div>
	</div>
	<a href="/projects/ABHouse" data-sveltekit-noscroll="" class="year2023 row ABHouse">
		<div class="year">2023</div>
		<div class="abrev">S</div>
		<div class="award">New Houses over 200m2</div>
		<div class="awarder">Houses Awards</div>
		<div class="project">AB House</div>
	</a>
	<span class="ABHouse">
		<h6>AB House</h6>
		<img src="../images/ABHouse/01_800.webp" alt="">
	</span>
	<a href="/projects/ABHouse" data-sveltekit-noscroll="" class="year2023 row ABHouse">
		<div class="year">2023</div>
		<div class="abrev">N</div>
		<div class="award">Building of the Year Residential</div>
		<div class="awarder">ArchDaily</div>
		<div class="project">AB House</div>
	</a>
	<span class="ABHouse">
		<h6>AB House</h6>
		<img src="../images/ABHouse/01_800.webp" alt="">
	</span>
	<a href="/projects/ABHouse" data-sveltekit-noscroll="" class="year2023 row ABHouse">
		<div class="year">2023</div>
		<div class="abrev">S</div>
		<div class="award">New Houses over 200m2</div>
		<div class="awarder">Australian Interior Design Awards</div>
		<div class="project">AB House</div>
	</a>
	<span class="ABHouse">
		<h6>AB House</h6>
		<img src="../images/ABHouse/01_800.webp" alt="">
	</span>
	<a href="/projects/ABHouse" data-sveltekit-noscroll="" class="year2023 row ABHouse">
		<div class="year">2023</div>
		<div class="abrev">F</div>
		<div class="award">Residential Interior</div>
		<div class="awarder">Dulux Colour Awards</div>
		<div class="project">AB House</div>
	</a>
	<span class="ABHouse">
		<h6>AB House</h6>
		<img src="../images/ABHouse/01_800.webp" alt="">
	</span>
</div>

<style>
#awards {
	/* padding-bottom: 50px; */
	width: calc(100% - 0px);
	float: right;
}

/* .acronyms {
	padding-left: 34px;
} */

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

a:hover * {
	color: var(--green);
}

.ABHouse:hover * {
	color: var(--pistachio);
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

span {
	width: calc(25% - 40px);
	position: fixed;
	left: 0px;
	top: 30px;
	padding: 0px 0px 10px 10px;
	margin-top: 22px;
	margin-right: 50px;
	/* display: none; */
	opacity: 0;
	transition: 3s;
	background: blue;
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

a + span img {
	width: 80%;
	/* padding-top: 20px; */
	margin: 0 auto;
	opacity: 0;
	transition: 2s;

}
a:hover + span img {
	opacity: 1;
	transition: 2s;
}

#awards .year2023::before,
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
	margin-right: 10px;
    margin-left: -24px;
}


.year2023:hover::before {
	background: var(--green);
}

.ABHouse:hover::before {
	background: var(--pistachio);
}

@media only screen and (max-width: 800px) {
	#awards {
		padding-top: 60px;
	}
	#awards .year2023::before,
	.title::before  {
		display: none;
	}
	a:hover + span {
		opacity: 0;
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
	/* #awards a::before {
		display: none;
	}
	a:hover + span {
		opacity: 0;
	} */
	/* span {
		display: none;
	} */
	/* span img {
		display: none;
	} */
}

@media only screen and (max-width: 600px) {
	#awards a::before {
		display: none;
	}
	a:hover + span {
		opacity: 0;
	}
	span {
		display: none;
	}
	span img {
		display: none;
	}
}
</style>