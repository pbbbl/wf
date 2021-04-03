
export default ( str ) => {
    str = str || window.location.pathname;
    str = str.replace( '/', '' );
    str = str.replace( /[\W_]+/g, " " ).toLowerCase();
    str = str.split( " " );
    for ( let i = 1; i < str.length; i++ ) {
        if ( !str[ i ] ) {

            break;
        }
        str[ i ] = str[ i ][ 0 ].toUpperCase() + str[ i ].substr( 1 );
    }
    str = str.join( "" );
    return str;
};
