counter example
```JavaScript
let count = 0

function Counter() {
	this.fontStyle = createStyle({
		'font-family': 'sans-serif',
		'font-size': '2rem'
	})
	return element('div', {
		parent: body,
		css: createStyle({
			'display': 'flex',
			'justify-content': 'space-around'
		}),
		childs: {
			p: element('p', {
				text: count, css: this.fontStyle
			}),
			button: element('button', {
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


the $ function takes a function as an argument and execute, you can use if you want inline functions


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
