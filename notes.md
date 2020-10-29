Edge cases
=================
1. Lengths that blow image out of proportion of screen or infinite length. (Warn user or tell user not allowed)
2. To many objects created on the screen so screen is crowded
3. Objects created over shoot allocated memory for local storage. (https://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage) (Size of local storage used)[https://gist.github.com/tkambler/71050d80f1a57ea83c18]

Structure
===========
1. Input selection is a side bar, for mobile it will cover screen
2. Created shapes appear in working area and they can be moved around, deleted and color updated.
3. Length selection component would be based on selected shape

shapes: {
    available: [],
    created: [],
}
available_shapes: {
    "name",
    "selection type" (circle ==> show radius, rectangle ==> show enter length & breadth, square and other polygons ==> show eneter length of sides)
}

created_shapes: {
    positon: {
        top, left
    },
    color,
}