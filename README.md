```JavaScript
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

function add() {
  count++
}
```
