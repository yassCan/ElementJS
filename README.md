counter example
```JavaScript
function Counter(props) {
  // the main container of all your childs
  return new Element('div', {
    parent: body
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
       onclick: `$(() => {
         count++
         select('.h1').innerHTML = count
       })`, text: 'click'
     }),
     h1: new Element('h1', {
       text: count, class: 'h1'
       // and it could have more childs
       /*
       childs: {
        // other children
       }
       */
     })
    }
  })
} 

const counter = new Counter()
```

in an html, add a script tag with the src attribute and the put the file path

```html
<html>
  <head></head>
  <body>
    <script src="./counter.js"></script>
  </body>
</html>
```
