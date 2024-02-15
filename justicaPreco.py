import torch 
import torch.nn as nn # biblioteca de redes neurais
import torch.optim as optim # otimizador de redes neurais 
import numpy as np
from sklearn.preprocessing import MinMaxScaler

# Dados de entrada
dados = np.array([
    [3.50, '2022-01-01', 50, 10.00],
    [3.60, '2022-02-01', 55, 10.50],
    [3.70, '2022-03-01', 60, 11.00],
    # ... mais linhas aqui ...
]) # Preço do combustível, data do aumento, distância  em km do trajeto, preço da passagem

# Normalização dos dados (excluindo a data)
scaler = MinMaxScaler()
dados[:, [0, 2, 3]] = scaler.fit_transform(dados[:, [0, 2, 3]])

# Separando as variáveis em arrays do NumPy
preco_combustivel = dados[:, 0]  # Todas as linhas, coluna 0
data_aumento = dados[:, 1]       # Todas as linhas, coluna 1
distancia_trajeto = dados[:, 2]  # Todas as linhas, coluna 2
preco_passagem = dados[:, 3]     # Todas as linhas, coluna 3

# 2. Definir a arquitetura da rede neural
class NeuralNetwork(nn.Module):
    def __init__(self, input_size):
        super(NeuralNetwork, self).__init__()
        self.fc1 = nn.Linear(input_size, 64)
        self.fc2 = nn.Linear(64, 32)
        self.fc3 = nn.Linear(32, 1) # Saída de um único neurônio para classificação


    def forward(self, x):
        x = torch.sigmoid(self.camada_entrada(x))
        x = torch.sigmoid(self.camada_oculta(x))
        x = torch.sigmoid(self.fc3(x))  # Usamos sigmoid para obter uma probabilidade entre 0 e 1
        return x
    
# 3. Definir os dados de treinamento (fictícios)
X_train = np.random.rand(100, 3)  # Exemplo: 100 amostras com 3 features
y_train = np.random.randint(2, size=100)  # Exemplo: 100 rótulos binários

# 4. Inicializar o modelo, função de perda e otimizador
input_size = X_train.shape[1]
model = NeuralNetwork(input_size)
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# 5. Treinar a rede neural
num_epochs = 10 # Número de épocas de treinamento, ou seja, número de vezes que a rede neural verá todos os dados de treinamento
for epoch in range(num_epochs):
    inputs = torch.tensor(X_train, dtype=torch.float32) # Converter os dados de treinamento para tensores
    labels = torch.tensor(y_train, dtype=torch.float32) # Converter os rótulos para tensores

    optimizer.zero_grad() # Zerar os gradientes

    outputs = model(inputs) # Passar os dados de treinamento pela rede neural
    loss = criterion(outputs, labels) # Calcular a perda
    loss.backward() # Calcular os gradientes
    optimizer.step() # Atualizar os pesos

    print(f'Época {epoch+1}/{num_epochs}, Perda: {loss.item():.4f}')

# 6. Avaliar a rede neural (usando dados fictícios para teste)
X_test = np.random.rand(50, 3)  # Exemplo: 50 amostras de teste
y_test = np.random.randint(2, size=50)  # Exemplo: 50 rótulos binários de teste

with torch.no_grad(): # Desabilitar o cálculo de gradientes
    inputs = torch.tensor(X_test, dtype=torch.float32) # Converter os dados de teste para tensores
    labels = torch.tensor(y_test, dtype=torch.float32) # Converter os rótulos para tensores

    outputs = model(inputs) # Passar os dados de teste pela rede neural
    loss = criterion(outputs, labels) # Calcular a perda
    predicted = (outputs > 0.5).numpy().astype(int) # Converter as probabilidades em classes

    accuracy = (predicted == y_test).sum() / len(y_test) # Calcular a acurácia
    print(f'Acurácia: {accuracy:.2f}')

# https://www.bahianoticias.com.br/noticia/234379-em-11-anos-passagem-de-onibus-de-salvador-teve-nove-reajustes-e-dobrou-de-valor
# https://carioca.rio/servicos/valores-das-tarifas-de-onibus-e-integracoes/
# https://www.metro.sp.gov.br/sua-viagem/tarifas.aspx
# https://frotas.localiza.com/blog/preco-da-gasolina-no-brasil