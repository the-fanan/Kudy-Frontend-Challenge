let maxDimension = () => {
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    let height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    let max = 0;
    if (width > height) {
        max = height;
    } else {
        max = width;
    }

    return (max * .8);
}

export default maxDimension