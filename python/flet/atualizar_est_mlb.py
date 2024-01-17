from python.programas.meta.ignorar import token_dy, token_zx, link_code_dy, link_code_zx
import flet as ft
import requests
import json


def pegar_token(token, code_gerado):
    url = "https://api.mercadolibre.com/oauth/token"
    payload = f'grant_type=authorization_code&client_id={token[0]}&client_secret={token[1]}&code={code_gerado}&redirect_uri={token[2]}'
    headers = {
    'accept': 'application/json',
    'content-type': 'application/x-www-form-urlencoded'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    retorno = response.json()
    return retorno


def refresh_token(token, refresh_token_gerado):
    url = "https://api.mercadolibre.com/oauth/token"
    payload = (f'grant_type=refresh_token&client_id={token[0]}'
               f'&client_secret={token[1]}'
               f'&refresh_token={refresh_token_gerado}')
    headers = {
    'accept': 'application/json',
    'content-type': 'application/x-www-form-urlencoded'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    retorno = response.json()
    print(retorno)
    return retorno


def atualizar_estoque(produto, quantidade, access_token):
    url = f"https://api.mercadolibre.com/items/{produto}"

    payload = json.dumps({
    "available_quantity": quantidade
    })

    headers = {
    'Authorization': f'Bearer {access_token}',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }

    response = requests.request("PUT", url, headers=headers, data=payload)

    retorno = response.json()
    # retorno = f'Título: {retorno["title"]} | Estoque: {qtd_mlb.value}'
    return retorno


def lista_para_atualizar(lista, quantidade, access_token):
    for item in lista:
        atualizar_estoque(item, quantidade, access_token)
    # gerar um novo refresh token aqui


def refresh_por_empresa(token):
    refresh_token_empresa = input('Cole aqui o token temporário\n')

    retorno = pegar_token(token, refresh_token_empresa)
    refresh_token_empresa = retorno["refresh_token"]

    retorno = refresh_token(token, refresh_token_empresa)
    return retorno


def programa():
    pergunta = input('Você deseja fazer um refresh?\n1 - Sim\n2 - Não\n')

    if pergunta == '1':
        pergunta = input('Para qual empresa?\n1 - DY\n2 - ZX\n')
        if pergunta == '1':
            print(link_code_dy)
            retorno = refresh_por_empresa(token_dy)

            access_token_dy = retorno["access_token"]
            refresh_token_dy = retorno["refresh_token"]
            user_id_dy = retorno["user_id"]

            print(access_token_dy)
            print(refresh_token_dy)
            print(user_id_dy)

            return access_token_dy


        elif pergunta == '2':
            print(link_code_zx)
            retorno = refresh_por_empresa(token_zx)

            access_token_zx = retorno["access_token"]
            refresh_token_zx = retorno["refresh_token"]
            user_id_zx = retorno["user_id"]

            print(access_token_zx)
            print(refresh_token_zx)
            print(user_id_zx)

            return access_token_zx

        else:
            programa()

    elif pergunta == '2':
        programa()
    else:
        programa()


def main(page):
    page.title = "Atualizar estoque no Mercado Livre"
    page.window_title_bar_hidden = False
    page.window_frameless = False
    page.window_left = 100
    page.window_top = 100
    page.window_width = 400
    page.window_height = 540
    page.window_always_on_top = False
    # page.window_movable = True
    page.window_opacity = 0.90


    def btn_click(e):
        if not id_mlb.value:
            id_mlb.error_text = "Por favor insira um id"
            page.update()
        else:
            # valor = pergunta.value
            conta_escolhida = 'ZX'
            if conta_mlb.value == 'ZX':
                conta_escolhida = programa()
            elif conta_mlb.value == 'DY':
                conta_escolhida = programa()
            else:
                page.update()

            valor_id = f'MLB{id_mlb.value}'
            resposta = atualizar_estoque(valor_id, qtd_mlb.value, conta_escolhida)
            retorno = f'Título: {resposta["title"]} | Estoque: {qtd_mlb.value}'
            txt_resposta = ft.Text(f"{retorno}", size=20)
            page.add(txt_resposta)


    texto_dica = ft.Text(f"Insira o id do Mercado Livre", size=25)
    id_mlb = ft.TextField(label="Qual o id do anúncio?", width=200, autofocus=True, value='1849528667', prefix_text='MLB ')
    qtd_mlb = ft.TextField(label="Quantidade", width=200, value='33')
    conta_mlb = ft.TextField(label="Conta", width=200, value='ZX')
    btn_perguntar = ft.ElevatedButton("Atualizar", on_click=btn_click)
    btn_fazer_refresh = ft.ElevatedButton("Fazer refresh", on_click=programa)

    # page.add(texto_dica)
    page.add(texto_dica, id_mlb, qtd_mlb, conta_mlb, btn_perguntar, btn_fazer_refresh)


ft.app(target=main)
