counter example
```JavaScript
let count = 0

function Counter() {
	this.fontStyle = createStyle({
		'font-family': 'sans-serif',
		'font-size': '2rem'
	})
	return new Element('div', {
		parent: body,
		css: createStyle({
			'display': 'flex',
			'justify-content': 'space-around'
		}),
		childs: {
			p: new Element('p', {
				// and every element can children
				/*
				childs: {
					some more child elements for the p element
				}
				*/
				text: count, css: this.fontStyle
			}),
			button: new Element('button', {
				onclick: `$(() => {
					count++
					select('p').innerHTML = count
				})`,
				text: 'update',
				css: this.fontStyle
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
	<script src='./ElementJS/element.js'></script>
    	<script src="./counter.js"></script>
  </body>
</html>
```
