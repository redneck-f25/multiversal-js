"use strict";

/**
 * Export (Node, Browserify ...)
 *   require( 'multiversal' )( module ).as( MODULENAME );
 * 
 * Import (VanillaJS with bundle.js)
 *   var myModule = multiversalRequire( MODULENAME );
 */

var map = {}

module.exports = function( module ) {
    return {
        as: function( name ) {
            map[ name ] = module;
        },
    };
};

if ( typeof global.multiversalRequire === 'undefined' ) {
    global.multiversalRequire = function( name ) {
        return map[ name ].exports;
    }
}
