# ElementJS
this is a UI librarie

ElementJS is very simple:

#creating a component:

<function component>
```javascript 
let count
function add() {
 count++
}
function Counter(props) {
   this.button = new Element('button', {
     onclick: 'add()', text: 'click'
   })
   this.h1 = new Element('h1', {
     text: count
   })
  // the main container of all your childs
  this.component = new Element('div', {
    // you can add html attribute with some speacial attributes
    // html attribute
    class: 'component'
    // speacial attribute
    css: createStyle({
     // put styles in here
      'display': 'flex', 'justify-content': 'center', 'align-items': 'center'
    })
    // the childs attributes append every element to the parent
    childs: {
     button: this.button, h1: this.h1
    }
  })
  return this.container
} 

const counter = new Counter()


other way (nesting)

function Counter(props) {
  // the main container of all your childs
  this.component = new Element('div', {
    // you can add html attribute with some speacial attributes
    // html attribute
    class: 'component'
    // speacial attribute
    css: createStyle({
     // put styles in here
      'display': 'flex', 'justify-content': 'center', 'align-items': 'center'
    })
    // the childs attributes append every element to the parent
    childs: {
     button: new Element('button', {
       onclick: 'add()', text: 'click'
     }),
     h1: new Element('h1', {
       text: count,
       // and it could have more childs
       /*childs: {
        // other children
       }*/
     })
    }
  })
  return this.container
} 


>> class Component


class Counter {
  contructor() {
    // the main container of all your childs
    this.component = new Element('div', {
      // you can add html attribute with some speacial attributes
      // html attribute
      class: 'component'
      // speacial attribute
      css: createStyle({
       // put styles in here
        'display': 'flex', 'justify-content': 'center', 'align-items': 'center'
      })
      // the childs attributes append every element to the parent
      childs: {
       button: new Element('button', {
         onclick: 'add()', text: 'click'
       }),
       h1: new Element('h1', {
         text: count,
         // and it could have more childs
         /*childs: {
          // other children
         }*/
       })
      }
    }
    return this.container
  })
} 
 
 ```


and these are reusable components so you can do this


const counter = new Counter()
const counter1 = new Counter()
const counter2 = new Counter()
const counter3 = new Counter()


and it will create 4 components
