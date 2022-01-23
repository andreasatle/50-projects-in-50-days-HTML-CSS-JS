# 03-Rotating-Navigation
This directory contains a project with a webpage, that rotates when you click the navigation bar.
This is mostly an exercise in CSS.

## HTML features

### ```<i>```: The Idiomatic Text element
The ```<i>``` HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element.

### Font Awesome
Use different symbols using Font Awesome (download css from [```cdnjs.com```](https://cdnjs.com/libraries?q=font-awesome)).
We can use the awesome fonts by adding the class ```fas``` to an element, together with the name of the symbol. We use five different symbols
* ```fa-times```
* ```fa-bars```
* ```fa-home```
* ```fa-user-alt```
* ```fa-envelope```

We get e.g. a x-symbol by writing ```<i class="fas fa-times"></i>```.

## CSS features

We use CSS transform in several elements in this project. And also the CSS transition, to delay and getting smooth transitions between
the different rotations etc.

One novelty is to access the second element by using the ```+``` in the selector.

[Back to main README.md](../README.md)