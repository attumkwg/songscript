FROM ubuntu:18.04

COPY scripts/provisioning.sh /tmp/provisioning.sh
RUN chmod +x /tmp/provisioning.sh
# provisioning.sh による必要ライブラリのインストール
RUN /tmp/provisioning.sh

# nginxの初期設定を削除
RUN rm /etc/nginx/sites-enabled/default
# php-fpmの初期設定を削除
RUN rm /etc/php/7.2/fpm/pool.d/www.conf

# ubuntuユーザーを追加
RUN useradd -m -s /bin/bash -u 1000 -g users ubuntu

RUN apt install sudo
# ubuntuでのsudoのパスワード要求をしないように
RUN echo "ubuntu ALL=(ALL:ALL) NOPASSWD:ALL" >> /etc/sudoers
RUN chown -R ubuntu:users /srv
RUN chmod -R g+x /srv

# 開発環境でのみ有効となるようxdebugの設定を行う
ARG INSTALL_XDEBUG=false

RUN if [ ${INSTALL_XDEBUG} = true ]; then \
    pecl channel-update pecl.php.net \
    && pecl install xdebug \
    ;fi
