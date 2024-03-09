import os
from tkinter.filedialog import askdirectory

# teste

pasta_origem = askdirectory(title='Pasta origem')
pasta_destino = askdirectory(title='Pasta destino')

regras_arquivos = {
    '.jpg': 'Imagens',
    '.jpeg': 'Imagens',
    '.png': 'Imagens',

    '.pdf': 'Documentos',
    '.csv': 'Documentos',
    '.xlsx': 'Documentos',
    '.xls': 'Documentos',
    '.xlsm': 'Documentos',
    '.txt': 'Documentos',

    'xml': 'Outros',

    '.zip': 'Outros',
    '.rar': 'Outros',

    'vinculo_produtos_multiloja': 'Apagar',

}

lista_arquivos = os.listdir(pasta_origem)
# print(lista_arquivos) # listar itens da pasta

for nome_arquivo in lista_arquivos:
    for chave in regras_arquivos.keys():
        if chave in nome_arquivo:

            nova_pasta = regras_arquivos[chave]

            nome_completo_original = os.path.join(pasta_origem, nome_arquivo)
            nome_completo_final = os.path.join(pasta_destino, nova_pasta, nome_arquivo)

            caminho_nova_pasta = os.path.join(pasta_destino, nova_pasta)

            if not os.path.exists(caminho_nova_pasta):
                os.mkdir(caminho_nova_pasta)

            os.rename(nome_completo_original, nome_completo_final)




apagar = os.path.join(pasta_origem, 'Apagar')
if os.path.exists(apagar):
    os.rmdir(apagar)

