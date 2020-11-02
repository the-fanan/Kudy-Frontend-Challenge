import { shallowMount } from '@vue/test-utils';
import ElipseShape from '@/components/shapes/elipse/Shape.vue';

describe('CircleShape displays a circle based on props', () => {
    it('displays an SVG circle with appropriate attributes', () => {
        const shape = {
            top: 100,
            left: 100,
            color: "#276db8",
            component: 'elipse-shape',
            key: 'elipse',
            parameters: {
                xRadius: 20,
                yRadius: 50,
            }
        }

        const wrapper = shallowMount(ElipseShape, {
            propsData: {shape}
        })

        const svg = wrapper.find('svg')
        expect(svg.attributes('height')).toBe("" + shape.parameters.yRadius * 2)
        expect(svg.attributes('width')).toBe("" + shape.parameters.xRadius * 2)

        const ellipse = wrapper.find('ellipse')
        expect(ellipse.attributes('cx')).toBe("" + shape.parameters.xRadius)
        expect(ellipse.attributes('cy')).toBe("" + shape.parameters.yRadius)
        expect(ellipse.attributes('rx')).toBe("" + shape.parameters.xRadius)
        expect(ellipse.attributes('ry')).toBe("" + shape.parameters.yRadius)
        expect(ellipse.attributes('fill')).toBe(shape.color)
    })
})