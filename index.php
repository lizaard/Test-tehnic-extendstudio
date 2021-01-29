
<?php
$tree = array('<a href="about.html"> About </a>',
              '<a href="product.html"> Products </a>',
              array('<a href="products.html"> Product </a>'),
              '<a href="about.html"> About </a>',
              '<a href="product.html"> Products </a>',
              '<a href="about.html"> About </a>',
              '<a href="product.html"> Products </a>',
              );

function olLiTree($tree)
{
    echo '<ul>';
    foreach($tree as $item) {
        if (is_array($item)) {
            olLiTree($item);
        } else {
            echo '<li>', $item, '</li>';
        }
    }
    echo '</ul>';
}
olLiTree($tree);  