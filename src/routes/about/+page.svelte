<script>
	import logo1 from '$lib/assets/logo1.webp';
</script>

<h2>About This Project</h2>
<h3>What inspired this Web Application</h3>
<p>
	This project was inspired by a Game of Thrones fan. I (the developer) am not the Game of Thrones
	fan, I merely took the information I could find and put it in one place. The individual who
	inspired this application also inspired my programming journey, I'm not entirely sure I would be
	where I am today if it weren't for her.
</p>
<p>
	She also goes by the online alias of 'Khaleesi' which itself infers how much of a game of thrones
	fan she is. She was also the product manager (we joke). She was there throughout the entire
	development process critiquing the UI mostly, asking for different features to be included. Many
	of which wouldn't exist without her asking for them.
</p>
<p>
	The loading state in between navigation, the widths, fonts, and how the quote generator works were
	all greatly influenced by her seggustions throughout. In many ways she made this project more
	difficult, but in the end forced me to create a better app/UI overall.
</p>
<h3>The GoT API</h3>
<p>The GoT API is the open source GraphQL API that this application was built to test.</p>
<p>
	Along side the UI for this site is something far more impressive in some ways. The UI was the most
	time consuming part of this project, but the backend taught me so much more, and ended up being
	the most fun part of this entire project. The API has been made public and open source, so anyone
	can copy it and fork it to their liking if they so desire. This also means that anyone can make
	requests from my API. The API documentation can be found at the '/api' route for this sites url,
	there is also a link to it in the top middle of the screen.
</p>
<p>
	Despite using MongoDB for this project and regretting it (I likely should have used Postgres),
	GraphQL was the biggest saving grace. Since document databases don't posses joins, GraphQL ends up
	mitigating most of the shortcomings of document databases by the use of GraphQL Schemas that
	relate data to one another.
</p>
<p>
	Theoretically this can be more flexible than a relational database since you can make
	relationships between any data that you want at any point in time. Though using a relational
	database alongside GraphQL seems even more powerful.
</p>

<h3>The Community</h3>
<p>
	There is a feedback form for a reason. While this application persists, I plan on taking feedback
	to correct/improve the data within this API, add data, and grow the dataset overall.
</p>
<p>
	There are likely no better people to help improve the API then those who know the Game of Thrones
	universe the best. I will be sharing this app with discord servers, and perhaps other communities
	related to Game of Thrones in hope of recieving quality feedback and finding people who would find
	a site this entertaining. The UI and the Interactivty of the app could equally improve with the
	feedback of the Game of Thrones community, if not more. Perhaps there are better ways of
	displaying data, or more impressive uses for the data that I haven't thought of yet.
</p>
<h3>Moving Forward</h3>
<p>
	Currently this project is made more as a passion project for fun, with no serious goals, or
	expectations in mind.
</p>
<p>
	Going forward I plan on fixing any bugs as they arise, and making small optimizations, both on the
	server and client. Anything that I haven't added I may add in the future. If the userbase is large
	enough, there is a chance to possibly monetize, or structure the site by implementing
	authorization, authorization tokens, and bearer tokens, that limit the API, and the UI from
	unlogged in users. It would be an ambitious project itself, but would likely be quite fun aswell.
</p>

<h3>The Developer Himself</h3>
<p>
	My name is Elias De Windt, you can find my github, linkedin or personal blog with any of the
	following links. This information could change in the future. You can email me directly through
	the email on my blog, or you can send feedback directly through this website.
</p>

<ul>
	<li>
		<a href="https://github.com/edewindt">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
				/></svg
			>
		</a>
	</li>
	<li>
		<a href="https://www.linkedin.com/in/eliasdewindt/">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
				/></svg
			>
		</a>
	</li>
	<li>
		<a href="https://edewindt.com">
			<img src={logo1} alt="logo" />
		</a>
	</li>
</ul>

<style>
	p {
		margin-top: 1rem;
	}
	h3 {
		margin-top: 1rem;
	}
	ul {
		display: flex;
		justify-content: space-around;
		margin-top: 2rem;
	}
	a svg {
		height: 3rem;
		width: 3rem;
	}
	a img {
		height: 6rem;
		width: 6rem;
		position: relative;
		bottom: 1.8rem;
	}
</style>
