import { shallowMount } from '@vue/test-utils';
import PolygonShape from '@/components/shapes/polygon/Shape.vue';

describe('PolygonShape displays a polygon based on props', () => {
    it('displays an SVG pentagon with appropriate attributes', () => {
        const shape = {
            top: 100,
            left: 100,
            color: "#276db8",
            component: 'polygon-shape',
            key: 'pentagon',
            parameters: {
                width: 30,
                sides: 5,
            }
        }

        const wrapper = shallowMount(PolygonShape, {
            propsData: {shape}
        })

        const svg = wrapper.find('svg')
        expect(svg.attributes('height')).toBe("" + wrapper.vm.radius * 2)
        expect(svg.attributes('width')).toBe("" + wrapper.vm.radius * 2)

        const polygon = wrapper.find('polygon')
        //ensure a valid pentagon with 5 sides and width or 30 is created
        expect(polygon.attributes('points')).toBe("10.519524250561197,51.039048501122394 40.5195242505612,51.039048501122394 49.79003408180962,22.50735301226779 25.5195242505612,4.8737954434935915 1.2490144193127755,22.50735301226778 ")
        expect(polygon.attributes('fill')).toBe(shape.color)
    })
})