<script>
	import { page } from '$app/stores';
	//import { token_store, user_store, error_store } from '../../store/local-store';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { base } from '$app/paths';
	import img_rainbow from '/static/images/topRainbow.jpg';
	import img_idivLogo from '/static/images/LogoIDiv_white.gif';
	//import {Nav} from 'sveltestrap'

	// this ensures localStorage is loaded, however is has a delay.
	// source: https://gist.github.com/JHethDev/7cdd180a941df0168af6e8799c406bd0
	onMount(() => {
		if (browser) {
		//	user_store.useLocalStorage();
		//	token_store.useLocalStorage();
		//	error_store.set('');
		}

		// Log it to make sure it works client side
		//console.log(localStorage.getItem('user'));
	});

	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap/src';

	$: isOpen = null;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<svelte:window />

<header>
	<Navbar
	 style="background-color:black;" dark class="fixed-top" expand="md">
		<NavbarBrand class="fixed-top" style="line-height: 0px; padding-top: 0px"
			><img src={img_rainbow} alt="idivLogo" width="100%" /></NavbarBrand
		>
		<NavbarBrand href="https://www.idiv.de/de/index.html"
			><img style="height: 2em;" src={img_idivLogo} alt="idivLogo" /></NavbarBrand
		>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate} >
			<Nav class="" navbar>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/index'}>
						<a sveltekit:prefetch href={base + '/index'} class="nav-link">Home</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/project'}>
						<a sveltekit:prefetch href={base + '/project'} class="nav-link">Project</a>
					</li>
				</NavItem>
			<!--	<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/'}>
						<a sveltekit:prefetch href={base + '/'} class="nav-link">Home</a>
					</li>
				</NavItem>-->
				<!--	<NavItem>
				<li class="nav-item" class:active={$page.url.pathname === base + '/test'}>
					<a sveltekit:prefetch href={base + '/test'} class="nav-link">Test Page</a>
				</li>
			</NavItem>-->
			<!--	<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/learn'}>
						<a sveltekit:prefetch href={base + '/learn'} class="nav-link">Learn</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/explore'}>
						<a sveltekit:prefetch href={base + '/explore'} class="nav-link">Explore</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/analyze'}>
						<a sveltekit:prefetch href={base + '/analyze'} class="nav-link">Analyze</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/lifegate'}>
						<a sveltekit:prefetch href={base + '/lifegate'} class="nav-link">LifeGate</a>
					</li>
				</NavItem>
				<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/iknow'}>
						<a sveltekit:prefetch href={base + '/iknow'} class="nav-link">Knowledge Graphs</a>
					</li>
				</NavItem>-->

				<!--		{#if $user_store != ''}
					<NavItem>
						<li class="nav-item" class:active={$page.url.pathname === base + '/login'}>
							<a sveltekit:prefetch href={base + '/login'} class="nav-link"
								>{$user_store.username}</a
							>
						</li>
					</NavItem>
				{/if}
				<NavItem>
					{#if $token_store == ''}
						<li class="nav-item" class:active={$page.url.pathname === base + '/login'}>
							<a sveltekit:prefetch href={base + '/login'} class="nav-link">Login</a>
						</li>
					{:else}
						<li class="nav-item" class:active={$page.url.pathname === base + '/logout'}>
							<a sveltekit:prefetch href={base + '/logout'} class="nav-link">Logout</a>
						</li>
					{/if}
				</NavItem>-->
				<!--	<NavItem>
					<li class="nav-item" class:active={$page.url.pathname === base + '/imprint'}>
						<a sveltekit:prefetch href={base + '/imprint'} class="nav-link">Imprint</a>
					</li>
				</NavItem>-->
				<!--
				<Dropdown nav inNavbar>
					<DropdownToggle nav caret>Options</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem>Option 1</DropdownItem>
						<DropdownItem>Option 2</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Reset</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			-->
			</Nav>
		</Collapse>
	</Navbar>
	<!--	<nav>
		<img class="idivRainbow" src={img_rainbow} alt="idivRainbow" />

		<div class="corner">
			<a href="https://www.idiv.de/de/index.html">
				<img src={img_idivLogo} alt="idivLogo" />
			</a>
		</div>
		<ul>
			<li class:active={$page.url.pathname === base + '/'}>
				<a sveltekit:prefetch href={base + '/'}>Home</a>
			</li>
			<li class:active={$page.url.pathname === base + '/test'}>
				<a sveltekit:prefetch href={base + '/test'}>Test Page</a>
			</li>
			<li class:active={$page.url.pathname === base + '/learn'}>
				<a sveltekit:prefetch href={base + '/learn'}>Learn</a>
			</li>
			<li class:active={$page.url.pathname === base + '/explore'}>
				<a sveltekit:prefetch href={base + '/explore'}>Explore</a>
			</li>
			<li class:active={$page.url.pathname === base + '/analyze'}>
				<a sveltekit:prefetch href={base + '/analyze'}>Analyze</a>
			</li>
			<li class:active={$page.url.pathname === base + '/lifegate'}>
				<a sveltekit:prefetch href={base + '/lifegate'}>LifeGate</a>
			</li>
			<li class:active={$page.url.pathname === base + '/iknow'}>
				<a sveltekit:prefetch href={base + '/iknow'}>Knowledge Graphs</a>
			</li>
			{#if $user_store != ''}
				<li class:active={$page.url.pathname === base + 'login'}>
					<a sveltekit:prefetch href={base + '/login'}>{$user_store.username}</a>
				</li>
			{/if}
			{#if $token_store == ''}
				<li class:active={$page.url.pathname === base + 'login'}>
					<a sveltekit:prefetch href={base + '/login'}>Login</a>
				</li>
			{:else}
				<li class:active={$page.url.pathname === base + 'logout'}>
					<a sveltekit:prefetch href={base + '/logout'}>Logout</a>
				</li>
			{/if}
			<li class:active={$page.url.pathname === base + '/imprint'}>
				<a sveltekit:prefetch href={base + '/imprint'}>Imprint</a>
			</li>
		</ul>
	</nav>-->
</header>

<style>
	/*	.corner img {
		height: 2em;
		position: absolute;
		margin-top: 3em;
	}
	nav {
		--background: black;
		position: fixed;
		width: 100%;
		z-index: 9;
	}

	ul {
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		margin-top: 0px;
	}
	*/
	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}
	:global(.navbar-dark .navbar-nav .nav-link) {
		color: white !important;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 1.3rem;
	}
	/*:global(.navbar-nav) {
		margin-left: -100px;
	}*/

	:global(.navbar-collapse) {
		justify-content: center;
	}

	:global(.navbar-brand) {
		margin-right: 0rem !important;
	}
	/*	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: white;
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		transition: color 0.2s linear;
	}
	nav a:hover {
		color: var(--accent-color);
	}
	.idivRainbow {
		height: 7px;
		width: 100%;
		display: block;
	}*/
</style>
