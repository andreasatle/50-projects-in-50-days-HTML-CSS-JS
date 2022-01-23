// Get access to the open button
const open = document.getElementById('open')

// Get access to the close button
const close = document.getElementById('close')

// Get access to the container class.
const container = document.querySelector('.container')


// Add class show-nav to container when open button is clicked.
open.addEventListener('click', () => container.classList.add('show-nav'))

// Remove class show-nav to container when close button is clicked.
close.addEventListener('click', () => container.classList.remove('show-nav'))
