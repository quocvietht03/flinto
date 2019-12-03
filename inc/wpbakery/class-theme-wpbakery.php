<?php 
/**
 * @since 1.0.0 
 * 
 */

if( ! class_exists('Flintotheme_WPBakery') ) {
    class Flintotheme_WPBakery {
        
        public function __construct() {
            $this->hooks();
        }

        public function hooks() {

        }


    }

    return new Flintotheme_WPBakery();
}
