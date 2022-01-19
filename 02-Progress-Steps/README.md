# 02-Progress-Steps
This directory contains a project with a progress bar, that you can step from 1 to 4.

## CSS-features
### :root and var()
As an example, set a "global" variable in ```:root``` and use it on the ```progress``` class using ```var()```.
```css
:root {
  --line-border-fill: #3498db;
  --line-border-empty: #e0e0e0;
}
.progress {
  background-color: var(--line-border-fill);
}
```

### ::before
The content CSS property replaces an element with a generated value. Objects inserted using the content property are anonymous replaced elements. In our case its used to draw a gray line over the whole progress bar.

### :active
The :active CSS pseudo-class represents an element (such as
a button) that is being activated by the user. When using a
mouse, "activation" typically starts when the user presses
down the primary mouse button.

### :focus
The :focus CSS pseudo-class represents an element (such as
a form input) that has received focus. It is generally
triggered when the user clicks or taps on an element or
selects it with the keyboard's Tab key.

### :disabled
The :disabled CSS pseudo-class represents any disabled
element. An element is disabled if it can't be activated
(selected, clicked on, typed into, etc.) or accept focus.
The element also has an enabled state, in which it can be
activated or accept focus.

## javascript features
### document.getElementById('progress')
The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

### HTMLSelectElement.disabled = true
The HTMLSelectElement.disabled is a boolean value that reflects the disabled HTML attribute, which indicates whether the control is disabled. If it is disabled, it does not accept clicks. A disabled element is unusable and un-clickable.
[Back to main README.md](../README.md)