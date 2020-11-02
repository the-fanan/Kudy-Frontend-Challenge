import { shallowMount } from '@vue/test-utils';
import CircleShape from '@/components/shapes/circle/Shape.vue';

describe('CircleShape displays a circle based on props', () => {
    it('displays an SVG circle with appropriate attributes', () => {
        const shape = {
            top: 100,
            left: 100,
            color: "#276db8",
            key: 'key',
            component: 'circle-shape',
            parameters: {
                radius: 10,
            }
        }

        const wrapper = shallowMount(CircleShape, {
            propsData: {shape}
        })

        const svg = wrapper.find('svg')
        expect(svg.attributes('height')).toBe("" + shape.parameters.radius * 2)
        expect(svg.attributes('width')).toBe("" + shape.parameters.radius * 2)

        const circle = wrapper.find('circle')
        expect(circle.attributes('cx')).toBe("" + shape.parameters.radius)
        expect(circle.attributes('cy')).toBe("" + shape.parameters.radius)
        expect(circle.attributes('r')).toBe("" + shape.parameters.radius)
        expect(circle.attributes('fill')).toBe(shape.color)
    })
})