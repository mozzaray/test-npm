import * as components from './components'
import theBtn from './components/button'
import theCard from './components/card';

const theComponent = {
    install(Vue){
        Object.keys(components).forEach(item => {
            Vue.component(item, components[item]);
        });
    }
}


export default theComponent;
export { theBtn, theCard }
