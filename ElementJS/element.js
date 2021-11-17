const { pow } = Math
const { floor } = Math
const { head } = document
const { body } = document
const print = console.log
const loop = setInterval
const sleep = setTimeout
const html = document.getElementsByTagName('html')[0]


/*
create an App class
*/

function childrenOf(elem) {
	const {children} = elem
	return children
}





function element(name, att){
  	// atts => attributes
    this.atts = att
    this.name = name
    this.keys = Object.keys(this.atts)
    this.keyValues = Object.values(this.atts)
    // newAtt => new attribute
    this.newAtt;
    this.styles
    // elem => element
    let elem = document.createElement(this.name)
    let parent
    this.keys.forEach((key, i) => {
    	// val => value
	  let val = this.keyValues[i]
	  if(key == "css") {
	  	setStyle(val, elem)
	  } else if (key == "childs") {
	  	append(val, elem)
	  } else if(key == "text") {
	  	setText(val, elem)
	  } else if(key == "parent") {
			val.append(elem)
		}
	  this.newAtt = document.createAttribute(key)
	  this.newAtt.value = val
	  elem.setAttributeNode(this.newAtt)
    });
    return elem
}

function setText(val, elem) {
	elem.textContent = val
}
function setStyle(styles, elem) {
	this.styles = styles
	for(const prop in this.styles) {
		elem.style[prop] = this.styles[prop]
	}
}
function append(childs, elem) {
	for(const child in childs) {
		elem.append(childs[child])
		let parentAtt = document.createAttribute('parent')
		parentAtt.value = elem.toString()
		childs[child].setAttributeNode(parentAtt)
	}
}

function createStyle(styles) {
	if(styles != undefined) {
		this.styles = styles
		this.camelPropsObj = {}
		this.props = Object.keys(this.styles)
		this.keyValues = Object.values(this.styles)
		this.camelProps = []
		this.props.forEach((prop) => {
			this.camelProps.push(toCamelCase(prop))
		})
		this.camelProps.forEach((prop, i) => {
			this.camelPropsObj[prop] = this.keyValues[i]
		})
		return this.camelPropsObj
	}
}
// const element = new ElementJS()
function toCamelCase(prop) {
	// prop => properti, newProp => new propertie
	let newProp
	for(let i = 0;i < prop.length;i++) {
		if(prop[i] == "-") {
			newProp = prop.replace(/\-[a-z]/, prop[i+1].toUpperCase())
		}
	}
	newProp = prop
	return newProp
}

function select(selector) {
	return document.querySelector(selector)
}

function selectAll(selector) {
	return document.querySelectorAll(selector)
}

function Request() {
	this.post = (url, data, options) => {
		let methodOptions = options ?? {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}
		return fetch(url, methodOptions)
	}
	this.get = (url ,options) => {
		let methodOptions = options ?? {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
		return fetch(url, methodOptions)
	}
}
const request = new Request()

function random(min, max) {
	return Math.random()*(max-min)+min
}

function $(func) {
	func()
}
