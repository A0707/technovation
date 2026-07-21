<?php
/**
 * Technovation — child theme.
 *
 * Tout le sur-mesure vit ici. Le thème parent n'est jamais modifié, donc ses
 * mises à jour de sécurité s'appliquent sans rien écraser — c'est précisément
 * ce qui manquait sur l'installation Adrenalin.
 *
 * @package technovation
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Feuilles de style : parent puis enfant.
 */
add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style(
			'technovation-parent',
			get_parent_theme_file_uri( 'style.css' ),
			array(),
			wp_get_theme( get_template() )->get( 'Version' )
		);

		wp_enqueue_style(
			'technovation-child',
			get_stylesheet_uri(),
			array( 'technovation-parent' ),
			wp_get_theme()->get( 'Version' )
		);
	}
);

/**
 * Polices Google (Manrope / Inter / JetBrains Mono), avec preconnect pour
 * éviter le blocage du rendu.
 */
add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style(
			'technovation-fonts',
			'https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap',
			array(),
			null
		);
	}
);

add_filter(
	'wp_resource_hints',
	function ( $hints, $relation ) {
		if ( 'preconnect' === $relation ) {
			$hints[] = array( 'href' => 'https://fonts.gstatic.com', 'crossorigin' );
		}
		return $hints;
	},
	10,
	2
);

/**
 * Correctif : shortcodes WPBakery orphelins.
 *
 * Le thème Adrenalin embarquait WPBakery Page Builder. Le plugin n'étant plus
 * actif, les pages construites avec lui affichent leurs shortcodes en texte
 * brut ([vc_row ...], [vc_column ...]). Tant que ces pages ne sont pas
 * reconstruites, on retire les balises orphelines à l'affichage.
 *
 * Le contenu en base n'est pas modifié : si WPBakery est réactivé un jour, le
 * filtre se désarme tout seul.
 */
add_filter(
	'the_content',
	function ( $content ) {
		if ( shortcode_exists( 'vc_row' ) ) {
			return $content;
		}
		// Balises [vc_*] et [/vc_*], ainsi que les shortcodes du thème parent.
		return preg_replace( '#\[/?(vc_|layerslider)[^\]]*\]#i', '', $content );
	},
	5
);

/**
 * Masque les étoiles de notation tant qu'aucun avis n'existe.
 *
 * La boutique compte 346 produits et zéro avis : afficher des étoiles vides
 * sur chaque fiche nuit à la crédibilité plutôt que de l'aider.
 * À retirer dès que la collecte d'avis est en place.
 */
add_filter(
	'woocommerce_product_get_rating_html',
	function ( $html, $rating, $count ) {
		return $count > 0 ? $html : '';
	},
	10,
	3
);

/**
 * « Sur commande » plutôt que « Rupture de stock ».
 *
 * En B2B, un produit non stocké reste commandable auprès du fournisseur :
 * « Rupture de stock » fait fuir un acheteur qui aurait passé commande.
 */
add_filter(
	'woocommerce_get_availability_text',
	function ( $text, $product ) {
		if ( ! $product->is_in_stock() ) {
			return __( 'Sur commande — nous consulter', 'technovation' );
		}
		return $text;
	},
	10,
	2
);

/**
 * Lien d'évitement clavier (WCAG 2.4.1) — absent de l'ancien thème.
 */
add_action(
	'wp_body_open',
	function () {
		printf(
			'<a class="tn-skip-link" href="#main">%s</a>',
			esc_html__( 'Aller au contenu principal', 'technovation' )
		);
	},
	1
);

/**
 * Données structurées Organization (JSON-LD).
 *
 * L'ancien site n'en avait aucune : Google ne disposait d'aucune information
 * fiable sur l'entreprise. Coordonnées vérifiées sur le site existant.
 */
add_action(
	'wp_head',
	function () {
		if ( ! is_front_page() ) {
			return;
		}

		$schema = array(
			'@context' => 'https://schema.org',
			'@type'    => 'Organization',
			'name'     => 'Technovation',
			'url'      => home_url( '/' ),
			'address'  => array(
				'@type'           => 'PostalAddress',
				'streetAddress'   => '46 Boulevard Zerktouni, 2ème étage, Appartement N° 6',
				'addressLocality' => 'Casablanca',
				'addressCountry'  => 'MA',
			),
			'contactPoint' => array(
				'@type'             => 'ContactPoint',
				'telephone'         => '+212607173005',
				'contactType'       => 'sales',
				'areaServed'        => 'MA',
				'availableLanguage' => array( 'fr', 'ar' ),
			),
			'sameAs' => array( 'https://www.facebook.com/Technovationmaroc/' ),
		);

		printf(
			'<script type="application/ld+json">%s</script>',
			wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE )
		);
	}
);
