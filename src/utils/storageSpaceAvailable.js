let storageSpaceAvailable = (data) => {
    //code snippet gotten from (Stack Overflow)[https://stackoverflow.com/a/15720835/7715823]
    //find how much memory is consumed by device
    var _lsTotal = 0,
    _xLen, _x;
    for (_x in localStorage) {
        if (!localStorage.hasOwnProperty(_x)) {
            continue;
        }
        _xLen = ((localStorage[_x].length + _x.length) * 2);
        _lsTotal += _xLen;
    };
    //console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

    let dataString = JSON.stringify(data);
    console.log(dataString)
    let dataSize = dataString.length * 2;
    _lsTotal += dataSize
    //console.log("Data Size: " + (dataSize / 1024).toFixed(3) + " KB");
    //console.log("New Size: " + (_lsTotal / 1024).toFixed(2) + " KB");
    let max = 5 * 1024; //5MB

    if (_lsTotal > max) {
        return false;
    }
    return true;

}

export default storageSpaceAvailable