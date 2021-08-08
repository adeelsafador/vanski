/* THEME */

// Set a given theme/color-scheme
function setTheme(themeName) {
	localStorage.setItem('theme', themeName)
	document.documentElement.className = themeName
}

// Toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark') { 

		themeLabel = 'Light Mode'
        themeIcon = '&#127764;'
		// themeIcon = "<a class='icon icon--theme' title='theme'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path id='theme--switch' d='M16 9c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7c0-3.859-3.141-7-7-7zM16 7c0.552 0 1-0.447 1-1v-2c0-0.552-0.448-1-1-1-0.553 0-1 0.448-1 1v2c0 0.553 0.447 1 1 1zM16 25c-0.553 0-1 0.448-1 1v2c0 0.553 0.447 1 1 1 0.552 0 1-0.447 1-1v-2c0-0.552-0.448-1-1-1zM23.776 9.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM8.221 22.366l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0l1.414-1.414c0.391-0.393 0.391-1.023 0-1.414s-1.023-0.393-1.414 0zM7 16c0-0.552-0.448-1-1-1h-2c-0.553 0-1 0.448-1 1 0 0.553 0.447 1 1 1h2c0.552 0 1-0.447 1-1zM28 15h-2c-0.553 0-1 0.448-1 1 0 0.553 0.447 1 1 1h2c0.552 0 1-0.447 1-1 0-0.552-0.448-1-1-1zM8.22 9.635c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM23.779 22.363c-0.393-0.391-1.023-0.391-1.414 0s-0.393 1.023 0 1.414l1.414 1.414c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414z'></path></svg></a>" 
        
		setTheme('theme-light')

	} else {
		themeLabel = 'Night Mode' 
        themeIcon = '&#127762;'
		// themeIcon = "<a class='icon icon--theme' title='theme'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M15.505 16.496c-1.97-1.971-2.499-4.819-1.626-7.284-0.953 0.337-1.854 0.865-2.616 1.626-2.734 2.734-2.734 7.167 0 9.9 2.733 2.733 7.164 2.735 9.898 0 0.764-0.762 1.29-1.663 1.626-2.616-2.463 0.872-5.312 0.344-7.283-1.626z'></path></svg></a>" 

		setTheme('theme-dark')
	}

	document.getElementsByClassName('theme--label')[0].innerHTML = themeLabel
	document.getElementById('theme--icon').innerHTML = themeIcon
} 

// Immediately invoked function to set the theme on initial load 
(function () {
	if (localStorage.getItem('theme') === 'theme-dark') {
		themeLabel = 'Night Mode'
        themeIcon = '&#127762;'
        // themeIcon = "<a class='icon icon--theme' title='theme'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M15.505 16.496c-1.97-1.971-2.499-4.819-1.626-7.284-0.953 0.337-1.854 0.865-2.616 1.626-2.734 2.734-2.734 7.167 0 9.9 2.733 2.733 7.164 2.735 9.898 0 0.764-0.762 1.29-1.663 1.626-2.616-2.463 0.872-5.312 0.344-7.283-1.626z'></path></svg></a>"
		setTheme('theme-dark')
        
    } else {
        themeLabel = 'Light Mode' 
        themeIcon = '&#127764;'
		// themeIcon = "<a class='icon icon--theme' title='theme'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path id='theme--switch' d='M16 9c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7c0-3.859-3.141-7-7-7zM16 7c0.552 0 1-0.447 1-1v-2c0-0.552-0.448-1-1-1-0.553 0-1 0.448-1 1v2c0 0.553 0.447 1 1 1zM16 25c-0.553 0-1 0.448-1 1v2c0 0.553 0.447 1 1 1 0.552 0 1-0.447 1-1v-2c0-0.552-0.448-1-1-1zM23.776 9.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM8.221 22.366l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0l1.414-1.414c0.391-0.393 0.391-1.023 0-1.414s-1.023-0.393-1.414 0zM7 16c0-0.552-0.448-1-1-1h-2c-0.553 0-1 0.448-1 1 0 0.553 0.447 1 1 1h2c0.552 0 1-0.447 1-1zM28 15h-2c-0.553 0-1 0.448-1 1 0 0.553 0.447 1 1 1h2c0.552 0 1-0.447 1-1 0-0.552-0.448-1-1-1zM8.22 9.635c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM23.779 22.363c-0.393-0.391-1.023-0.391-1.414 0s-0.393 1.023 0 1.414l1.414 1.414c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414z'></path></svg></a>" 
		setTheme('theme-light')
   }
   document.getElementsByClassName('theme--label')[0].innerHTML = themeLabel
   document.getElementById('theme--icon').innerHTML = themeIcon
})();

// Button Theme
document.getElementById('theme--switch').addEventListener('click', toggleTheme)