if (-1 || 0) alert( 'first' ); // выполнится; в условии true (-1)
if (-1 && 0) alert( 'second' ); // не выполнится; в условии false (0)
if (null || -1 && 1) alert( 'third' ); // выполнится; в условии true (1)