import pyautogui as gui
import time

pasta = f'D:/Organizar/Tudo/A Pasta Geral/arrumar/ETP1 LUCAS/imagens/sem_fundo'

prefixo = 'cri-'
extensao_arquivo = '.png'

clicar_na_imagem = 961, 557
selecionar_troca_imagem = 1709, 541
clicar_subs_imagem = 1579, 689
clicar_pasta_sem_fundo = 100, 209
fechar_subs_imagem = 1659, 508
editar_nome_arquivo = 51, 140
clicar_em_exportar = 1862, 163
pasta_post_redes = 80, 187
clicar_em_salvar = 1749, 996

contador = 0
gui.PAUSE = 1
gui.alert('O progama foi inciado, solte o mouse e teclado')
time.sleep(1)

lista_inativos = ['58',
'60',
'68',
'72',
'77',
'79',
'81',
'83',
'101',
'105',
'115',
'123',
'125',
'195',
'197',
'323',
'325',
'327',
'329',
'331',
'333',
'335',
'337',
'342',
'355',
'367',
'369',
'371',
'373',
'375',
'377',
'379',
'381',
'383',
'387',
'389',
'391',
'395',
'397',
'399',
'401',
'413',
'415',
'425',
'429',
'431',
'439',
'443',
'451',
'453',
'455',
'457',
'469',
'473',
'475',
'477',
'481',
'483',
'485',
'485cx',
'491',
'497',
'499',
'500',
'502',
'504',
'510',
'512',
'518',
'521',
'523',
'524',
'525',
'526',
'527',
'528',
'530',
'536',
'538',
'562',
'564',
'566',
'568',
'570',
'582',
'586',
'592',
'594',
'598',
'600',
'602',
'604',
'606',
'608',
'610',
'612',
'614',
'616',
'618',
'620',
'622',
'624',
'626',
'628',
'630',
'632',
'669',
'703',
'721',
'723',
'725',
'727',
'729',
'731',
'735',
'737',
'739',
'741',
'743',
'745',
'747',
'749',
'761',
'827',
'829',
'839',
'857',
'859',
'861',
'863',
'865',
'867',
'869',
'871',
'873',
'877',
'879',
'881',
'883',
'885',
'887',
'889',
'891',
'893',
'895',
'899',
'901',
'903',
'905',
'907',
'909',
'911',
'913',
'915',
'917',
'919',
'921',
'923',
'925',
'927',
'929',
'931',
'943',
'947',
'949',
'951',
'955',
'959',
'961',
'963',
'965',
'967',
'969',
'971',
'973',
'975',
'977',
'979',
'981',
'983',
'985',
'987',
'989',
'991',
'993',
'995',
'997',
'999',
'1001',
'1003',
'1005',
'1007',
'1009',
'1011',
'1013',
'1015',
'1017',
'1019',
'1021',
'1023',
'1081',
'1083',
'1085',
'1091',
'1095',
'1097',
'1143',
'1145',
'1147',
'1149',
'1151',
'1153',
'1155',
'1169',
'1171',
'1173',
'1175',
'1177',
'1179',
'1191',
'1193',
'1195',
'1197',
'1199',
'1209',
'1211',
'1213',
'1215',
'1217',
'1219',
'1221',
'1223',
'1225',
'1227',
'1229',
'1231',
'1233',
'1235',
'1237',
'1239',
'1241',
'1243',
'1245',
'1247',
'1249',
'1251',
'1253',
'1287',
'1289',
'1291',
'1293',
'1295',
'1297',
'1299',
'1301',
'1303',]


def tab():
    gui.PAUSE = 0.25
    gui.press('tab')
    gui.PAUSE = 1


def clicar(posicao):
    gui.PAUSE = 0.25
    gui.moveTo(posicao)
    gui.click(posicao)
    gui.PAUSE = 1


def clicar_duas_vezes(posicao):
    gui.PAUSE = 0.25
    gui.moveTo(posicao)
    gui.doubleClick(posicao)
    gui.PAUSE = 1


def exportar():
    gui.hotkey('ctrl', 'shift', 'e')

def prgm(sku):
    time.sleep(0.75)
    gui.PAUSE = 1
    clicar(clicar_na_imagem)
    clicar(selecionar_troca_imagem)
    clicar(clicar_subs_imagem)
    time.sleep(0.5)
    clicar(clicar_pasta_sem_fundo)
    tab()
    tab()
    gui.write(f'{sku}.png')
    gui.press('enter')
    clicar(fechar_subs_imagem)
    clicar_duas_vezes(editar_nome_arquivo)
    gui.write(f'cri-{sku}')
    gui.press('enter')
    exportar()
    time.sleep(0.5)
    clicar(clicar_em_exportar)
    time.sleep(1.5)
    clicar(pasta_post_redes)
    time.sleep(0.5)
    clicar(clicar_em_salvar)
    time.sleep(1)
    print(f'{sku} feito')





'''
for lista in range(1):
    #prgm()
    contador = contador + 1
    #gui.alert('{} atualizados'.format(contador))
    print('{} atualizados'.format(contador))
    
    
def teste(sku):
    print(f'{sku} feito')
    
'''


# clicar(clicar_na_imagem)


for lista in lista_inativos:
    # teste(lista)
    #prgm(lista)
    pass

print(len(lista_inativos))


# print(pasta)

#gui.hotkey('win', 'd')

#gui.hotkey('alt', 'tab')
