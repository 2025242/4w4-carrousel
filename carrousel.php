<?php
/**
 * Plugin Name: Carrousel plugin
 * Author: Salma  Bourakkadi
 * Description: Affiche le carrousel associé  une galerie de wordpress
 * Version: 1.7.2
 * Author URI: https://github.com/2025242/4w4-2024
 * Author URI: https://referenced.ca
 */


function enqueue_style_script(){
$version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
$version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(   'em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

    wp_enqueue_script(  'em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);
}

add_action( 'wp_enqueue_scripts', 'enqueue_style_script' );
function genere_html() {
    $html = '
    <div class="carrousel">
        <button class="carrousel__x">X</button>
        <figure class="carrousel__figure"></figure>
        <form action="" class="carrousel__form"></form>
        <button class="carrousel__nav carrousel__nav--left">&lt;</button> <!-- Left arrow button -->
        <button class="carrousel__nav carrousel__nav--right">&gt;</button> <!-- Right arrow button -->
    </div>
    ';
    return $html;
}
//[carrousel] juste apres la galerie dans notre article ou page
add_shortcode( 'carrousel', 'genere_html' );
