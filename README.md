# Shapey
This is my submission for the Kudy Frontend Challenge. This project was built with **Vue** and allows users to create shapes based on specified dimensions.

Shapes available include: 
- Circle
- Ellipse
- Rectangle
- Square
- Triangle
- Polygons (5 to 30 sides)

## Structure
The main page that displays all the shapes is the shapes component **@/views/Shapes.vue**

Various components are created to handle the createion of the shapes. The creation components are found in **@/components/shapes/SHAPE/Form.vue** while the component that handles display of the intended shape is found in  **@/components/shapes/SHAPE/Shape.vue**.

## Behaviour
- Only even sided polygons can be made
- Color can be selected for each shape
- There is an option to delete all shapes at once
- Individual shapes can be deleted by double clicking on them. (A tooltip bearing this information appears when you hover over a shape).
- When a shape is created it animates into the screen (It enlarges from dimensions of 0 till it gets to it's specified dimensions).
- Shapes that have been created can be moved around the screen and their positons remain intact on reload

## Edge Cases I thought about
- Users are not allowed to create shapes with dimensions that exceed the user's screen size (which may be a bad user experience). This is to handle edge case of an extremely large dimension value JavaScript may not be able to handle.
- Polygon sides are limited to 30 to prevent edge case of user entering an extremely large value that Javascript cannot handle. Also, this is to prevent creating a polygon whose size might go out of the screen's proportions.
- In order to persist shapes on reload, I made use of **window.localStorage**. To prevent a situation where user creates too many shapes and exceeds the maximum storage available for local storage a check is made on the space consumed by the application and if it is exceeded the user is not allowed to create more shapes and is alerted about this.
- I made use of an object rather than an array for created shapes. This is to ensure that insertion and deletion of created shapes has a time complexity is O(1). Should the number of created shapes grow, insertion and deletion would still be fast.

## Setting up project
### Requirements
- Node v12
- yarn or npm installed
- docker (optional)
- docker-compose (optional)

### Serving without Docker
- Enter into project root directory
- Run `npm install` or `yarn install`
- Run `npm run serve` or `yarn run serve`
- Open your web browser and navigate to `http://localhost:3000`

### Serving with Docker
- Enter into project root directory
- Run `sudo docker-compose build`
- Run `sudo docker-compose up`
- Open your web browser and navigate to `http://localhost:5000`

### View On Web
[Link to Live project](https://the-fanan.github.io/Kudy-Frontend-Challenge-bundled/)

## Unit Tests
Unit tests cover the following:
- Shapes are rendered with necessary and correct attributes to display them
- Shape forms collect correct data and call the shapes.addShape() action when their submit button is clicked
- Confirmation modal displays correctly based on prop values
- Snack Alert displays properly based on values in the alert module
- Shapes view displays the created shapes in shapes module

To run tests, run the following command in terminal `npm run test:unit` or `yarn run test:unit`

## Author
[Fanan Dala](https://fanandala.com)

## Contact
[Email](mailto:fanan.dala@yahoo.com)

[Twitter](https://twitter.com/the_cocoreidh)