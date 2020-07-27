import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('h-button', Button);
Vue.component('h-icon', Icon);
Vue.component('h-button-group', ButtonGroup);
new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect;
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'ok'
    }
  });
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-ok')
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'ok',
      loading: true
    }
  });
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'ok'
    }
  });
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'ok',
      iconPosition: 'right'
    }
  });
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'ok'
    }
  });
  vm.$mount()
  let spy = chai.spy(function () {})
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}