from python.ferramentas import *
import time

lista_de_skus = []
descricao_dos_produtos = []
preco_dos_produtos = []
lista = []

gui.PAUSE = 0.15

# monitor 1360 x 768
clicar_na_imagem = 678, 422
selecionar_troca_imagem = 1143, 545
selecionar_troca_imagem_catalogo = 1142, 451
clicar_subs_imagem = 1000, 432
clicar_subs_imagem_catalogo = 995, 432
clicar_caminho_da_pasta = 1000, 60
clicar_nome_do_arquivo = 1000, 700

def tratrar_sku(codigo_sku):
    sku_tratado = [codigo_sku.split(' ')]
    lista.append(sku_tratado[0][0])


pausa(7,
      'Clique em prosseguir, e em seguida clique na primeira linha para copiar')

valor_de_linhas = entrada_usuario('Qual a quantidade de linhas para serem copiadas?',
                'Quantidade de linhas',
                '16')

linhas_para_copiar = int(valor_de_linhas)

copiar_preco = confirmar('Copiar coluna de preço?',
                         'Coluna preço',
                         'Sim', 'Não')

# pausa(5,
#       'Deseja pausar o programa?')

for i in range(linhas_para_copiar):
    copiar()
    sku = copiar_e_colar()
    lista_de_skus.append(sku)
    gui.press('right')

    produto = copiar_e_colar()
    descricao_dos_produtos.append(produto)

    if copiar_preco == 'Sim':
        gui.press('right')
        preco = copiar_e_colar()
        preco_dos_produtos.append(preco)

    gui.press('home')
    gui.press('down')


itens_por_linha = entrada_usuario('São quantos itens por linha?',
                                  'Quantidade de itens por linha',
                                  '4')

itens_por_linha = int(itens_por_linha)

print('--------Descrição---------')
pausa(5,
      'Coloque o programa no figma e aperte enter no texto para entrar na edição')


def contagem(valor):
    for indice in range(valor, (valor + 4)):
        texto = str(descricao_dos_produtos[indice])
        pyperclip.copy(texto)
        gui.PAUSE = 0.25
        gui.hotkey('ctrl', 'v')
        tab()

    for indice in range(valor, (valor + 4)):
        valor_preco = str(preco_dos_produtos[indice])
        pyperclip.copy(valor_preco)
        gui.PAUSE = 0.25
        gui.hotkey('ctrl', 'v')
        tab()


def catalogo():
    for indice in range(linhas_para_copiar):
        codigo = str(descricao_dos_produtos[indice])
        pyperclip.copy(codigo)
        gui.PAUSE = 0.25
        gui.hotkey('ctrl', 'v')
        tab()

        descricao = str(preco_dos_produtos[indice])
        pyperclip.copy(descricao)
        gui.PAUSE = 0.25
        gui.hotkey('ctrl', 'v')
        tab()


for item in lista_de_skus:
    tratrar_sku(item)

# '''
contagem(0)
contagem(4)
contagem(8)
contagem(12)
# '''

# catalogo()


def trocar_a_foto(codigo_sku):
    credibilidade = 0.5
    gui.PAUSE = 1
    clicar(selecionar_troca_imagem)
    # encontrar_e_clicar('image.png', credibilidade)
    clicar(clicar_subs_imagem)
    # encontrar_e_clicar('image2.png', credibilidade)
    time.sleep(1)
    ir_para_pasta(clicar_caminho_da_pasta, pasta_com_fotos)
    time.sleep(1)
    clicar(clicar_nome_do_arquivo)
    time.sleep(1)
    gui.write(f'{codigo_sku}.png')
    time.sleep(1)
    gui.hotkey('alt', 'a')
    print(f'{codigo_sku} feito')
    time.sleep(1)
    esc()
    time.sleep(1)
    tab()
    time.sleep(0.5)


def trocar_a_foto_catalogo(codigo_sku):
    gui.PAUSE = 1
    clicar(selecionar_troca_imagem_catalogo)
    clicar(clicar_subs_imagem_catalogo)
    time.sleep(1)
    ir_para_pasta(clicar_caminho_da_pasta, pasta_com_fotos)
    time.sleep(1)
    clicar(clicar_nome_do_arquivo)
    time.sleep(1)
    gui.write(f'{codigo_sku}.png')
    time.sleep(1)
    gui.hotkey('alt', 'a')
    print(f'{codigo_sku} feito')
    time.sleep(1)
    esc()
    time.sleep(2)


pausa(1,
      'Selecione a pasta com as imagens sem fundo')

pasta_com_fotos = selecionar_pasta(f'Pasta com as imagens')

print('--------Imagens---------')
pausa(5,
      'Clique na primeira imagem no figma para a imagem ser alterada')

for item_da_lista in lista:
    trocar_a_foto(item_da_lista)

pos_x = 520
pos_y = 210

posicao_imagem = pos_x, pos_y

'''
# use esse for para trocar as fotos do catalogo
for item_da_lista in lista:
    if pos_x > 840:
        pos_y += 130
        pos_x = 520
        posicao_imagem = pos_x, pos_y
        clicar(posicao_imagem)
        time.sleep(1)
        clicar_duas_vezes(posicao_imagem)
        time.sleep(1)
        clicar_duas_vezes(posicao_imagem)
        time.sleep(1)
        trocar_a_foto_catalogo(item_da_lista)
        time.sleep(1)
        pos_x += 80
        posicao_imagem = pos_x, pos_y
    else:
        clicar(posicao_imagem)
        time.sleep(1)
        clicar_duas_vezes(posicao_imagem)
        time.sleep(1)
        clicar_duas_vezes(posicao_imagem)
        time.sleep(1)
        trocar_a_foto_catalogo(item_da_lista)
        time.sleep(1)
        pos_x += 80
        posicao_imagem = pos_x, pos_y

'''

# escrever_as_informacoes()
# programa_trocar_fotos()

alerta('Fim do programa',
       'O programa foi parado com sucesso')
