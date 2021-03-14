const DirectedGraphMap = require('directed-graph-map');

const dgm = new DirectedGraphMap([['Intro', 'Numbers', 'String', 'Boolean', 'Conditionals', 'If/else', 'For loops', 'While loops', 'Try and catch', 'List', 'Tuple', 'dict', 'Iterative Functions', 'Recursive Functions', 'Files Input and Output', 'Classes']]);

dgm.hasEdge('Intro', 'Numbers');
dgm.hasEdge('Intro', 'String');
dgm.hasEdge('Intro', 'Boolean');

dgm.hasEdge('Numbers', 'String');
dgm.hasEdge('String', 'Boolean');

// edges to list and dict once it has completed all 3 variables
dgm.hasEdge('Numbers', 'List');
dgm.hasEdge('String', 'List');
dgm.hasEdge('Boolean', 'List');

dgm.hasEdge('Numbers', 'dict');
dgm.hasEdge('String', 'dict');
dgm.hasEdge('Boolean', 'dict');

dgm.hasEdge('Boolean', 'If/else');

dgm.hasEdge('String', 'For loops');
dgm.hasEdge('String', 'While loops');

dgm.hasEdge('For loops', 'While loops');
// dgm.hasEdge('While loops', 'For loops');

dgm.hasEdge('For loops', 'Iterative functions');
dgm.hasEdge('If/else', 'Iterative Functions');

dgm.hasEdge('While loops', 'Recursive functions');
dgm.hasEdge('While loops', 'Files Input and Output');
// dgm.hasEdge('While loops', '')

dgm.hasEdge('Iterative functions', 'Classes');
