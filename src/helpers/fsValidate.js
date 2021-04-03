export default ( value ) => {
    var valid = value != null && value != 'undefined';
    if ( value == 'false' ) {
        value = 'false';
    }
    return { valid, value };
};
