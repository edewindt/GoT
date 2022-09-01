<nav>
	<div class="nav-items">
		<div class="burger">
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" /><path
					d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
				/></svg
			><span class="link-text">Menu</span>
		</div>
		<ul>
			<li>
				<a href="/"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
						/></svg
					><span class="link-text">Home</span></a
				>
			</li>
			<li>
				<a href="/api"
					><span class="start">API</span> <span class="large"> Doumentation</span><span
						class="small">Docs</span
					></a
				>
			</li>
			<li>
				<a href="/about"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"
						/></svg
					>
					<span class="link-text">About</span></a
				>
			</li>
		</ul>
		<div class="dark-mode">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"
				/></svg
			>
		</div>
	</div>
</nav>

<style>
	a {
		display: flex;
		align-items: center;
	}
	.link-text {
		padding-left: 1rem;
		color: var(--light);
	}
	ul {
		display: flex;
		width: 30rem;
		justify-content: space-around;
		align-items: center;
	}
	.nav-items {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	nav {
		width: 100%;
		background-color: var(--darkp);
		height: 4.5rem;
		display: flex;
		align-items: center;
	}
	a {
		color: var(--light);
	}
	svg {
		fill: var(--light);
	}
	.burger {
		width: 8rem;
		padding-left: 1rem;
		display: flex;
		align-items: center;
	}
	.dark-mode {
		width: 3rem;
		padding-right: 1rem;
	}
	.large {
		padding-left: 1rem;
	}
	.small {
		display: none;
	}
	@media only screen and (max-width: 550px) {
		/* nav {
			background-color: aqua;
		} */
		.large {
			display: none;
		}
		.small {
			display: inline;
			padding-left: 1rem;
		}
		.burger .link-text {
			display: none;
		}
		.burger {
			width: 3rem;
		}
	}
	@media only screen and (max-width: 500px) {
		/* nav {
			background-color: aqua;
		} */
		.link-text {
			display: none;
		}
		ul {
			width: 15rem;
		}
	}
	@media only screen and (max-width: 300px) {
		/* nav {
			background-color: aqua;
		} */
		.start {
			display: none;
		}
		ul {
			width: 8.5rem;
		}
		.small {
			padding-left: 0;
		}
	}
</style>
