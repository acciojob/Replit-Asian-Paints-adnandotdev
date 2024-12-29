//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function() {
	const blockId = document.getElementById('block_id').value
	const color = document.getElementById('colour_id').value
	const gridItems = document.getElementsByClassName('grid-item')
	for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = 'transparent'
    }
	const selectedBlock = document.getElementById(blockId)
	selectedBlock.style.backgroundColor = color
})
document.getElementById('Reset').addEventListener('click', function() {
	const gridItems = document.getElementsByClassName('grid-item')
	for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = 'transparent'
    }
	document.getElementById('block_id').value = ''
	document.getElementById('colour_id').value = ''
})