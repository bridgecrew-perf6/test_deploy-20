<script>
	import { browser, dev } from '$app/env';
	import { fade } from 'svelte/transition';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

    let local_url = '/neha/query';
	let local_url_download = '/neha/download';
	if (dev) {
		local_url = 'http://localhost:8088/query';
		local_url_download = 'http://localhost:8088/download';
	}

	let res = [];
	let status = false;
	let queryset = [];
	let hits = [];

	let facets_taxon = [
		{
			id: 'host_kingdom',
			label: 'Host Kingdom'
		},
		{
			id: 'host_phylum',
			label: 'Host Phylum'
		},
		{
			id: 'host_class',
			label: 'Host Class'
		},
		{
			id: 'host_order',
			label: 'Host Order'
		},
		{
			id: 'host_family',
			label: 'Host Family'
		},
		{
			id: 'host_genus',
			label: 'Host Genus'
		}
	];
	let facets = [
		{
			id: 'countries',
			label: 'Countries'
		},
		{
			id: 'realm',
			label: 'Realm'
		},
		{
			id: 'year',
			label: 'Year'
		},
		{
			id: 'environment',
			label: 'Environment'
		},
		{
			id: 'found_otu',
			label: 'OTUs - just for testing'
		},
		{
			id: 'domain',
			label: 'Domain - not allowed to filter'
		},
		{
			id: 'family',
			label: 'Family - not allowed to filter'
		}
	];

	let currentItems = [];
	currentItems['countries'] = 10;
	currentItems['domain'] = 10;
	currentItems['family'] = 10;
	currentItems['found_otu'] = 10;
	currentItems['realm'] = 10;
	currentItems['year'] = 10;
	currentItems['environment'] = 10;
	currentItems['host_kingdom'] = 10;
	currentItems['host_phylum'] = 10;
	currentItems['host_class'] = 10;
	currentItems['host_order'] = 10;
	currentItems['host_family'] = 10;
	currentItems['host_genus'] = 10;

	let data = [];
    let otu_length = "";
    let sample_length = "";

	async function Query(value, category) {
		console.log(value, category);
		if (queryset[category] == value) {
			console.log('found');
			console.log(queryset);
			delete queryset[category];
			console.log(queryset);
		} else {
			queryset[category] = value;
		}

		console.log('start query');
		let query = '';
		console.log(queryset);
		Object.keys(queryset).forEach((key) => {
			console.log(key, queryset[key]);
			query = query + key + '=' + queryset[key] + '&';
		});
		console.log(query);

		res = await getQuery(query);
		//console.log(res)
		console.log('end query');
		hits = res.hits;
		data['countries'] = res.facets.country;
		data['domain'] = res.facets.domain;
		data['family'] = res.facets.family;
		data['found_otu'] = res.facets.found_otu;
		data['realm'] = res.facets.realm;
		data['year'] = res.facets.year;
		data['environment'] = res.facets.environment;
		data['host_kingdom'] = res.facets.host_kingdom;
		data['host_phylum'] = res.facets.host_phylum;
		data['host_class'] = res.facets.host_class;
		data['host_order'] = res.facets.host_order;
		data['host_family'] = res.facets.host_family;
		data['host_genus'] = res.facets.host_genus;
        otu_length = data['found_otu'].length;
        sample_length = res.hit_count;
		// data['host_kingdom'] = res.facets.host_kingdom;
		console.log(data);
		status = true;
	}

	Query();

	async function getQuery(query) {
		const res = await fetch(local_url + '?' + query, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});
		let result = [];
		result = await res.json();
		return result;
	}

	async function getDownloady(query) {
		fetch(local_url_download + '?' + query)
			.then((resp) => resp.blob())
			.then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				// the filename you want
				a.download = 'test.csv';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
				// alert('your file has downloaded!'); // or you know, something with better UX...
			})
			.catch(() => alert('oh no!'));
	}

	async function QueryDownload() {
		let query = '';
		console.log(queryset);
		Object.keys(queryset).forEach((key) => {
			console.log(key, queryset[key]);
			query = query + key + '=' + queryset[key] + '&';
		});
		getDownloady(query);
	}


</script>

<svelte:head>
	<title>MiCoDa - Search</title>
</svelte:head>


<div class="content" in:fade={{ delay: 100 }} style="height: 100%;">
    <div><button on:click={() => QueryDownload()}> Download Matrix based on current filter result {otu_length}*{sample_length}</button></div>
    <div><em>Click on text to select and deselect</em></div>
    <div style="display:flex">
	{#if status}
		<div>
			{#each facets as facet}
				<h2>{facet.label}</h2>
				{#each data[facet.id].slice(0, currentItems[facet.id]) as value}
					<span
						style={queryset[facet.id] == value.name ? 'font-weight: bold;' : ''}
						on:click={() => Query(value.name, facet.id)}
					>
						<li>
							{value.name} ({value.count}) {#if value.count_value != 0}{value.count_value}{/if}
						</li>
					</span>
				{/each}
				{#if currentItems[facet.id] < data[facet.id].length}
					<button
						on:click={() => (currentItems[facet.id] = currentItems[facet.id] + 5)}
						type="button"
						class="btn btn-secondary"
					>
						Show more
					</button>
				{/if}
			{/each}
		</div>
		<div>
			{#each facets_taxon as facet}
				{#if data[facet.id].length == 1}
					{#each data[facet.id].slice(0, currentItems[facet.id]) as value}
						{facet.label}: {value.name} ({value.count}) {#if value.count_value != 0}{value.count_value}{/if}
						<br />
					{/each}
				{:else}
					<h2>{facet.label}</h2>
					{#each data[facet.id].slice(0, currentItems[facet.id]) as value}
						<span
							style={queryset[facet.id] == value.name ? 'font-weight: bold;' : ''}
							on:click={() => Query(value.name, facet.id)}
						>
							<li>
								{value.name} ({value.count}) {#if value.count_value != 0}{value.count_value}{/if}
							</li>
						</span>
					{/each}
					{#if currentItems[facet.id] < data[facet.id].length}
						<button
							on:click={() => (currentItems[facet.id] = currentItems[facet.id] + 5)}
							id="loadmore"
							type="button"
							class="btn btn-secondary"
						>
							Show more
						</button>
					{/if}
				{/if}
			{/each}
		</div>
	{/if}
</div>
</div>
