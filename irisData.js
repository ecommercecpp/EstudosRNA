const irisData = [
    [5.1, 3.5, 1.4, 0.2, 0],
    [4.9, 3.0, 1.4, 0.2, 0],
    [4.7, 3.2, 1.3, 0.2, 0],
    [4.6, 3.1, 1.5, 0.2, 0],
    [5.0, 3.6, 1.4, 0.2, 0],
    [5.4, 3.9, 1.7, 0.4, 0],
    [4.6, 3.4, 1.4, 0.3, 0],
    [5.0, 3.4, 1.5, 0.2, 0],
    [4.4, 2.9, 1.4, 0.2, 0],
    [4.9, 3.1, 1.5, 0.1, 0],
    [5.4, 3.7, 1.5, 0.2, 0],
    [4.8, 3.4, 1.6, 0.2, 0],
    [4.8, 3.0, 1.4, 0.1, 0],
    [4.3, 3.0, 1.1, 0.1, 0],
    [5.8, 4.0, 1.2, 0.2, 0],
    [5.7, 4.4, 1.5, 0.4, 0],
    [5.4, 3.9, 1.3, 0.4, 0],
    [5.1, 3.5, 1.4, 0.3, 0],
    [5.7, 3.8, 1.7, 0.3, 0],
    [5.1, 3.8, 1.5, 0.3, 0],
    [5.4, 3.4, 1.7, 0.2, 0],
    [5.1, 3.7, 1.5, 0.4, 0],
    [4.6, 3.6, 1.0, 0.2, 0],
    [5.1, 3.3, 1.7, 0.5, 0],
    [4.8, 3.4, 1.9, 0.2, 0],
    [5.0, 3.0, 1.6, 0.2, 0],
    [5.0, 3.4, 1.6, 0.4, 0],
    [5.2, 3.5, 1.5, 0.2, 0],
    [5.2, 3.4, 1.4, 0.2, 0],
    [4.7, 3.2, 1.6, 0.2, 0],
    [4.8, 3.1, 1.6, 0.2, 0],
    [5.4, 3.4, 1.5, 0.4, 0],
    [5.2, 4.1, 1.5, 0.1, 0],
    [5.5, 4.2, 1.4, 0.2, 0],
    [4.9, 3.1, 1.5, 0.1, 0],
    [5.0, 3.2, 1.2, 0.2, 0],
    [5.5, 3.5, 1.3, 0.2, 0],
    [4.9, 3.1, 1.5, 0.1, 0],
    [4.4, 3.0, 1.3, 0.2, 0],
    [5.1, 3.4, 1.5, 0.2, 0],
    [5.0, 3.5, 1.3, 0.3, 0],
    [4.5, 2.3, 1.3, 0.3, 0],
    [4.4, 3.2, 1.3, 0.2, 0],
    [5.0, 3.5, 1.6, 0.6, 0],
    [5.1, 3.8, 1.9, 0.4, 0],
    [4.8, 3.0, 1.4, 0.3, 0],
    [5.1, 3.8, 1.6, 0.2, 0],
    [4.6, 3.2, 1.4, 0.2, 0],
    [5.3, 3.7, 1.5, 0.2, 0],
    [5.0, 3.3, 1.4, 0.2, 0],
    [7.0, 3.2, 4.7, 1.4, 1],
    [6.4, 3.2, 4.5, 1.5, 1],
    [6.9, 3.1, 4.9, 1.5, 1],
    [5.5, 2.3, 4.0, 1.3, 1],
    [6.5, 2.8, 4.6, 1.5, 1],
    [5.7, 2.8, 4.5, 1.3, 1],
    [6.3, 3.3, 4.7, 1.6, 1],
    [4.9, 2.4, 3.3, 1.0, 1],
    [6.6, 2.9, 4.6, 1.3, 1],
    [5.2, 2.7, 3.9, 1.4, 1],
    [5.0, 2.0, 3.5, 1.0, 1],
    [5.9, 3.0, 4.2, 1.5, 1],
    [6.0, 2.2, 4.0, 1.0, 1],
    [6.1, 2.9, 4.7, 1.4, 1],
    [5.6, 2.9, 3.6, 1.3, 1],
    [6.7, 3.1, 4.4, 1.4, 1],
    [5.6, 3.0, 4.5, 1.5, 1],
    [5.8, 2.7, 4.1, 1.0, 1],
    [6.2, 2.2, 4.5, 1.5, 1],
    [5.6, 2.5, 3.9, 1.1, 1],
    [5.9, 3.2, 4.8, 1.8, 1],
    [6.1, 2.8, 4.0, 1.3, 1],
    [6.3, 2.5, 4.9, 1.5, 1],
    [6.1, 2.8, 4.7, 1.2, 1],
    [6.4, 2.9, 4.3, 1.3, 1],
    [6.6, 3.0, 4.4, 1.4, 1],
    [6.8, 2.8, 4.8, 1.4, 1],
    [6.7, 3.0, 5.0, 1.7, 1],
    [6.0, 2.9, 4.5, 1.5, 1],
    [5.7, 2.6, 3.5, 1.0, 1],
    [5.5, 2.4, 3.8, 1.1, 1],
    [5.5, 2.4, 3.7, 1.0, 1],
    [5.8, 2.7, 3.9, 1.2, 1],
    [6.0, 2.7, 5.1, 1.6, 2],
    [5.4, 3.0, 4.5, 1.5, 2],
    [6.0, 3.4, 4.5, 1.6, 2],
    [6.7, 3.1, 4.7, 1.5, 2],
    [6.3, 2.3, 4.4, 1.3, 2],
    [5.6, 3.0, 4.1, 1.3, 2],
    [5.5, 2.5, 4.0, 1.3, 2],
    [5.5, 2.6, 4.4, 1.2, 2],
    [6.1, 3.0, 4.6, 1.4, 2],
    [5.8, 2.6, 4.0, 1.2, 2],
    [5.0, 2.3, 3.3, 1.0, 2],
    [5.6, 2.7, 4.2, 1.3, 2],
    [5.7, 3.0, 4.2, 1.2, 2],
    [5.7, 2.9, 4.2, 1.3, 2],
    [6.2, 2.9, 4.3, 1.3, 2],
    [5.1, 2.5, 3.0, 1.1, 2],
    [5.7, 2.8, 4.1, 1.3, 2],
    [6.3, 3.3, 6.0, 2.5, 2],
    [5.8, 2.7, 5.1, 1.9, 2],
    [7.1, 3.0, 5.9, 2.1, 2],
    [6.3, 2.9, 5.6, 1.8, 2],
    [6.5, 3.0, 5.8, 2.2, 2],
    [7.6, 3.0, 6.6, 2.1, 2],
    [4.9, 2.5, 4.5, 1.7, 2],
    [7.3, 2.9, 6.3, 1.8, 2],
    [6.7, 2.5, 5.8, 1.8, 2],
    [7.2, 3.6, 6.1, 2.5, 2],
    [6.5, 3.2, 5.1, 2.0, 2],
    [6.4, 2.7, 5.3, 1.9, 2],
    [6.8, 3.0, 5.5, 2.1, 2],
    [5.7, 2.5, 5.0, 2.0, 2],
    [5.8, 2.8, 5.1, 2.4, 2],
    [6.4, 3.2, 5.3, 2.3, 2],
    [6.5, 3.0, 5.5, 1.8, 2],
    [7.7, 3.8, 6.7, 2.2, 2],
    [7.7, 2.6, 6.9, 2.3, 2],
    [6.0, 2.2, 5.0, 1.5, 2],
    [6.9, 3.2, 5.7, 2.3, 2],
    [5.6, 2.8, 4.9, 2.0, 2],
    [7.7, 2.8, 6.7, 2.0, 2],
    [6.3, 2.7, 4.9, 1.8, 2],
    [6.7, 3.3, 5.7, 2.1, 2],
    [7.2, 3.2, 6.0, 1.8, 2],
    [6.2, 2.8, 4.8, 1.8, 2],
    [6.1, 3.0, 4.9, 1.8, 2],
    [6.4, 2.8, 5.6, 2.1, 2],
    [7.2, 3.0, 5.8, 1.6, 2],
    [7.4, 2.8, 6.1, 1.9, 2],
    [7.9, 3.8, 6.4, 2.0, 2],
    [6.4, 2.8, 5.6, 2.2, 2],
    [6.3, 2.8, 5.1, 1.5, 2],
    [6.1, 2.6, 5.6, 1.4, 2],
    [7.7, 3.0, 6.1, 2.3, 2],
    [6.3, 3.4, 5.6, 2.4, 2],
    [6.4, 3.1, 5.5, 1.8, 2],
    [6.0, 3.0, 4.8, 1.8, 2],
    [6.9, 3.1, 5.4, 2.1, 2],
    [6.7, 3.1, 5.6, 2.4, 2],
    [6.9, 3.1, 5.1, 2.3, 2],
    [5.8, 2.7, 5.1, 1.9, 2],
    [6.8, 3.2, 5.9, 2.3, 2],
    [6.7, 3.3, 5.7, 2.5, 2],
    [6.7, 3.0, 5.2, 2.3, 2],
    [6.3, 2.5, 5.0, 1.9, 2],
    [6.5, 3.0, 5.2, 2.0, 2],
    [6.2, 3.4, 5.4, 2.3, 2],
    [5.9, 3.0, 5.1, 1.8, 2]
];
// [5.1, 3.5, 1.4, 0.2] -> [5.1, 3.5, 1.4, 0.2, 'setosa'] [comprimento pétala, largura pétala, comprimento sépala, largura sépala, tipo de íris]

const IRIS_CLASSES = ['setosa', 'versicolor', 'virginica'];
const NUM_CLASSES = IRIS_CLASSES.length;

// Uma porcentagem dos dados fica para dados de treinamento e outra para dados de teste
function convertToTensors(data, targets, testSplit) {
    /* Calcula o número de exemplo de teste arredondando o tamanho da amostra pela divisão, 
    o número de exemplos de treinamento vai ser o restante*/
    const numExamples = data.length;
    if (numExamples !== targets.length) {
        throw new Error('data and split have different numbers of examples');
    }

    // Randomly shuffle the data
    const numTestExamples = Math.round(numExamples * testSplit);
    const numTrainExamples = numExamples - numTestExamples;

    const xDims = data[0].length;

    // Create a 2D tf.Tensor to hold the feature data
    const xs = tf.tensor2d(data, [numExamples, xDims]);

    // Create a 1D tf.Tensor to hold the label data
    // from the set {0, 1, 2} into one-hot encoding (e.g., 0 -> [1, 0, 0]).
    // Codificação one-hot é um método de representação de dados categóricos, ao invés de usar um único valor,
    // é utilizado um vetor cujo tamanho é igual ao número de classes, onde cada elemento do vetor é 0, exceto o elemento
    const ys = tf.oneHot(tf.tensor1d(targets).toInt(), distinctClasses.length);

    // Os dados são divididos em quatro matrizes com base no número de exemplos de treinamento e teste
    const xTrain = xs.slice([0, 0], [numTrainExamples, xDims]);
    const xTest = xs.slice([numTrainExamples, 0], [numTestExamples, xDims]);
    const yTrain = ys.slice([0, 0], [numTrainExamples]);
    const yTest = ys.slice([0, 0], [numTestExamples]);

    return [xTrain, yTrain, xTest, yTest];
}

export async function getIrisData(testSplit) {
    return tf.tidy(() => {
        const dataByClass = [];
        const targetsByClass = [];
        for (let i = 0; i < NUM_CLASSES; ++i) {
            dataByClass.push([]);
            targetsByClass.push([]);
        }
        for (const example of irisData) {
            const target = example[example.length - 1];
            const data = example.slice(0, example.length - 1);
            dataByClass[target].push(data);
            targetsByClass[target].push(target);
        }

        const xTrains = [];
        const yTrains = [];
        const xTests = [];
        const yTests = [];

        // Dividindo os dados em 4 matrizes
        for (let i = 0; i < IRIS_CLASSES.length; ++i) {
            const [xTrain, yTrain, xTest, yTest] =
                convertToTensors(dataByClass[i], targetsByClass[i], testSplit);
            xTrains.push(xTrain);
            yTrains.push(yTrain);
            xTests.push(xTest);
            yTests.push(yTest);
        }

        // Concatenando as matrizes
        const concatAxis = 0;
        const test1 = xTrains;
        const test2 = tf.concat(xTrains, concatAxis);
        console.log(test1); // [Tensor, Tensor, Tensor]
        console.log(test2); // Tensor

        return [
            tf.concat(xTrains, concatAxis), tf.concat(yTrains, concatAxis),
            tf.concat(xTests, concatAxis), tf.concat(yTests, concatAxis)
        ]; // Retorna os dados de treinamento e teste
    });
}
