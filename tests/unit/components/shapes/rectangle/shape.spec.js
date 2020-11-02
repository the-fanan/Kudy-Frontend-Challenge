import { shallowMount } from '@vue/test-utils';
import RectangleShape from '@/components/shapes/rectangle/Shape.vue';

describe('RectangleShape displays a rectangle based on props', () => {
    it('displays an SVG rectangle with appropriate attributes', () => {
        const shape = {
            top: 100,
            left: 100,
            color: "#276db8",
            component: 'rectangle-shape',
            key: 'rectangle',
            parameters: {
                width: 40,
                height: 20,
            }
        }

        const wrapper = shallowMount(RectangleShape, {
            propsData: {shape}
        })

        const svg = wrapper.find('svg')
        expect(svg.attributes('height')).toBe("" + shape.parameters.height)
        expect(svg.attributes('width')).toBe("" + shape.parameters.width)

        const rect = wrapper.find('rect')
        expect(rect.attributes('width')).toBe("" + shape.parameters.width)
        expect(rect.attributes('height')).toBe("" + shape.parameters.height)
        expect(rect.attributes('fill')).toBe(shape.color)
    })
})