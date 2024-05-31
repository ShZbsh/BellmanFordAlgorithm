const graph2 = [[0, 8, 4, Infinity, Infinity, Infinity, Infinity], //a
[Infinity, 0, -3, Infinity, -4, Infinity, Infinity], //b
[Infinity, Infinity, 0, 10, -1, Infinity, Infinity], //c
[Infinity, -2, Infinity, 0, Infinity, Infinity, Infinity], //d
[Infinity, Infinity, Infinity, 12, 0, 4, 2], //e
[Infinity, Infinity, Infinity, 3, Infinity, 0, Infinity], //f
[Infinity, Infinity, Infinity, Infinity, Infinity, 1, 0]] //g

const graph1 = [
    [0, 2, Infinity, 1, Infinity],
    [Infinity, 0, 3, 2, Infinity],
    [Infinity, Infinity, 0, Infinity, 3],
    [Infinity, Infinity, Infinity, 0, 1],
    [Infinity, Infinity, Infinity, Infinity, 0]
];

function BellmanFordAlgorithm(graph) {
    const n = graph.length; // number of nodes in the graph

    // Initialization
    const h = new Array(n).fill(Infinity);
    
    h[0] = 0;
    //h=[o,inf,inf,....]
    let iterations = [];
    iterations.push(h)
    
    //let newH=[]

    let minWH = new Array(n).fill(Infinity);
    for (k = 0; k < n; k++) {
        for (j = 0; j < n; j++) {
            for (i = 0; i < n; i++) {
                if (graph[i][j] !== 0 ) {        // graph[i][j]=w_ij
                    let WH = graph[i][j] + iterations[k][i]
                    if (WH < minWH[j]) {
                        minWH[j] = WH;
                    }
                    if (h[j] < minWH[j]) {
                        minWH[j] = h[j]
                    }

                    //newH[i] = Math.min(minWH[j], iterations[0][i]); // store the minimum value in the new array
                }

            }
        

        }
        iterations.push(minWH);// push the new array onto iterations
       
    }
    console.log(minWH)
    
// console.log(iterations);

    
}

BellmanFordAlgorithm(graph2)
BellmanFordAlgorithm(graph1)