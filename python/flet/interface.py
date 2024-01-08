import requests
from tkinter import *

def pegar_cotacoes(cep):
    requisicao = requests.get('https://cep.awesomeapi.com.br/json/05424020')

    requisicao_dic = requisicao.json()

    cotacao_dolar = requisicao_dic['USDBRL']['bid']
    cotacao_euro = requisicao_dic['EURBRL']['bid']
    cotacao_btc = requisicao_dic['BTCBRL']['bid']

    texto = f'Dólar: {cotacao_dolar}\nEuro: {cotacao_euro}\nBitcoin: {cotacao_btc}'

    resposta['text'] = texto

janela = Tk()
janela.title('Interface')

texto = Label(janela, text='Clique no botão para ver as cotações das moedas')
texto.grid(column=0, row=0, padx=5, pady=5)

botao = Button(janela, text='Buscar cotações', command=pegar_cotacoes)
botao.grid(column=0, row=1, padx=5, pady=5)

resposta = Label(janela, text='')
resposta.grid(column=0, row=2, padx=5, pady=5)

janela.mainloop()
