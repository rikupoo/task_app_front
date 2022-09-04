FROM node:16.17.0-alpine

ARG WORKDIR
ARG CONTAINER_PORT

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    #コンテナのnuxt.jsをブラウザから参照するためにip0.0.0.0に紐づける
    #https://ja.nuxtjs.org/faq/host-port/
    HOST=0.0.0.0

# ENV check（このRUN命令は確認のためなので無くても良い）
RUN echo ${HOME}
RUN echo ${CONTAINER_PORT}

WORKDIR ${HOME}

#公開用ポート番号を指定
#http://localhost(0.0.0.0):3000
EXPOSE ${CONTAINER_PORT}