 import React from  'react';
import  Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HelloComponent from "./HelloComponent";

Enzyme.configure({ adapter: new Adapter()});

 describe('HelloComponent',() =>{
     it('afficher hello ',()=>{
         const wrap = shallow(<HelloComponent />);
         const resultat = wrap.find('div div');
         expect(resultat.text()).toBe(' Hello from missouri & Elhouari ')
     });
     it('cacher Hello quand le bouton est clique ',()=>{
         const wrap = shallow(<HelloComponent />);
         const button  = wrap.find('button');
         button.simulate('click');
         const resultat=wrap.find('div div');
         expect(resultat.length).toBe(0);

     })
 });


/*
describe('HelloComponent',() =>{
    it('should be true',()=>{
        const cte = true;
        expect(cte).toBe(true);
    });
    it('should be false',()=>{
        const cte = true;
        expect(cte).toBe(false);
    })
});
*/
