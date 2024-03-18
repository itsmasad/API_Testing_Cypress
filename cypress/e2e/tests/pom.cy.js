///<reference types="cypress"/>
import demopage from "./Pages/demopagepom.cy";

const demopage_objects = new demopage;

describe('This is suit',()=>{

    it('Test',()=>{
    // Importing function from the demopage
    demopage_objects.visit_site();

    })

})