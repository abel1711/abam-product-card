import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';



describe('ProductCard', () => {
    
    test('debe de mostrar correctamente el componente', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    ()=>(
                        <h1>Hola mundo</h1>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de incrementar en 1 el count', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    ({ count, increaseBy })=>(
                        <>
                            <h1>Product</h1>
                            <span>{ count }</span>
                            <button onClick={()=> increaseBy(1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        );
        
        let tree = wrapper.toJSON();

        expect( tree ).toMatchSnapshot();

        renderer.act(()=>{
            
            (tree as any).children[2].props.onClick();

        });

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1');
    })
    
    
})
