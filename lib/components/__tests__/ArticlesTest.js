import React from 'react';
import renderer from 'react-test-renderer';
import Articles from '../Articles';

describe('test Acrticles component',()=>{

    const testProps = {
        articles :{
            a:{id:'a'},
            b:{id:'b'}
        },
       articleActions :{
           lookupAuthor : jest.fn(()=>({})),
       }
    }

    it ('renders correctly ',()=>{
        const tree = renderer.create(
            <Articles
                {...testProps}
            ></Articles>
        ).toJSON();
        expect(tree.children.length).toBe(2);
        expect(tree).toMatchSnapshot();
    })

})