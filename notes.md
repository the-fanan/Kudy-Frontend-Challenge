Edge cases
=================
1. Lengths that blow image out of proportion of screen or infinite length. (Warn user or tell user not allowed)
2. To many objects created on the screen so screen is crowded
3. Objects created over shoot allocated memory for local storage. (https://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage) (Size of local storage used)[https://gist.github.com/tkambler/71050d80f1a57ea83c18]
4. For polygons, only allow up to a specific number of sides

Structure
===========
1. Input selection is a side bar, for mobile it will cover screen
2. Created shapes appear in working area and they can be moved around, deleted and color updated. (draggable object)[https://www.kirupa.com/html5/drag.htm]
3. Length selection component would be based on selected shape
4. We look through when a page is reloaded. Once a shape is created, it is added to created_shapes and then added to displayed shapes and then it is displayed. When it is deleted, it is removed from displayed shapes and created_shapes. We do the loading of previous shapes to prevent slow page load. We are using a key => value system for quick deletions of shapes. (If user makes up to one million shapes, we do not want to wait a while for the shape to be deleted)

5. Create a draggable component that accepts a slot for component to be added

shapes: {
    available: [],
    created: {key: ShapeDetails{}},
}

available_shapes: {
    "name",
    "selection type" (circle ==> show radius, rectangle ==> show enter length & breadth, square and other polygons ==> show eneter length of sides),
    "sides": 4,
}

created_shapes: {
    top,
    left,
    color,
    component,
    key,
    parameters: {
        radius:
    }
}

Shapes
==========
1. We have 2 major types, circles and polygons
2. For polygons, they can be uneven or even sided
3. If even sided, select number of sides and length
4. if uneven select number of sides and display option for length of each side
5. On, hover, display icon beside to show options for shape