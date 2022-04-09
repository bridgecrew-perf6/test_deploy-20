<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	//	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	//export const prerender = true;
</script>

<svelte:head>
	<title>PlantHub - Imprint</title>
</svelte:head>

<div class="content">
	<h1>Impressum</h1>
	<br />
	<h2>Adresse:</h2>
	<p>
		Deutsches Zentrum für integrative Biodiversitätsforschung (iDiv) Halle-Jena-Leipzig, Puschstraße
		4, 04103 Leipzig<br />
		E-Mail: info@planthub.de<br />
		Tel.: +49 341 9733105<br />
		Fax: +49 341 9739350<br />
		Web: www.planthub.de
	</p>
	<h2>Herausgeber:</h2>
	<p>
		PlantHub, eine Support Unit des Deutschen Zentrums für integrative Biodiversitätsforschung
		(iDiv) Halle-Jena-Leipzig<br />
		Das Forschungszentrum iDiv wird vertreten durch das Speaker Board (verantwortlich im Sinne des Presserechts):
		Prof. Dr. Tiffany Knight, Prof. Dr. Nicole van Dam, Prof. Dr. Henrique M. Pereira, Prof. Dr. Nico
		Eisenhauer (stellvertrendend für Prof. Dr. Christian Wirth)
	</p>
	<h2>Inhaltlich Verantwortliche:</h2>
	<p>
		Redaktion: Dr. David Schellenberger Costa (PlantHub-Website), Dr. Samira Babolou, (iKNOW,
		Knowledge Graphs)<br />
		Kontakt: planthub@iDiv.de
	</p>
	<h2>Haftungsausschluss:</h2>
	<p>
		Die veröffentlichten Informationen sind sorgfältig zusammengestellt, erheben aber keinen
		Anspruch auf Vollständigkeit oder Aktualität; eine entsprechende Gewähr wird nicht übernommen.
		PlantHub haftet nicht für die Richtigkeit der Inhalte, Fehler redaktioneller und technischer
		Art, Auslassungen oder Ähnliches auf seinen Webseiten. Die Nutzung der abrufbaren Inhalte
		erfolgt auf eigene Gefahr. Alle kostenfreien Angebote sind unverbindlich. PlantHub behält es
		sich vor, jederzeit ohne vorherige Ankündigung das Angebot zu verändern, zu ergänzen, zu löschen
		oder die Veröffentlichung einzustellen. Wir möchten Sie bitten, Fehler inhaltlicher oder
		technischer Art an unsere dafür eingerichtete Mail mitzuteilen: info@planthub.de Trotz
		sorgfältiger inhaltlicher Kontrolle übernimmt PlantHub keine Haftung für die Inhalte von Links
		zu externen Webseiten Dritter. Diese Webseiten und ihre Inhalte unterliegen der Haftung des
		jeweiligen Betreibers. Die Redaktion hat keinen Einfluss auf die aktuelle und zukünftige
		Gestaltung und Inhalte der verlinkten Seiten. PlantHub macht sich den Inhalt der verknüpften
		Seiten nicht zu eigen.
	</p>
	<h2>Verwendung von Bildern:</h2>
	<p>
		Die Rechte an den Bildern auf den Webseiten von PlantHub liegen, sofern nicht anders angegeben,
		bei PlantHub. Die Bilder dürfen nicht verwendet werden. Eine mögliche Übertragung von
		Bildnutzungsrechten kann, nach jeweiliger Prüfung, auf Anfrage erfolgen. Wir möchten Sie bitten,
		für Bildanfragen die dafür eingerichtete E-Mail zu nutzen: info@planthub.de
	</p>
</div>

<style>
</style>
