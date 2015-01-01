Flexible Grid Layout
====================

A responsive grid layout using CSS. To include in your own project just grab the SASS file _grid.scss and include it in your styles

Usage
=====

Add an all encompassing div with a class "grid"

Then add a row with class "grid-row" and an additional class defining the number of columns that the row will contain, i.e. grid-row--two

Then add the columns. Each column must have the class "grid-column" and an additional class which declares the number of columns is spans, i.e. grid-column--single for a single spanning column, grid-column--double to span two.

Add grid-column--last to the last column in the row: this just adds a bunch of stuff to sort the margins out.

    <div class="grid">
	    <div class="grid-row grid-row--two">
			<div class="grid-column grid-column--single">grid-row-two grid-column---single</div>
			<div class="grid-column grid-column--last grid-column--single">grid-row-two grid-column---single last</div>
		</div>
	</div>